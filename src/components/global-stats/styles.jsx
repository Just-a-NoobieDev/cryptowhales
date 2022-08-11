import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  border-bottom: 1.5px solid #e5e5e5;
  display: flex;
  justify-content: center;

  @media (min-width: 980px) {
    height: 44px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5px 0;

  @media (min-width: 980px) {
    justify-content: space-evenly;
    padding: 10px 30px;
  }
`;
