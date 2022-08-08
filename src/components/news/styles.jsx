import styled from "styled-components";

export const Container = styled.section`
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-top: 1rem;

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
    flex-wrap: wrap;
  }

  @media (min-width: 980px) {
    gap: 5px;
    flex-direction: column;
  }
`;

export const NewsCardContainer = styled.a(
  ({ size }) => `
  background-color: ${size === "big-card" ? "#F3BC19" : "#437ABD"};
  width: 100%;
  height: ${size === "big-card" ? "300px" : "250px"};
  position: relative;
  border-radius: 5px;


  & > img {
    width: 100%;
    height: 100%;
  }

  

  @media (min-width: 768px) {
    width: ${size === "big-card" ? "100%" : "350px"};
    height: ${size === "big-card" ? "400px" : "240px"};
  }

  @media (min-width: 980px) {
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
  width: 95%;
  height: ${size === "big-card" ? "182px" : "130px"};
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 5px;
  border-radius: 5px;

  @media (min-width: 768px) {
    width: ${size === "big-card" ? "80%" : "95%"};
    height: ${size === "big-card" ? "175px" : "130px"};
  }

  @media (min-width: 980px) {
    padding: 5px 10px;
    width: ${size === "big-card" ? "85%" : "95%"};
    height: ${size === "big-card" ? "170px" : "100px"};
  }
`
);

export const MainProviderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 0;
  margin-bottom: 5px;
`;

export const ProviderDiv = styled.div(
  ({ size }) => `
  display: flex;
  align-items: center;
  gap: 5px;

  & > img {
    width: 20px;
  }



  @media (min-width: 768px) {
    & > img {
      width: 25px;
    }
  }

  @media (min-width: 980px) {
    & > img {
      width: ${size === "big-card" ? "30px" : "20px"};
    }
  }
`
);

export const Redirect = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;

  & > a {
    text-decoration: underline;
  }

  @media (min-width: 980px) {
    position: absolute;
    bottom: 0;
    right: 4%;
  }
`;
