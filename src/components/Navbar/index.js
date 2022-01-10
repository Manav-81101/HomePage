import React from "react";
import {
  DesignButton,
  textStyles,
  RowColContainer,
  ColumnContainer,
} from "../styledComponents";
import {
  NavLink,
  ToggleButton,
  NavContainer,
  NavItemsContainer,
} from "./styledComponents";

function Navbar() {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <ColumnContainer>
      <RowColContainer
        style={{
          paddingVertical: 20,
          position: "sticky",
          top: 0,
          backgroundColor: "#fff",
          width: window.innerWidth > 768 ? "90%" : "90%",
        }}
      >
        <NavContainer>
          <img
            src="https://hellosivi.com/wp-content/uploads/2021/12/hellosivi-logo-1.png"
            alt="logo"
            style={{ width: window.innerWidth > 768 ? "auto" : "140px" }}
          />
          <ToggleButton onClick={() => setExpanded(!expanded)}>
            <img
              src="https://i.ibb.co/mcQv83h/menu.png"
              width="20"
              alt="menu"
            />
          </ToggleButton>
        </NavContainer>
        <NavItemsContainer visible={expanded}>
          <NavLink style={textStyles} href="#home">
            Home
          </NavLink>
          <NavLink style={textStyles} href="#how-it-words">
            How It Works
          </NavLink>
          <NavLink style={textStyles} href="#tour">
            Tour
          </NavLink>
          <NavLink style={textStyles} href="#blog">
            Blog
          </NavLink>
          <NavLink style={textStyles} eventKey={2} href="#memes">
            Team
          </NavLink>
          <DesignButton style={textStyles}>Get Instant Design</DesignButton>
        </NavItemsContainer>
      </RowColContainer>
    </ColumnContainer>
  );
}

export default Navbar;
