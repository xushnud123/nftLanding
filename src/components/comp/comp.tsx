import { FC } from "react";
import { Wrapper, Card, ImgCard, Carousel } from "./comp.e";
import boomerang from "../../assets/img/1.svg";
import blimb from "../../assets/img/2.svg";
import qrco from "../../assets/img/3.svg";
import openDoor from "../../assets/img/4.svg";
import droplet from "../../assets/img/5.svg";
export interface CompProps {}

const Comp: FC<CompProps> = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Wrapper>
      <Card>
        <ImgCard src={boomerang} alt="img not found" />
        <ImgCard src={blimb} alt="img not found" />
        <ImgCard src={qrco} alt="img not found" />
        <ImgCard src={openDoor} alt="img not found" />
        <ImgCard src={droplet} alt="img not found" />
      </Card>
      <Carousel {...settings}>
        <div>
          <ImgCard src={boomerang} alt="img not found" />
        </div>
        <div>
          <ImgCard src={blimb} alt="img not found" />
        </div>
        <div>
          <ImgCard src={qrco} alt="img not found" />
        </div>
        <div>
          <ImgCard src={droplet} alt="img not found" />
        </div>
        <div>
          <ImgCard src={openDoor} alt="img not found" />
        </div>
      </Carousel>
    </Wrapper>
  );
};

export default Comp;
