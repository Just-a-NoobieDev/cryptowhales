import styled from "styled-components";

export const Container = styled.section`
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export const CoinContainer = styled.div`
  min-height: calc(100vh - 128px);
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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
  gap: 15px;
  margin-top: 1.5rem;
  justify-content: center;
`;

export const CardContainer = styled.div`
  width: 365px;
  height: 180px;
  background-color: #fff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08),
    0px 1px 2px rgba(88, 102, 106, 0.12);
  border-radius: 8px;
  position: relative;
  padding: 20px;
  transition: 0.3s ease;
  cursor: pointer;
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
  opacity: 0.8;
  width: 110px;
  & > svg {
    circle {
      .fill {
        color: linear-gradient(to bottom right, #5b7fff, #33ccfc);
      }
    }
  }
`;

export const CoinImg = styled.img`
  position: absolute;
  bottom: 9%;
  right: 4%;
  border-radius: 8px;
  z-index: 1;

  width: 18%;
`;

export const CryptoName = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  flex-wrap: wrap;
`;

export const CryptoDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 1rem;
`;

export const SearchDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  margin-top: 64px;

  h1 {
    font-size: 24px;
  }

  input {
    width: 100%;
    outline: none;
    height: 40px;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 16px;
    border: thin solid #161616;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    h1 {
      font-size: 28px;
    }

    input {
      width: 35%;
    }
  }
`;

export const NoFound = styled.div`
  width: 100%;
  margin: 0 auto;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08),
    0px 1px 2px rgba(88, 102, 106, 0.12);
  padding: 20px;
  border-radius: 10px;
  height: 200px;

  h2 {
    margin: 0;
    font-size: 22px;
  }

  .tips {
    margin-top: 10px;
    padding: 10px;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const NoFound2 = styled(NoFound)`
  height: 100px;
`;
