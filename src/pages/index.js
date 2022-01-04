import React from "react";
import Navbar from "../components/Navbar";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";

import {
  CircleText,
  CircleIcon,
  GradientContainer,
  Icon,
} from "../components/styledComponents";
const item = {
  src: "https://i.ibb.co/rvkLPGk/bookmark-icon-3.png",
  text: "Advertisements",
};

// markup
const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Section1 />
      <GradientContainer>
        <h3
          style={{
            fontFamily: "Poppins",
            color: "#000",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Are you a business owner, marketer, content writer or a designer? Join
          the new revolution in
          <br /> design where humans and AI interact to produce stunning
          creatives.
        </h3>
      </GradientContainer>
      <Section2 />
      <GradientContainer style={{ position: "relative" }}>
        <h3
          style={{
            fontFamily: "Poppins",
            color: "#000",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          In a world full of distraction, grabbing attention is key.
          <br /> A great way to do so is by creating visuals that stand out.
        </h3>
        <CircleText />
        <CircleIcon
          style={{
            backgroundColor: "#1882D0AA",
            left: "calc(50% - 116.7px/2 + 49.65px)",
            flexDirection: "column",
            "&:after": "",
          }}
        >
          <Icon src={item.src} />
        </CircleIcon>
      </GradientContainer>
      <Section3 />
      <GradientContainer>
        <h3
          style={{
            fontFamily: "Poppins",
            color: "#000",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          No design skills? No problem.
          <br /> You can now create beautiful designs without having to be a
          designer.
        </h3>
      </GradientContainer>
      <Section4 />
      <GradientContainer>
        <h3
          style={{
            fontFamily: "Poppins",
            color: "#000",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          No more sifting through design templates.
          <br /> Sivi generates unique and stunning graphics for your content.
        </h3>
      </GradientContainer>
      <Section5 />
    </main>
  );
};

export default IndexPage;
