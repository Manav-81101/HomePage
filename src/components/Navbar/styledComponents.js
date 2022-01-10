import styled from "styled-components";
import { RowColContainer, RowContainer } from "../styledComponents";
const ToggleButton = styled.button`
  background: transparent;
  border: none;
  display: none;
  @media (max-width: 768px) {
    & {
      display: block;
    }
  }
`;
const NavContainer = styled(RowContainer)`
  justify-content: space-between;
  width: 70%;
  margin: 0 80px;
  @media (max-width: 768px) {
    & {
      margin: 0px;
      width: 100%;
    }
  }
`;

const NavItemsContainer = styled(RowColContainer)`
  width: 40%;
  position: absolute;
  right: 200px;
  background-color: #fff;
  display: flex;
  height: auto;
  overflow: hidden;
  @media (max-width: 768px) {
    & {
      height: ${(props) => (props.visible ? "230px" : "0px")};
      background: #fff;
      width: 100%;
      right: 50%;
      transform: translate(50%, 150px);
      padding-left: 10px;
      align-items: flex-start;
      border-top: ${(props) => (props.visible ? "3px solid #1882d0" : "none")};
      transition: height 0.5s;
    }
  }
`;
const NavLink = styled.a`
  text-decoration: none;
`;
export { NavContainer, NavItemsContainer, NavLink, ToggleButton };
