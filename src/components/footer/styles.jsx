import styled from "styled-components";

export const Container = styled.footer`
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 10px;

  & > img {
    width: 60%;
  }

  @media (min-width: 768px) {
    padding: 20px;
    & > img {
      width: 40%;
    }
  }

  @media (min-width: 980px) {
    padding: 2rem 4rem;

    & > img {
      width: 20%;
    }
  }
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin: 0.1rem -;
  flex-wrap: wrap;
  & > img {
    width: 100%;
  }

  @media (min-width: 768px) {
    justify-content: center;
    & > img {
      width: 50%;
    }
  }

  @media (min-width: 980px) {
    gap: 20px;
    & > img {
      width: 35%;
    }
  }
`;
export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    width: 200px;
  }
`;
