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
import grafic2 from '../../assets/img/design-82a0ada5-644e-4b87-ae41-88faf9684ea3 (2) 1.svg'
import { HeaderProps } from "./header.t";


const Header: FC<HeaderProps> = ({head}) => {
  return (
    <Wrapper>
      <Card head={head}>
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
            <HeaderImg src={head ? grafic2 : grafic} head={head} alt="img nout found" />
        </RightCard>
      </Card>
    </Wrapper>
  );
};

export default Header;
