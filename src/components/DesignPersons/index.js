import React from "react";
import {
  RowContainer,
  IconText,
  Title,
  RowColContainer,
} from "../styledComponents";
import DesignPerson from "../DesignPerson";
import { graphql, useStaticQuery } from "gatsby";

function Section3() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          designPerson {
            personDetails {
              description
              img
              quesText
              title
            }
            subheader
            title
          }
        }
      }
    }
  `);
  const { title, subheader, personDetails } =
    data.site.siteMetadata.designPerson;
  return (
    <div>
      <Title style={{ fontSize: 40, fontWeight: "500" }}>
        {title}
        <IconText style={{ color: "#000" }}>{subheader}</IconText>
      </Title>
      <RowColContainer style={{ width: "80%", margin: "5rem auto" }}>
        {personDetails.map((item, index) => (
          <DesignPerson key={index} {...item} />
        ))}
      </RowColContainer>
    </div>
  );
}

export default Section3;
