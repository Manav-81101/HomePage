import styled from "styled-components";
import { RowContainer } from "../styledComponents";

export const RowColContainer = styled(RowContainer)`
  @media (max-width: 768px) {
    & {
      width: 100%;
      flex-direction: column;
    }
  }
`;
export const CenterText = styled.p`
  text-align: center;
  font-size: 20px;
  margin: 12px auto;
  font-family: Poppins;
  width: 50%;
  @media (max-width: 768px) {
    & {
      width: 85%;
      font-size: 17px;
    }
  }
`;

export const HeaderText = styled.h3`
  font-family: Poppins;
  color: #0005;
  font-size: 22px;
  @media (max-width: 768px) {
    & {
      font-size: 14px;
      text-align: center;
    }
  }
`;
