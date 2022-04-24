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

export const Rov = styled.div`
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  @media screen and (max-width:700px){
    grid-template-columns: repeat(1,1fr);
    grid-row-gap: 50px;
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(2, 50% );
    grid-row-gap: 50px;
  }
`;
export const CardLeft = styled.div``;

export const CardRight = styled.div`
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #555555;
    margin-bottom: 28px;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    color: #555555;
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
`;

export const Img = styled.img`
  width: 198px;
  height: 36px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  color: #555555;
  margin: 30px 0;
`;

export const ImgWrapper = styled.div`
  display: flex;
  img {
    &:not(:first-child) {
      margin-left: 20px;
    }
  }
`;

export const Copy = styled.div`
margin-top: 35px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    color: #999999;
    span{
        margin-right: 5px;
    }
  }
  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    color: #999999;
    @media screen and (max-width:520px){
        display: none;
    }
  }
`;