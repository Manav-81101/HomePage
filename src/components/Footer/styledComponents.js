import styled from "styled-components";
import { ColumnContainer } from "../styledComponents";

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FooterText = styled.p`
  font-family: Poppins;
  color: #fff;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  align-self: flex-start;
`;

export const RowColContainer = styled(RowContainer)`
  @media (max-width: 768px) {
    & {
      width: 100%;
      flex-direction: column;
      height: 1000px;
      justify-content: space-around;
      algin-items: center;
    }
  }
`;

export const FooterContainer = styled.div`
  background: url(https://i.ibb.co/Y8Td0mp/footer-bg.png) center no-repeat;
  background-size: cover;
  width: 100%;
  height: 650;
  margin-top: 150;
  padding: 100px 10px;
  @media (max-width: 768px) {
    & {
      height: 1200px;
      padding: 20px 0;
    }
  }
`;
export const FooterContentContainer = styled(ColumnContainer)`
  height: 650px;
  @media (max-width: 768px) {
    & {
      height: 1100px;
    }
  }
`;
