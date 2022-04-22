import { FC } from 'react';
import { Wrapper,Card, Title, Description } from './nft-card.e';
export interface NftCardProps {}

const NftCard: FC<NftCardProps> = () => {
return (
  <Wrapper>
    <Card>
      <Title>Free NFT for early birds</Title>
      <Description>
        Sign up today and you’ll get a free NFT when we launch.
      </Description>
    </Card>
  </Wrapper>
);
};

export default NftCard;