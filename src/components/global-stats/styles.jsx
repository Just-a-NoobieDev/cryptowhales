import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  border-bottom: 1px solid #bababa;
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08),
    0px 1px 2px rgba(88, 102, 106, 0.12);

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
