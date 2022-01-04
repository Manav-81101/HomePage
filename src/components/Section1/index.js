import React from "react";
import {
  Title,
  RowContainer,
  ColumnContainer,
  DesignButtonFilled,
  textStyles,
  Square,
  IconText,
  CenterText,
  Icon,
} from "../styledComponents";

const icons = [
  {
    src: "https://i.ibb.co/dcZNDZg/icon.png",
    text: "Advertisements",
  },
  {
    src: "https://i.ibb.co/MC41BbN/megaphone.png",
    text: "Marketing",
  },
  {
    src: "https://i.ibb.co/XpVc6Z9/web-24px.png",
    text: "Website Content",
  },
  {
    src: "https://i.ibb.co/DfYr3jP/volume-up-24px.png",
    text: "Social Posts",
  },
  {
    src: "https://i.ibb.co/sgC4Ft7/web-24px.png",
    text: "Product Banners",
  },
  {
    src: "https://i.ibb.co/TwRjwfY/Group-63.png",
    text: "NewsLetters",
  },
];
function Section1() {
  return (
    <div>
      <Title>Generate instant graphic designs</Title>
      <CenterText
        style={{ fontSize: 20, marginTop: 12, fontFamily: "Poppins" }}
      >
        Instantly convert your text content into visual designs for your
        campaigns, product banners,
        <br /> website content, ads, email newsletters, and more in 1/100th of
        the time and cost.
      </CenterText>
      <RowContainer
        style={{
          height: "4rem",
          width: "100%",
        }}
      >
        <DesignButtonFilled
          style={{
            ...textStyles,
            fontSize: 18,
            fontWeight: "400",
          }}
        >
          Get Instant Designs
        </DesignButtonFilled>
      </RowContainer>
      <ColumnContainer
        style={{ padding: 5, width: "60%", margin: "50px auto" }}
      >
        <img
          style={{ width: "100%" }}
          src="https://i.ibb.co/h7P4rhv/text-to-designs.png"
          alt="text-to-designs"
        />
        <RowContainer>
          <h3 style={{ ...textStyles, color: "#0005", fontSize: 22 }}>
            Add your Content
          </h3>
          <h3 style={{ ...textStyles, color: "#0005", fontSize: 22 }}>
            Get Instant Designs
          </h3>
        </RowContainer>
      </ColumnContainer>
      <RowContainer
        style={{ width: "70%", margin: "auto", marginVertical: 10 }}
      >
        {icons.map((item, index) => (
          <Square key={index}>
            <Icon src={item.src} style={{ width: "60px", height: "60px" }} />
            <IconText>{item.text}</IconText>
          </Square>
        ))}
      </RowContainer>
    </div>
  );
}

export default Section1;
