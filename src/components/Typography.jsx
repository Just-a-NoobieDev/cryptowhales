import styled from "styled-components";

export const ExtraSmallTitle = styled.h3`
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  color: #161616;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
  cursor: default;
  transition: 0.3s ease;

  & > span {
    color: #f3bc19;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  @media (min-width: 980px) {
    &:hover {
      transform: scale(1.2);
      & > span {
        font-weight: 600;
      }
    }
  }
`;

export const SectionTitle = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 0.5rem;
  cursor: default;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const SectionTitle2 = styled(SectionTitle)`
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const NewsTitle = styled.h2(
  ({ size }) => `
  font-size: 16px;
  line-height: 120%;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    font-size: ${size === "big-card" ? "24px" : "16px"} 
  }

  @media (min-width: 980px) {
    font-size: ${size === "big-card" ? "24px" : "11px"}; 
  }
`
);

export const NewsAuthor = styled.h3(
  ({ size }) => `
  font-size: 12px;

  @media (min-width: 980px) {
    font-size: ${size === "big-card" ? "13px" : "10px"};
  }
`
);

export const Paragraph = styled.p(
  ({ size }) => `
  font-size: 12.5px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: ${size === "big-card" ? "14px" : "13px"}; 
  }

  @media (min-width: 980px) {
    font-size: ${size === "big-card" ? "13px" : "10px"}; 
  }
`
);

export const TimeParagraph = styled(Paragraph)(
  ({ size }) => `
  font-style: italic;
  font-size: 11px;

  @media (min-width: 980px) {
    font-size: ${size === "big-card" ? "11px" : "9px"}
  }
`
);

export const CryptoTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  line-height: 100%;
`;

export const CryptoTitleGray = styled(CryptoTitle)`
  color: #bababa;
  cursor: pointer;
  margin: 0 5px 0 10px;
`;

export const CryptoParagraph = styled(Paragraph)`
  font-size: 14px;
  cursor: pointer;

  &.red {
    color: red;
  }

  &.green {
    color: green;
  }

  &.bold {
    font-weight: 600;
    font-size: 20px;
  }

  &.bold2 {
    & > span {
      font-weight: 600;
    }
  }

  &.big {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const CryptoParagraph2 = styled(CryptoParagraph)``;

export const CoinTitle = styled(CryptoTitle)`
  font-size: 18px;
  flex-wrap: no-wrap;
  max-width: 100%;

  &.gray {
    color: #bababa;
  }
`;

export const FooterTitle = styled.h2`
  font-size: 1rem;
  color: #161616;
  cursor: default;
`;

export const FooterSTitle = styled(FooterTitle)`
  color: #bababa;
  text-align: center;
  font-weight: 500;
  cursor: pointer;

  @media (min-width: 768px) {
    text-align: left;

    &:hover {
      color: #5b7fff;
    }
  }
`;

export const FooterSTitle2 = styled(FooterTitle)`
  font-size: 0.8rem;
  color: #bababa;
  font-weight: 500;

  & > a {
    color: #5b7fff;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    text-align: left;

    & > a:hover {
      opacity: 0.8;
    }
  }
`;
