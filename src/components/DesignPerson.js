import React from "react";
import { textStyles, IconText } from "./styledComponents";

function DesignPerson({ img, title, quesText, description }) {
  return (
    <div style={{ width: "240px", textAlign: "center" }}>
      <img src={img} />
      <IconText style={{ fontWeight: "bold" }}>{title}</IconText>
      <p style={{ ...textStyles, fontWeight: "600" }}>{quesText}</p>
      <p style={textStyles}>{description}</p>
    </div>
  );
}

export default DesignPerson;
