import SellModal from "../Component/SellModal";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Web3 from "web3";

import axios from "axios";

const SellModalContain = ({
  isOpen,
  setIsOpen,
  click,
  main,
  nowPageUser,
  NFlist,
}) => {
  // Hook
  const [buybuy, setBuybuy] = useState();
  const [count, setCount] = useState(1);

  // redux
  const theme = useSelector((state) => state.theme);
  const { account } = useSelector((state) => state.userInfo);
  // web3
  const web3 = new Web3(window.ethereum);
  // NFT 구매 트랜잭션
  const goBuybuy = async () => {
    const _butbuy = (
      await axios.post(`/api/nft/buybuy`, { data: main.hash, account: account })
    ).data;
    setBuybuy(_butbuy);
    // 권한은
    const buyInfo = await web3.eth.sendTransaction(_butbuy.BuyObj);
    const render = (
      await axios.post(`/api/nft/render`, { data: main.hash, account: account })
    ).data;
  };

  const favClick = async () => {
    setCount(count + 1);
    const abc = await axios.post("/api/user/info", { account });
    console.log(abc);
  };
  return (
    <>
      <SellModal
        theme={theme}
        buybuy={buybuy}
        goBuybuy={goBuybuy}
        click={click}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        main={main}
        favClick={favClick}
        nowPageUser={nowPageUser}
        NFlist={NFlist}
      />
    </>
  );
};
export default SellModalContain;
