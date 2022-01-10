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

const items = ["Home", "How It Works", "Tour", "Blog", "Team"];

function Navbar() {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <ColumnContainer>
      <RowColContainer
        style={{
          position: "sticky",
          top: 0,
          width: "95%",
          justifyContent: "space-between",
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
          {items.map((item, index) => (
            <NavLink
              key={index}
              style={{ ...textStyles, marginRight: 30 }}
              href={`#${item}`}
            >
              {item}
            </NavLink>
          ))}
          <DesignButton style={textStyles}>Get Instant Design</DesignButton>
        </NavItemsContainer>
      </RowColContainer>
    </ColumnContainer>
  );
}

export default Navbar;
