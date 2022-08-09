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

export const NewsTitle = styled.h2(
  ({ size }) => `
  font-size: 16px;
  line-height: 120%;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    font-size: ${size === "big-card" ? "24px" : "16px"} 
  }

  @media (min-width: 980px) {
    font-size: ${size === "big-card" ? "28px" : "12.5px"}; 
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
  font-size: 26px;
  font-weight: 400;
  cursor: default;
`;

export const CryptoTitleGray = styled(CryptoTitle)`
  color: #bababa;
  cursor: default;
`;

export const CryptoParagraph = styled(Paragraph)`
  font-size: 16px;
  cursor: default;
`;
