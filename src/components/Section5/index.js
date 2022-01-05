import React from "react";
import {
  RowContainer,
  ColumnContainer,
  DesignButton,
  IconText,
  Title,
} from "../styledComponents";
const items = [
  {
    img: "https://i.ibb.co/FDD9HtZ/Group-29.png",
    text: "NASSCOM 10k Startups",
  },
  {
    img: "https://i.ibb.co/HPSjS44/Group-30.png",
    text: "Top 5 NTLF Super Startups",
  },
  {
    img: "https://i.ibb.co/3RJbbSD/Group-31.png",
    text: "One of KTech Elevate Winners",
  },
];

function Section5() {
  return (
    <ColumnContainer>
      <Title style={{ margin: 0, fontSize: 45, fontWeight: "500" }}>
        Recognitions
      </Title>
      <RowContainer style={{ width: "70%", marginTop: 30 }}>
        {items.map((item, index) => (
          <ColumnContainer key={index}>
            <img src={item.img} />
            <IconText style={{ color: "#000" }}>{item.text}</IconText>
          </ColumnContainer>
        ))}
      </RowContainer>
      <div
        style={{
          background:
            "url(https://i.ibb.co/Y8Td0mp/footer-bg.png)  center  no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: 650,
        }}
      >
        <ColumnContainer>
          <RowContainer style={{ marginTop: 100 }}>
            <ColumnContainer style={{ height: 150 }}>
              <IconText style={{ color: "#fff", fontSize: 26 }}>
                Available On
              </IconText>
              <RowContainer style={{ width: "60%" }}>
                <img src="https://i.ibb.co/K6fCCVH/Group-10.png" />
                <img src="https://i.ibb.co/6FCS7rp/Group-11.png" />
              </RowContainer>
            </ColumnContainer>
            <ColumnContainer
              style={{ height: 150, width: 800, alignItems: "flex-start" }}
            >
              <IconText style={{ color: "#fff", fontSize: 14 }}>
                How It Works
              </IconText>
              <IconText style={{ color: "#fff", fontSize: 14 }}>Tour</IconText>
              <IconText style={{ color: "#fff", fontSize: 14 }}>Team</IconText>
              <IconText style={{ color: "#fff", fontSize: 14 }}>
                Privacy Policy and Terms of Use
              </IconText>
            </ColumnContainer>
            <ColumnContainer style={{ height: 150 }}>
              <IconText
                style={{ color: "#fff", width: "150px", fontSize: "14px" }}
              >
                Get instant designs for product banners, ads, website content,
                campaigns, and more.
              </IconText>
              <DesignButton style={{ color: "#fff", fontSize: "14px" }}>
                Get Designs
              </DesignButton>
            </ColumnContainer>
            <ColumnContainer>
              <img src="https://i.ibb.co/JpWT6q9/Group-5.png" />
            </ColumnContainer>
          </RowContainer>
          <p style={{ fontFamily: "Poppins", color: "#fff", fontSize: 14 }}>
            Copyright © 2020-21 HelloSivi
          </p>
        </ColumnContainer>
      </div>
    </ColumnContainer>
  );
}

export default Section5;
