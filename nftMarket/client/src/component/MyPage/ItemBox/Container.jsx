import ItemBoxComp from "./Component";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const ItemBoxCont = ({ item, index, NFlist }) => {
  const theme = useSelector((state) => state.theme);
  const user = useSelector((state) => state.userInfo);

  const [nowPageUser, setNowPageUser] = useState("");
  // 테마
  const [zIndex, setZindex] = useState("3");
  const handleMouseOver = () => {
    setZindex("1");
  };
  const handleMouseOut = () => {
    setZindex("3");
  };
  //
  useEffect(() => {
    setNowPageUser(user.account);
  }, [user]);

  return (
    <ItemBoxComp
      item={item}
      theme={theme}
      NFlist={NFlist}
      nowPageUser={nowPageUser}
    ></ItemBoxComp>
  );
};

export default ItemBoxCont;
