import React from "react";
import { graphql } from "gatsby";
import GradientDivider from "../components/GradientDivider";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import DesignCompanion from "../components/DesignCompanion";
import DesignPersons from "../components/DesignPersons";
import OldWayNewWay from "../components/OldWayNewWay";
import Footer from "../components/Footer";
import {
  CircleText,
  CircleIcon,
  Icon,
  gradientHeadingStyles,
} from "../components/styledComponents";
const item = {
  src: "https://i.ibb.co/bmCZTwF/mascot-original.png",
  text: "Advertisements",
};
// markup
const IndexPage = ({ data }) => {
  console.log(data);
  const { gradient1, gradient2, gradient3, gradient4 } =
    data.site.siteMetadata.gradientContainers;
  return (
    <main>
      <Navbar />
      <Header />
      <GradientDivider
        text={
          gradient1.text2 ? (
            <h3 style={gradientHeadingStyles}>
              {gradient1.text1}
              <br />
              {gradient1.text2}
            </h3>
          ) : (
            gradient1.text1
          )
        }
      />
      <DesignCompanion />
      <GradientDivider
        text={
          gradient2.text2 ? (
            <h3 style={gradientHeadingStyles}>
              {gradient2.text1}
              <br />
              {gradient2.text2}
            </h3>
          ) : (
            gradient2.text1
          )
        }
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
      <DesignPersons />
      <GradientDivider
        text={
          gradient3.text2 ? (
            <h3 style={gradientHeadingStyles}>
              {gradient3.text1}
              <br />
              {gradient3.text2}
            </h3>
          ) : (
            gradient3.text1
          )
        }
      />

      <OldWayNewWay />
      <GradientDivider
        text={
          gradient4.text2 ? (
            <h3 style={gradientHeadingStyles}>
              {gradient4.text1}
              <br />
              {gradient4.text2}
            </h3>
          ) : (
            gradient4.text1
          )
        }
      />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  {
    site {
      siteMetadata {
        gradientContainers {
          gradient1 {
            text1
            text2
          }
          gradient2 {
            text1
            text2
          }
          gradient3 {
            text1
            text2
          }
          gradient4 {
            text1
            text2
          }
        }
      }
    }
  }
`;
