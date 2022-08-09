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

export const CryptoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 1.5rem;
  justify-content: center;
`;

export const CardContainer = styled.div`
  width: 350px;
  height: 200px;
  background-color: #fff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08),
    0px 1px 2px rgba(88, 102, 106, 0.12);
  border-radius: 8px;
  position: relative;
  padding: 20px;
  transition: 0.3s ease;

  @media (min-width: 980px) {
    &:hover {
      transform: scale(1.03);
    }
  }
`;

export const Circle = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 8px;
`;

export const CoinImg = styled.img`
  position: absolute;
  bottom: 9%;
  right: 6%;
  border-radius: 8px;
  z-index: 1;

  width: 20%;
`;

export const CryptoName = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const CryptoDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 1.5rem;
`;