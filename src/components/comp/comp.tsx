import { FC } from 'react';
import { Wrapper,Card, ImgCard } from './comp.e';
import boomerang from '../../assets/img/1.svg' 
import blimb from "../../assets/img/2.svg"; 
import qrco from "../../assets/img/3.svg"; 
import openDoor from "../../assets/img/4.svg"; 
import droplet from "../../assets/img/5.svg"; 
export interface CompProps {}


const Comp: FC<CompProps> = () => {
return (
  <Wrapper>
    <Card>
      <ImgCard src={boomerang} alt="img not found" />
      <ImgCard src={blimb} alt="img not found" />
      <ImgCard src={qrco} alt="img not found" />
      <ImgCard src={openDoor} alt="img not found" />
      <ImgCard src={droplet} alt="img not found" />
    </Card>
  </Wrapper>
);
};

export default Comp;