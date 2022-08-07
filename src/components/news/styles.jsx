import styled from "styled-components";

export const Container = styled.section`
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 3px;

  @media (min-width: 768px) {
    padding: 10px;
  }
`;

export const NewsCardDiv = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 980px) {
    flex-direction: row;
  }
`;

export const SmallCardDiv = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 980px) {
    gap: 5px;
    flex-direction: column;
  }
`;

export const NewsCardContainer = styled.a(
  ({ size }) => `
  background-color: red;
  width: 100%;
  height: 250px;
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
  }

  

  @media (min-width: 768px) {
    background-color: red;
    width: ${size === "big-card" ? "100%" : "300px"};
    height: ${size === "big-card" ? "400px" : "150px"};
  }

  @media (min-width: 980px) {
    background-color: red;
    width: ${size === "big-card" ? "750px" : "300px"};
    height: ${size === "big-card" ? "460px" : "150px"};

    &:hover {
      transition: .3s ;
      transform: scale(1.01);
    }
  }
`
);

export const NewsInfo = styled.div(
  ({ size }) => `
  background-color: #fff;
  width: 80%;
  height: 100px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 5px;

  @media (min-width: 980px) {
    padding: 5px 10px;
    width: ${size === "big-card" ? "550px" : "220px"};
    height: ${size === "big-card" ? "150px" : "80px"};
  }
`
);
