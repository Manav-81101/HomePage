import React from "react";
import {
  textStyles,
  IconText,
  DesignPersonContainer,
} from "./styledComponents";

function DesignPerson({ img, title, quesText, description }) {
  return (
    <DesignPersonContainer>
      <img
        style={{
          position: "absolute",
          left: 68,
          top: -50,
        }}
        src={img}
      />
      <IconText style={{ fontWeight: "bold", marginTop: 65 }}>{title}</IconText>
      <p style={{ ...textStyles, fontWeight: "600" }}>{quesText}</p>
      <p style={textStyles}>{description}</p>
    </DesignPersonContainer>
  );
}

export default DesignPerson;
