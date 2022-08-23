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

export const NewsCardContainer = styled.div(
  ({ size }) => `
  background: linear-gradient(to bottom right, #6889ff, #c668ff);
  width: 100%;
  height:  ${size === "big-card" ? "350px" : "250px"};
  position: relative;
  border-radius: 5px;


  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  

  @media (min-width: 768px) {
    width: ${
      size === "big-card" ? "100%" : size === "page" ? "370px" : "350px"
    };
    height: ${
      size === "big-card" ? "400px" : size === "page" ? "250px" : "280px"
    };
  }

  @media (min-width: 980px) {
    width: ${
      size === "big-card" ? "750px" : size === "page" ? "370px" : "300px"
    };
    height: ${
      size === "big-card" ? "460px" : size === "page" ? "250px" : "150px"
    };

    &:hover {
      transition: .3s ;
      transform: scale(1.01);
    }
  }
`
);

export const NewsInfo = styled.div(
  ({ size }) => `
  background-color: rgba(255,255,255,.8);
  width: 95%;
  max-height: ${
    size === "big-card" ? "185px" : size === "page" ? "180px" : "145px"
  };
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 5px;
  border-top-right-radius: 5px;

  @media (min-width: 768px) {
    width: ${size === "big-card" ? "80%" : "95%"};
    max-height: ${
      size === "big-card" ? "175px" : size === "page" ? "180px" : "150px"
    };
  }

  @media (min-width: 980px) {
    padding: 5px 10px;
    width: ${size === "big-card" ? "85%" : "95%"};
    max-height: ${
      size === "big-card" ? "180px" : size === "page" ? "180px" : "100px"
    };
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
      width: 20px;
    }
  }

  @media (min-width: 980px) {
    & > img {
      width: ${size === "big-card" ? "30px" : "15px"};
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

export const NewsContainer = styled.div`
  min-height: calc(100vh - 128px);
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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
  select {
    width: 100%;
    font-size: 16px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: block;
    padding: 12px 55px 15px 15px;
    border: thin solid #161616;

    background-image: linear-gradient(45deg, transparent 50%, #161616 50%),
      linear-gradient(135deg, #161616 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
    outline: none;
    border-radius: 5px;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    h1 {
      font-size: 28px;
    }

    select {
      width: 300px;
    }
  }
`;
