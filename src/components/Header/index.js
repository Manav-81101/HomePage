import React from "react";
import {
  Title,
  RowContainer,
  ColumnContainer,
  DesignButtonFilled,
  textStyles,
  Square,
  IconText,
  Icon,
} from "../styledComponents";
import { graphql, useStaticQuery } from "gatsby";
import { RowColContainer, CenterText, HeaderText } from "./styledComponents";

function Section1() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          header {
            icons {
              src
              text
            }
            subheader
            title
          }
        }
      }
    }
  `);
  const { title, subheader, icons } = data.site.siteMetadata.header;
  return (
    <div>
      <Title>{title}</Title>
      <CenterText>{subheader}</CenterText>
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
          <HeaderText>Add your Content</HeaderText>
          <HeaderText>Get Instant Designs</HeaderText>
        </RowContainer>
      </ColumnContainer>
      <RowColContainer
        style={{
          width: "100%",
          margin: "auto",
          marginVertical: 10,
        }}
      >
        {icons.map((item, index) => (
          <Square key={index}>
            <Icon src={item.src} style={{ width: "60px", height: "60px" }} />
            <IconText>{item.text}</IconText>
          </Square>
        ))}
      </RowColContainer>
    </div>
  );
}

export default Section1;
