import React from "react";
import { RowContainer, IconText, Title } from "../styledComponents";
import DesignPerson from "../DesignPerson";

const items = [
  {
    img: "https://i.ibb.co/BGCwbxX/marketer.png",
    title: "For Marketers",
    quesText: "Is creative velocity a bottle-neck for A/B testing?",
    description: "Generate mutliple stunning designs in just a minute.",
  },
  {
    img: "https://i.ibb.co/zGk4701/content-writer.png",
    title: "For Content Writers",
    quesText: "Do you have limited access to quality designs?",
    description: "Get quality designs in 1/100th of the time and cost.",
  },
  {
    img: "https://i.ibb.co/qW5Lt8j/business-owner.png",
    title: "For Business Owners",
    quesText: "Are you stuck with templates?",
    description: "Instantly convert your text content into visual designs.",
  },
  {
    img: "https://i.ibb.co/Q9z8B1Q/designer.png",
    title: "For Designers",
    quesText: "Are you looking to overcome creative block?",
    description:
      "Never run out of ideas. Generate designs and add fuel to your creative fires.",
  },
];

function Section3() {
  return (
    <div>
      <Title style={{ fontSize: 40, fontWeight: "500" }}>
        Designs for Everyone
        <IconText style={{ color: "#000" }}>In just a minute</IconText>
      </Title>
      <DesignPerson />
      <RowContainer style={{ width: "80%", margin: "auto" }}>
        {items.map((item, index) => (
          <DesignPerson key={index} {...item} />
        ))}
      </RowContainer>
    </div>
  );
}

export default Section3;
