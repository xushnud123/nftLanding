import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100% - 160px);
  height: auto;
  margin: 50px auto 0 auto;
  @media screen and (max-width: 1100px) {
    width: calc(100% - 60px);
  }
  @media screen and (max-width: 650px) {
    width: 100%;
  }
  overflow: hidden;
`;

export const Card = styled.div`
  width: 100%;
  height: 320px;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 10px;
  z-index: 1;
  &::before {
    z-index: -1;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #df0f6e, #ff8139, #39ffa0);
  }
  @media screen and (max-width: 650px) {
    border-radius: 0;
  }
  @media screen and (max-width: 630px) {
    height: 300px;
  }
`;

export const Title = styled.div`
  margin-left: 60px;
  margin-top: 140px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  display: flex;
  align-items: flex-end;
  color: #111111;
  @media screen and (max-width: 630px) {
    margin-top:80px ;
    margin-left: 30px;
    margin-right: 30px;
    font-size: 30px;
    line-height: 38px;
  }
`;

export const Description = styled.div`
  margin-left: 60px;
  margin-top: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #111111;
  @media screen and (max-width: 630px) {
    margin-left: 30px;
    margin-right: 30px;
    font-size: 16px;
    line-height: 100%;
  }
`;
