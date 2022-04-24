import { FC } from "react";
import {
  CardLeft,
  CardRight,
  Rov,
  Wrapper,
  Img,
  Title,
  ImgWrapper,
  Card,
  Copy
} from "./footer.e";
import logo from "../../assets/img/logo.svg";
import fa from "../../assets/img/facebook.svg";
import tw from "../../assets/img/twitter.svg";
import ins from "../../assets/img/instagram.svg";
import tik from "../../assets/img/tiktok.svg";
export interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <Wrapper>
      <Rov>
        <CardLeft>
          <Img src={logo} alt="img nout found" />
          <Title>Exclusive NFT Collection</Title>
          <ImgWrapper>
            <img src={fa} alt="img nout found" />
            <img src={tw} alt="img nout found" />
            <img src={ins} alt="img nout found" />
            <img src={tik} alt="img nout found" />
          </ImgWrapper>
        </CardLeft>
        <Card>
          <CardRight>
            <h1>About</h1>
            <p>About</p>
            <p>Terms</p>
            <p>Legal</p>
          </CardRight>
          <CardRight>
            <h1>NFT</h1>
            <p>OpenSea</p>
            <p>Maker</p>
            <p>Learn</p>
          </CardRight>
          <CardRight>
            <h1>Contact</h1>
            <p>Press</p>
            <p>Support</p>
          </CardRight>
          <CardRight>
            <h1>Social</h1>
            <p>Twitter</p>
            <p>Instagram</p>
          </CardRight>
        </Card>
      </Rov>
      <Copy>
        <h1>
          <span>&copy;</span>Copyright 2022 NFTlanding
        </h1>
        <h2>Launching August 2022</h2>
      </Copy>
    </Wrapper>
  );
};

export default Footer;
