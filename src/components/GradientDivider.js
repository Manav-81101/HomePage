import React from "react";
import {
  GradientContainer,
  CircleText,
  CircleIcon,
  Icon,
  gradientHeadingStyles,
} from "./styledComponents";

function getText(text) {
  switch (typeof text) {
    case "string":
      return <h3 style={gradientHeadingStyles}>{text}</h3>;
    case "object":
      return text;
  }
}

function GradientDivider({ text, icon }) {
  return (
    <GradientContainer style={{ position: "relative" }}>
      {getText(text)}
      {icon}
    </GradientContainer>
  );
}

export default GradientDivider;
