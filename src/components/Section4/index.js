import React from "react";
import {
  RowContainer,
  ColumnContainer,
  IconText,
  Title,
} from "../styledComponents";

const headStyles = {
  fontSize: 35,
  fontWeight: "500",
};
const textStyles = {
  color: "#000",
  margin: 0,
  marginTop: 10,
  fontWeight: "400",
};
const iconStyle = { marginRight: 10 };
const tickImg = "https://i.ibb.co/RSszKv0/Vector.png";
const items = [
  "Generate Designs",
  "For Your Content",
  "In Your brand style",
  "Within a minute",
];

const oldItems = [
  {
    img: "https://i.ibb.co/NWLv6Tv/Group-51.png",
    text: "Trying to find the right template; just like looking for a needle in a haystack.",
  },
  {
    img: "https://i.ibb.co/mJ3DLB3/time-1.png",
    text: "Forcefully adapting the content for the chosen template.",
  },
  {
    img: "https://i.ibb.co/jG6kJKQ/Group-46.png",
    text: "Wasting a lot of time in editing the template to match your brand style.",
  },
];

function Section4() {
  return (
    <RowContainer style={{ width: "90%", margin: "auto" }}>
      <ColumnContainer>
        <Title style={headStyles}>
          The Old Way{" "}
          <IconText style={textStyles}>
            Stuck with templates and design editing tools{" "}
          </IconText>
        </Title>
        <ColumnContainer style={{ height: "650px" }}>
          {oldItems.map((item, index) => (
            <RowContainer
              key={index}
              style={{
                width: "60%",
                margin: "auto",
                justifyContent: "space-between",
              }}
            >
              <img src={item.img} />
              <IconText style={{ width: "50%" }}>{item.text}</IconText>
            </RowContainer>
          ))}
        </ColumnContainer>
      </ColumnContainer>
      <ColumnContainer
        style={{
          width: 1,
          height: "680px",
          borderRightWidth: 2,
          borderRightStyle: "dashed",
        }}
      />
      <ColumnContainer>
        <Title style={headStyles}>
          The All New Sivi Way
          <IconText style={textStyles}>
            Generate designs rather than editing templates{" "}
          </IconText>
        </Title>
        <img src="https://i.ibb.co/3mHkJJz/image-8.png" />
        <ColumnContainer>
          {items.map((item, index) => (
            <IconText
              key={index}
              style={{
                color: "#000",
                alignSelf: "center",
                width: 200,
                textAlign: "left",
              }}
            >
              <img style={iconStyle} src={tickImg} />
              {item}
            </IconText>
          ))}
        </ColumnContainer>
      </ColumnContainer>
    </RowContainer>
  );
}

export default Section4;
