import styled from "styled-components";
import ItemBoxCont from "./ItemBox/Container";

const MainComp = ({ allUsers }) => {
  return (
    <Main>
      {/* DB All users */}
      {allUsers?.map((item, index) => {
        if (!undefined) {
          return (
            <Box key={index}>
              <ItemBoxCont users={item} key={index}></ItemBoxCont>
            </Box>
          );
        } else {
          <></>;
        }
      })}
    </Main>
  );
};

export default MainComp;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
