import styled,  {css} from "styled-components";
import { CardProps } from "./card.t";

const CSSFunction =(title1:string) => {
    switch(title1){
        case '1':return css`
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 100%;
          text-transform: uppercase;
          color: #ff8139;
        `;
        case '2':return css`
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 100%;
          color: #111111;
          @media screen and (max-width:990px){
            font-size: 18px;
          }
        `;
        case '3':return css`
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 100%;
          color: #777777;
        `;
        default: return css`
            
        `
    }
}

export const Wrapper = styled.div`
width: 100%;
`

export const Rov = styled.div`
  height: auto;
  background-color: #eeeeee;
  border-radius: 16px;
  max-height: fit-content;
`;
export const CardHeader = styled.div`
    width: 100%;
    height: auto;
`
export const Img = styled.img`
    width: 100%;
    height: 100%;
`

export const CardBody = styled.div`
  width: 100%;
  height: 122px;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1100px) {
      padding: 12px;
  }
`;
export const CardFlex = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Series = styled.div`
    display: flex;
    align-items: center;
`
export const ImgIcon = styled.img`
margin-right: 5px;
`

export const SeriesTitle1 = styled.h1<Pick <CardProps, 'title1'>>`
    ${({title1}) => CSSFunction(title1) }
`
export const SeriesTitle2 = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  text-align: right;
  text-transform: uppercase;
  color: #777777;
`;

