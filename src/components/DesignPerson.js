import React from "react";
import { textStyles, IconText } from "./styledComponents";

function DesignPerson({ img, title, quesText, description }) {
  return (
    <div
      style={{
        width: "240px",
        textAlign: "center",
        backgroundColor: "red",
        position: "relative",
        padding: 10,
        borderRadius: 5,
        background:
          "linear-gradient(141.53deg, #1DD6CE22 2.66%, #0087D722 50.52%, #BE4EBE22 111.52%)",
      }}
    >
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
    </div>
  );
}

export default DesignPerson;
