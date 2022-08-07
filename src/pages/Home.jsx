import styled from "styled-components";
import GlobalStats from "../components/global-stats/GlobalStats";
import NewsSection from "../components/news/NewsSection";

const Main = styled.main`
  margin-top: 68px;
  height: calc(100vh - 68px);
`;

const Home = () => {
  return (
    <Main>
      <GlobalStats />
      <NewsSection />
      <h1>Hello</h1>
    </Main>
  );
};

export default Home;
