import React from "react";
import { RowContainer, ColumnContainer, IconText } from "../styledComponents";

const textBlack = {
    color: "#000000",
    textAlign: "left",
    alignSelf: "flex-start",
  },
  iconStyle = { marginRight: 10 };

function Section2() {
  return (
    <div>
      <RowContainer style={{ maxWidth: "60%", margin: "auto" }}>
        <ColumnContainer>
          <img
            src="https://i.ibb.co/C24wzvT/sivi-mascot.png"
            alt="sivi-mascot"
          />
        </ColumnContainer>
        <ColumnContainer>
          <h1 style={{ fontFamily: "Poppins" }}>
            Sivi Your AI Design Companion
          </h1>
          <IconText style={textBlack}>
            Sivi gathers input like a human, curates relevant assets, and
            generates
            <br /> designs adhering to visual design principles.
          </IconText>
          <RowContainer>
            <ColumnContainer>
              <IconText style={textBlack}>
                <img
                  style={iconStyle}
                  src="https://i.ibb.co/RSszKv0/Vector.png"
                />
                Original, template-free designs
              </IconText>
              <IconText style={textBlack}>
                <img
                  style={iconStyle}
                  src="https://i.ibb.co/RSszKv0/Vector.png"
                />
                High conversion rates
              </IconText>
              <IconText style={textBlack}>
                <img
                  style={iconStyle}
                  src="https://i.ibb.co/RSszKv0/Vector.png"
                />
                Faster turn-around time
              </IconText>
            </ColumnContainer>
            <ColumnContainer>
              <IconText style={textBlack}>
                <img
                  style={iconStyle}
                  src="https://i.ibb.co/RSszKv0/Vector.png"
                />
                Original, template-free designs
              </IconText>
              <IconText style={textBlack}>
                <img
                  style={iconStyle}
                  src="https://i.ibb.co/RSszKv0/Vector.png"
                />
                High conversion rates
              </IconText>
              <IconText style={textBlack}>
                <img
                  style={iconStyle}
                  src="https://i.ibb.co/RSszKv0/Vector.png"
                />
                Faster turn-around time
              </IconText>
            </ColumnContainer>
          </RowContainer>
        </ColumnContainer>
      </RowContainer>
    </div>
  );
}

export default Section2;
