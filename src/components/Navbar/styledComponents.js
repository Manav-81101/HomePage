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
  width: auto;
  @media (max-width: 768px) {
    & {
      margin: 0px;
      width: 100%;
    }
  }
`;

const NavItemsContainer = styled(RowColContainer)`
  width: 40%;
  background-color: #fff;
  display: flex;
  height: auto;
  overflow: hidden;
  @media (max-width: 768px) {
    & {
      position: absolute;
      height: ${(props) => (props.visible ? "270px" : "0px")};
      background: #fff;
      width: 100%;
      right: 50%;
      transform: translate(50%, 50px);
      padding-left: 10px;
      align-items: flex-start;
      box-shadow: ${(props) =>
        props.visible ? "2px 2px 5px 5px rgba(0, 0, 0, 0.1)" : "none"};
      border-top: ${(props) => (props.visible ? "3px solid #1882d0" : "none")};
      transition: all 0.5s;
    }
  }
`;
const NavLink = styled.a`
  text-decoration: none;
`;
export { NavContainer, NavItemsContainer, NavLink, ToggleButton };
