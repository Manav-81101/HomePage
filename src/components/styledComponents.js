import styled from "styled-components";

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const DesignButton = styled.button`
  background-color: transparent;
  border-color: skyblue;
  border-style: solid;
  color: #1882d0;
  padding: 0.5rem 1rem;
  font-weight: 400;
  border-radius: 25px;
  @media (max-width: 768px) {
    & {
      width: 180px;
    }
  }
`;
const DesignButtonFilled = styled.button`
  background-image: linear-gradient(
    96.66deg,
    #1dd6ce -7.38%,
    #0087d7 24.22%,
    #0087d7 59.39%,
    #be4ebe 107.09%
  );
  border-color: skyblue;
  color: white !important;
  padding: 0.5rem;
  font-weight: 500;
  padding: 1rem 2.5rem;
  width: 18rem;
  position: absolute;
  left: 50%;
  border-radius: 40px;
  transform: translateX(-50%);
`;

const Square = styled.div`
  width: 10rem;
  height: 10rem;
  background: linear-gradient(
    141.53deg,
    #1dd6ce1f 2.66%,
    #0087d71f 50.52%,
    #be4ebe1f 111.52%
  );
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 20px auto;
  @media (max-width: 768px) {
    & {
      width: 19rem;
      justify-content: center;
    }
  }
`;
const IconText = styled.p`
  color: #0ec2cb;
  text-align: center;
  font-size: 1rem;
  opacity: 1;
  font-family: Poppins;
`;

// styles
const textStyles = {
  fontFamily: "Poppins",
  color: "#000",
};

const Title = styled.h1`
  text-align: center;
  font-weight: 600;
  margin-top: 90px;
  font-family: Poppins;
  color: #000;
  font-size: 3.5rem;
  @media (max-width: 768px) {
    & {
      font-size: 2.5rem;
    }
  }
`;

const CenterText = styled.p`
  text-align: center;
`;
const Icon = styled.img`
  width: 100px;
  height: 100px;

  margin: 0 auto;
`;

const GradientContainer = styled.div`
  width: 100%;
  height: auto;
  background: linear-gradient(
    141.53deg,
    #1dd6ce13 2.66%,
    #0087d713 50.52%,
    #be4ebe13 111.52%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 100px 0;
  padding: 50px 0;
  @media (max-width: 768px) {
    & {
      padding: 20px 0;
      justify-content: center;
    }
  }
`;

const CircleText = styled.div`
  position: absolute;
  width: 116.7px;
  height: 116.52px;
  border-radius: 50%;
  left: calc(50% - 116.7px / 2 - 48.65px);
  top: 150px;

  /* Secondary 2 */
  background: #0ec2cbaa;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: "You";
    font-size: 25px;
    font-family: Poppins;
    color: white;
  }
  @media (max-width: 768px) {
    & {
      top: 200px;
    }
  }
`;
const CircleIcon = styled.div`
  position: absolute;
  width: 116.7px;
  height: 116.52px;
  border-radius: 50%;
  left: calc(50% - 116.7px / 2 - 48.65px);
  top: 150px;

  /* Secondary 2 */
  background: #0ec2cbaa;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    & {
      top: 200px;
    }
  }
`;
const gradientHeadingStyles = {
  fontFamily: "Poppins",
  color: "#000",
  fontWeight: "400",
  textAlign: "center",
};

const GradientHeading = styled.h3`
  @media (max-width: 768px) {
    & {
      font-size: 25px;
    }
  }
`;

const RowColContainer = styled(RowContainer)`
  @media (max-width: 768px) {
    & {
      width: 100%;
      flex-direction: column;
    }
  }
`;

const DesignPersonContainer = styled.div`
  width: 240px;
  text-align: center;
  position: relative;
  padding: 15px;
  border-radius: 5;
  background: linear-gradient(
    141.53deg,
    #1dd6ce22 2.66%,
    #0087d722 50.52%,
    #be4ebe22 111.52%
  );
  @media (max-width: 768px) {
    & {
      margin-top: 30px;
      width: 100%;
    }
  }
`;

const DashedDivider = styled(ColumnContainer)`
  width: 1px;
  height: 680px;
  border-right-width: 2;
  border-right-style: dashed;
  border-color: #cad7e0;
  display: block;
  @media (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

export {
  RowContainer,
  ColumnContainer,
  DesignButton,
  DesignButtonFilled,
  textStyles,
  Square,
  IconText,
  Title,
  CenterText,
  Icon,
  GradientContainer,
  CircleText,
  CircleIcon,
  gradientHeadingStyles,
  RowColContainer,
  DesignPersonContainer,
  DashedDivider,
  GradientHeading,
};
