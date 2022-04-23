import { FC } from "react";
import {
  CardBody,
  CardFlex,
  CardHeader,
  Img,
  ImgIcon,
  Rov,
  Series,
  SeriesTitle1,
  SeriesTitle2,
  Wrapper,
} from "./card.e";
import img1 from "../../../assets/img/img1.png";
import img2 from "../../../assets/img/img2.png";
import img3 from "../../../assets/img/img3.png";
import img4 from "../../../assets/img/img4.png";
import icon from "../../../assets/img/image 2.svg";
import { CardsProps } from "./card.t";

const Card: FC<CardsProps> = ({item}) => {
    const {img,title}= item
    
    const imgFunction = (name:string) => {
        switch (name) {
          case "img1":
            return img1;
          case "img2":
            return img2;
          case "img3":
            return img3;
          case "img4":
            return img4;
        }
    }


  return (
    <Wrapper>
      <Rov>
        <CardHeader>
          <Img src={imgFunction(img)} alt="img not found" />
        </CardHeader>
        <CardBody>
          <CardFlex>
            <SeriesTitle1 title1={"1"}>Gloop Series</SeriesTitle1>
            <SeriesTitle2>Top bid</SeriesTitle2>
          </CardFlex>
          <CardFlex>
            <SeriesTitle1 title1={"2"}>{title}</SeriesTitle1>
            <Series>
              <ImgIcon src={icon} alt="img not found" />
              <SeriesTitle1 title1={"2"}>2.99 ETH</SeriesTitle1>
            </Series>
          </CardFlex>
          <CardFlex>
            <SeriesTitle1 title1={"3"}>#12983</SeriesTitle1>
            <SeriesTitle1 title1={"3"}>1 day left</SeriesTitle1>
          </CardFlex>
        </CardBody>
      </Rov>
    </Wrapper>
  );
};

export default Card;
