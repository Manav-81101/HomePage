import React from "react";
import {
  RowContainer,
  DesignButton,
  textStyles,
  NavLink,
} from "../components/styledComponents";

function Navbar() {
  return (
    <div>
      <RowContainer
        style={{
          paddingVertical: 20,
          position: "sticky",
          top: 0,
          backgroundColor: "#fff",
        }}
      >
        <img
          src="https://hellosivi.com/wp-content/uploads/2021/12/hellosivi-logo-1.png"
          alt="logo"
        />
        <RowContainer style={{ width: "40%" }}>
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
        </RowContainer>
      </RowContainer>
    </div>
  );
}

export default Navbar;
