import styled from "styled-components";

export const Container = styled.section`
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 3px;

  @media (min-width: 768px) {
    padding: 10px;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 220px;
  background-color: #fff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08),
    0px 1px 2px rgba(88, 102, 106, 0.12);
  position: relative;
  padding: 20px;
  transition: 0.3s ease;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom: 3px solid #5b7fff;

  @media (min-width: 768px) {
    width: 50%;
    height: 200px;
  }

  @media (min-width: 980px) {
    width: 32%;
    height: 200px;
  }
`;

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CardTitleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
`;

export const CoinDiv = styled(CardTitleDiv)`
  gap: 15px;
  transition: all 0.3s ease;

  @media (min-width: 980px) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const CoinImg = styled.img`
  width: 7%;
`;
