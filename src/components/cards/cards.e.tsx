import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
  width: calc(100% - 160px);
  height: auto;
  margin: 0 auto;
  @media screen and (max-width: 1100px) {
    width: calc(100% - 60px);
  }
  overflow: hidden;
`;

export const Rov = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 22%);
  grid-column-gap: 4%;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(4, 24%);
    grid-column-gap: calc(4% / 3);
  }
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(3, 32%);
    grid-gap: 35px;
    grid-column-gap: 2%;
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(2, 48%);
    grid-column-gap: 4%;
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Carousel = styled(Slider)`

`;