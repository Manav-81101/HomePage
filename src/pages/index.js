import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

import {
  RowContainer,
  ColumnContainer,
  DesignButton,
  DesignButtonFilled,
  textStyles,
  Square,
  IconText,
  NavLink,
  Title,
  CenterText,
  Icon,
} from "../components/styledComponents";

const icons = [
  {
    src: "https://i.ibb.co/rvkLPGk/bookmark-icon-3.png",
    text: "Advertisements",
  },
  {
    src: "https://i.ibb.co/rvkLPGk/bookmark-icon-3.png",
    text: "Advertisements",
  },
  {
    src: "https://i.ibb.co/rvkLPGk/bookmark-icon-3.png",
    text: "Advertisements",
  },
  {
    src: "https://i.ibb.co/rvkLPGk/bookmark-icon-3.png",
    text: "Advertisements",
  },
  {
    src: "https://i.ibb.co/rvkLPGk/bookmark-icon-3.png",
    text: "Advertisements",
  },
  {
    src: "https://i.ibb.co/rvkLPGk/bookmark-icon-3.png",
    text: "Advertisements",
  },
];
// markup
const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Title>Generate instant graphic designs</Title>
      <CenterText style={{ fontSize: 20, marginTop: 12 }}>
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
          <h3 style={textStyles}>Add your Content</h3>
          <h3 style={textStyles}>Get Instant Designs</h3>
        </RowContainer>
      </ColumnContainer>
      <RowContainer
        style={{ width: "70%", margin: "auto", marginVertical: 10 }}
      >
        {icons.map((item, index) => (
          <Square key={index}>
            <Icon src={item.src} />
            <IconText>{item.text}</IconText>
          </Square>
        ))}
      </RowContainer>
    </main>
  );
};

export default IndexPage;
