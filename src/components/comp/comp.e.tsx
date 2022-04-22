import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100% - 160px);
  height: auto;
  margin: 0 auto;
  @media screen and (max-width: 1100px) {
    width: calc(100% - 60px);
  }
  overflow: hidden;
`;

export const Card = styled.div`
  margin-top: 100px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media screen and (max-width: 630px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 50px;
  }
  @media screen and (max-width: 430px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 50px;
  }
`;
export const ImgCard = styled.img`
  height: 41px;
  width: auto;
  &:not(:nth-child(1)) {
    justify-self: center;
  }
  &:nth-child(5) {
    justify-self: flex-end;
  }
  @media screen and (max-width: 1000px) {
    height: 30px;
  }
  @media screen and (max-width: 745px) {
    height: 25px;
  }
  @media screen and (max-width: 430px) {
    height: 30px;
    &:nth-of-type(2n + 1) {
      justify-self: center;
    }
    &:nth-of-type(2n) {
      justify-self: center;
    }
  }
`;
