import MainComp from "./Component";
import { useEffect, useState } from "react";
import axios from "axios";

const MainCont = () => {
  const [allUsers, setallUsers] = useState([]);

  const userAll = async () => {
    const _DESCuserId = (await axios.post("/api/nft/findAllUser")).data;
    setallUsers(_DESCuserId);
  };

  useEffect(() => {
    userAll();
  }, []);

  return <MainComp allUsers={allUsers}></MainComp>;
};
export default MainCont;
