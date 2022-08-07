import styled from "styled-components";

export const ExtraSmallTitle = styled.h3`
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  color: #161616;
  margin-left: 1rem;
  margin-bottom: 0.5rem;

  & > span {
    color: #f3bc19;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const NewsTitle = styled.h2(
  ({ size }) => `
  font-size: 14px;
  line-height: 120%;

  @media (min-width: 768px) {
    font-size: ${size === "big-card" ? "20px" : "14px"} 
  }

  @media (min-width: 980px) {
    font-size: ${size === "big-card" ? "20px" : "12px"} 
  }
`
);
