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

  @media (min-width: 980px) {
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
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 980px) {
    flex-direction: column;
  }
`;

export const NewsCardContainer = styled.div(
  ({ size }) => `
  background-color: red;
  width: ${size === "big-card" ? "100%" : "180px"};
  height: ${size === "big-card" ? "250px" : "150px"};
  position: relative;

  

  & > img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 980px) {
    background-color: red;
    width: ${size === "big-card" ? "750px" : "300px"};
    height: ${size === "big-card" ? "460px" : "150px"};
    & > img {
      width: 100%;
      height: 100%;
    }
  }
`
);

export const NewsInfo = styled.div(
  ({ size }) => `
  background-color: #fff;
  width: ${size === "big-card" ? "70%" : "85%"};
  height: ${size === "big-card" ? "100px" : "70px"};
  position: absolute;
  bottom: 0;
  left: 0;

  @media (min-width: 980px) {
    width: ${size === "big-card" ? "550px" : "220px"};
    height: ${size === "big-card" ? "150px" : "60px"};
  }
`
);
