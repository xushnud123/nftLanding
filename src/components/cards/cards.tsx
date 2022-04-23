import { FC } from "react";
import Card from "./card/card";
import { Wrapper, Rov, Carousel } from "./cards.e";
export interface CardsProps {}

const data = [
  {
    img: "img1",
    title: "Purple Man",
  },
  {
    img: "img2",
    title: "Beige",
  },
  {
    img: "img3",
    title: "Red Man",
  },
  {
    img: "img4",
    title: "Green",
  },
];

const Cards: FC<CardsProps> = () => {
  return (
    <Wrapper>
      <Rov>
        {data.map((item) => (
          <Card item={item} key={item.title} />
        ))}
      </Rov>
  
    </Wrapper>
  );
};

export default Cards;
