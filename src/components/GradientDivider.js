import React from "react";
import {
  GradientContainer,
  CircleText,
  CircleIcon,
  Icon,
} from "./styledComponents";
const headingStyles = {
  fontFamily: "Poppins",
  color: "#000",
  fontWeight: "400",
  textAlign: "center",
  width: "45%",
  margin: "auto",
};

function GradientDivider({ text, icon }) {
  return (
    <GradientContainer style={{ position: "relative" }}>
      <h3 style={headingStyles}>{text}</h3>
      {icon}
    </GradientContainer>
  );
}

export default GradientDivider;
