import React from "react";
import {
  RowContainer,
  ColumnContainer,
  IconText,
  Title,
  RowColContainer,
  DashedDivider,
} from "../styledComponents";
import { graphql, useStaticQuery } from "gatsby";

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

function Section4() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          oldWayNewWay {
            left {
              items {
                img
                text
              }
              subheader
              title
            }
            right {
              img
              items
              subheader
              tickImg
              title
            }
          }
        }
      }
    }
  `);
  const { left, right } = data.site.siteMetadata.oldWayNewWay;

  return (
    <RowColContainer style={{ width: "90%", margin: "auto" }}>
      <ColumnContainer style={{ height: "800px" }}>
        <Title style={headStyles}>
          {left.title}
          <IconText style={textStyles}>{left.subheader}</IconText>
        </Title>
        <ColumnContainer style={{ height: "700px", marginTop: 50 }}>
          {left.items.map((item, index) => (
            <RowColContainer
              key={index}
              style={{
                width: "60%",
                margin: "auto",
                justifyContent: "space-between",
              }}
            >
              <img src={item.img} />
              <IconText style={{ width: "100%", color: "#000" }}>
                {item.text}
              </IconText>
            </RowColContainer>
          ))}
        </ColumnContainer>
      </ColumnContainer>
      <DashedDivider />
      <ColumnContainer style={{ height: "800px", marginTop: 50 }}>
        <Title style={headStyles}>
          {right.title}
          <IconText style={textStyles}>{right.subheader}</IconText>
        </Title>
        <img src="https://i.ibb.co/3mHkJJz/image-8.png" />
        <ColumnContainer style={{ height: "700px" }}>
          {right.items.map((item, index) => (
            <IconText
              key={index}
              style={{
                color: "#000",
                alignSelf: "center",
                width: 200,
                textAlign: "left",
              }}
            >
              <img style={iconStyle} src={right.tickImg} />
              {item}
            </IconText>
          ))}
        </ColumnContainer>
      </ColumnContainer>
    </RowColContainer>
  );
}

export default Section4;
