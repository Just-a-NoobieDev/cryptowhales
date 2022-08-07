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
