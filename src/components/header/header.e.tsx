import styled, { css } from "styled-components";
import { HeaderProps } from "./header.t";

export const Wrapper = styled.div`
  width: calc(100% - 160px);
  height: auto;
  margin: 0 auto;
  @media screen and (max-width: 1100px) {
    width: calc(100% - 60px);
  }
  @media screen and (max-width: 630px) {
    margin-left: 30px;
    width: calc(100% - 30px);
  }
  overflow: hidden;
`;
export const Card = styled.div<HeaderProps>`
  margin-top: 50px;
  padding: 15px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 1100px) {
    grid-template-columns: 45% 55%;
  }
  @media screen and (max-width: 950px) {
    grid-template-columns: 40% 60%;
  }
  @media screen and (max-width: 630px) {
    grid-template-columns: 70% 30%;
  }
  @media screen and (max-width: 450px) {
    ${({ head }) =>
      head
        ? css`
            grid-template-columns: 60% 40%;
          `
        : css`
            grid-template-columns: 75% 25%;
          `};
  }
  ${({ head }) =>
    head
      ? css`
          border-top: 2px solid #eeeeee;
        `
      : css`
          border-top: 2px solid transparent;
        `};
  ${({ head }) =>
    head
      ? css`
          border-bottom: 2px solid #eeeeee;
        `
      : css`
          border-bottom: 2px solid transparent;
        `};
`;

export const LeftCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Link = styled.a`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ff3998;
`;
export const Title = styled.h1`
  margin-top: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 76px;
  line-height: 96px;
  color: #111111;
  @media screen and (max-width: 1100px) {
    font-size: 66px;
    line-height: 76px;
  }
  @media screen and (max-width: 900px) {
    font-size: 55px;
    line-height: 70px;
  }
  @media screen and (max-width: 800px) {
    font-size: 45px;
    line-height: 65px;
  }
  @media screen and (max-width: 450px) {
    font-size: 40px;
    line-height: 55px;
  }
`;
export const Description = styled.h2`
  @media screen and (max-width: 900px) {
    margin-top: 20px;
  }
  margin-top: 32px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #555555;
`;

export const SignUp = styled.button`
  margin-top: 41px;
  width: 188px;
  height: 75px;
  background-color: #ffffff;
  padding: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  color: #111111;
  position: relative;
  border: solid 3px transparent;
  border-radius: 37px;
  background-clip: padding-box;
  &::before {
    content: "";
    width: 188px;
    height: 75px;
    z-index: -1;
    position: absolute;
    border-radius: inherit;
    top: -3px;
    left: -3px;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, #f13a7b, #ff8139, #a4e951);
  }
  @media screen and (max-width: 900px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 800px) {
    width: 150px;
    height: 60px;
    border-radius: 30px;
    &::before {
      width: 150px;
      height: 60px;
    }
  }
`;

export const RightCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 630px) {
    position: relative;
  }
`;

export const HeaderImg = styled.img<HeaderProps>`
  width: 100%;
  height: auto;
  ${({ head }) =>
    head
      ? css`
          justify-self: center;
          max-width: 206px;
          bottom: -20px;
        `
      : css`
          bottom: -20px;
        `};
  @media screen and (max-width: 900px) {
    height: 100%;
  }
  @media screen and (max-width: 630px) {
    position: absolute;
    width: 394px;
    ${({ head }) =>
      head
        ? css`
            right: -100px;
            bottom: 0;
          `
        : css`
            right: -190px;
          `};
  }
  @media screen and (max-width: 450px) {
    position: absolute;

    ${({ head }) =>
      head
        ? css`
            right: -100px;
            bottom: -20px !important;
            width: 245px;
          `
        : css`
            top: -40px;
            right: -150px;
            width: 294px;
          `};
  }
`;
