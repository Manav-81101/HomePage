import React from "react";
import GradientDivider from "../components/GradientDivider";
import Navbar from "../components/Navbar";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";

import { CircleText, CircleIcon, Icon } from "../components/styledComponents";
const item = {
  src: "https://i.ibb.co/bmCZTwF/mascot-original.png",
  text: "Advertisements",
};

// markup
const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Section1 />
      <GradientDivider
        text="Are you a business owner, marketer, content writer or a designer? Join
          the new revolution in
          design where humans and AI interact to produce stunning
          creatives"
      />
      <Section2 />
      <GradientDivider
        text="In a world full of distraction, grabbing attention is key.
           A great way to do so is by creating visuals that stand out."
        icon={
          <>
            <CircleText />
            <CircleIcon
              style={{
                backgroundColor: "#1882D0AA",
                left: "calc(50% - 116.7px/2 + 49.65px)",
                flexDirection: "column",
                "&:after": "",
              }}
            >
              <Icon style={{ width: "50px", height: "70px" }} src={item.src} />
            </CircleIcon>
          </>
        }
      />
      <Section3 />
      <GradientDivider
        text="No design skills? No problem.
 You can now create beautiful designs without having to be a
          designer."
      />

      <Section4 />
      <GradientDivider
        text="
          No more sifting through design templates.
          Sivi generates unique and stunning graphics for your content."
      />
      <Section5 />
    </main>
  );
};

export default IndexPage;
