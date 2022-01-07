import React from "react";
import {
  RowContainer,
  ColumnContainer,
  IconText,
  RowColContainer,
} from "../styledComponents";
import { graphql, useStaticQuery } from "gatsby";

const textBlack = {
    color: "#000000",
    textAlign: "left",
    alignSelf: "flex-start",
  },
  iconStyle = { marginRight: 10 };

function Section2() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          designCompanion {
            column1
            column2
            mascotIcon
            subheader
            title
            vectorTick
          }
        }
      }
    }
  `);
  const { title, subheader, mascotIcon, column1, column2, vectorTick } =
    data.site.siteMetadata.designCompanion;

  return (
    <div>
      <RowColContainer style={{ maxWidth: "80%", margin: "auto" }}>
        <ColumnContainer>
          <img
            src={mascotIcon}
            alt="sivi-mascot"
            style={{ width: window.innerWidth < 768 ? "100%" : "60%" }}
          />
        </ColumnContainer>
        <ColumnContainer>
          <h1 style={{ fontFamily: "Poppins" }}>{title}</h1>
          <IconText style={textBlack}>{subheader}</IconText>
          {window.innerWidth > 768 ? (
            <RowContainer>
              <ColumnContainer>
                {column1.map((item, index) => (
                  <IconText style={textBlack} key={index}>
                    <img src={vectorTick} alt="vector-tick" style={iconStyle} />
                    {item}
                  </IconText>
                ))}
              </ColumnContainer>
              <ColumnContainer>
                {column2.map((item, index) => (
                  <IconText style={textBlack} key={index}>
                    <img src={vectorTick} alt="vector-tick" style={iconStyle} />
                    {item}
                  </IconText>
                ))}
              </ColumnContainer>
            </RowContainer>
          ) : (
            <ColumnContainer>
              {column1.map((item, index) => (
                <IconText style={textBlack} key={index}>
                  <img src={vectorTick} alt="vector-tick" style={iconStyle} />
                  {item}
                </IconText>
              ))}
              {column2.map((item, index) => (
                <IconText style={textBlack} key={index}>
                  <img src={vectorTick} alt="vector-tick" style={iconStyle} />
                  {item}
                </IconText>
              ))}
            </ColumnContainer>
          )}
        </ColumnContainer>
      </RowColContainer>
    </div>
  );
}

export default Section2;
