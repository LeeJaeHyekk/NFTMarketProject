import ItemBoxComp from "./Component";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const ItemBoxCont = ({ users }) => {
  const [NFlist, setNFlist] = useState([]);
  const [main, setMain] = useState("");
  const [nowPageUser, setNowPageUser] = useState("");
  const [zIndex, setZindex] = useState("3");

  const theme = useSelector((state) => state.theme);
  const user = useSelector((state) => state.userInfo);

  // 메인을 기준으로 사진 설정
  const latestNFTlist = async () => {
    const _NFlist = (
      await axios.post("/api/nft/latestNFT", { account: users.account })
    ).data;
    setNFlist(_NFlist);
  };
  // 테마
  const handleMouseOver = () => {
    setZindex("1");
  };

  const handleMouseOut = () => {
    setZindex("3");
  };

  // 메인페이지 의 아이템 메인 설정
  useEffect(() => {
    setMain(NFlist[0]);
  }, [NFlist]);
  // 메인에 서브 아이템들 설정(최신 4개)
  useEffect(() => {
    latestNFTlist();
  }, []);
  // 현재 위치의 지갑주소
  useEffect(() => {
    setNowPageUser(user.account);
  }, [user]);
  //

  return (
    <ItemBoxComp
      handleMouseOver={handleMouseOver}
      handleMouseOut={handleMouseOut}
      zIndex={zIndex}
      setMain={setMain}
      main={main}
      theme={theme}
      NFlist={NFlist}
      item={users}
      nowPageUser={nowPageUser}
    ></ItemBoxComp>
  );
};

export default ItemBoxCont;
