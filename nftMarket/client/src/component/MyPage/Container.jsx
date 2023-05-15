import MypageComp from "./Component";
// HOOK
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// Axios
import axios from "axios";
// Redux
import { useSelector } from "react-redux";

const MypageCont = () => {
  // HOOK
  const [NFlist, setNFlist] = useState([]);
  const [sellNft, setSellNft] = useState([]);
  const [User, setUser] = useState([]);
  const [isModal, setIsModal] = useState(true);
  const [isNameModal, setIsNameModal] = useState(true);
  const [userProfile, setUserProfile] = useState("");

  // console.log("User", User); 추후 사용 :: user 컬럼
  //login 인한 지갑주소
  const location = useLocation();
  const { account } = useSelector((state) => state.userInfo);

  // get 통신 방식의 현재 path 지갑주소
  let tempPath = location.pathname;
  let path = tempPath.slice(9, tempPath.length);

  // 마이페이지 이용자와 현재 로그인한 유저 확인
  const checkNowPageUser = async () => {
    const _User = (await axios.post(`/api/nft/toMypage`, { path })).data;
    setUser(_User);
  };
  // 마이페이지에 있는 NFT와 로그인한 유저가 갖고있는 NFT가 동일한지 확인
  const checkNowPageNFT = async () => {
    const _NFlist = (await axios.post(`/api/nft/myNFT`, { path })).data;
    setNFlist(_NFlist);
  };
  // 모달의 형태 확인1(true/false)
  const modalClick = () => {
    setIsModal(!isModal);
  };
  // 모달의 형태 확인2(true/false)
  const nameModalClick = () => {
    setIsNameModal(!isNameModal);
  };
  // DB에 판매신청된 NFT목록 가져오는 함수
  const sellNftList = async () => {
    const _sellNft = (await axios.post(`/api/nft/mySellNft`, { path })).data;
    setSellNft(_sellNft);
  };
  // 유저 정보 삭제
  const remove = async () => {
    await axios.post("/api/user/remove", { userProfile });
  };
  // 유저 정보 변경
  const replaceName = (name) => {
    console.log(name, account);
    axios
      .post("/api/user/replace", {
        nickName: name,
        account: account,
      })
      .then((data) => window.location.reload());
  };

  useEffect(() => {
    checkNowPageUser();
    checkNowPageNFT();
    sellNftList();
    (async () => {
      if (account) {
        await axios
          .post("/api/user/findProfile", { account })
          .then((data) => setUserProfile(data.data[0].profile));
      }
    })();
  }, [account]);

  return (
    <MypageComp
      NFlist={NFlist}
      path={path}
      remove={remove}
      isModal={isModal}
      replaceName={replaceName}
      isNameModal={isNameModal}
      userProfile={userProfile}
      setIsModal={setIsModal}
      nameModalClick={nameModalClick}
      modalClick={modalClick}
      sellNft={sellNft}
    ></MypageComp>
    // account 를 확인해서 // 로그인 화면으로 넘어가게 만들어
  );
};

export default MypageCont;
