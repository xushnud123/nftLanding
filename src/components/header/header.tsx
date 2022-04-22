import { FC } from "react";
import {
  Wrapper,
  Card,
  LeftCard,
  RightCard,
  Link,
  Title,
  Description,
  SignUp,
  HeaderImg
} from "./header.e";
import grafic from '../../assets/img/graphic.svg'
export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <Wrapper>
      <Card>
        <LeftCard>
          <Link>Launching Soon</Link>
          <Title>An NFT like no other</Title>
          <Description>
            Don’t miss out on the release of our new NFT. Sign up below to
            receive updates when we go live.
          </Description>
          <SignUp>Sign Up</SignUp>
        </LeftCard>
        <RightCard>
            <HeaderImg src={grafic} alt="img nout found" />
        </RightCard>
      </Card>
    </Wrapper>
  );
};

export default Header;
