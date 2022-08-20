import CryptoSection from "../components/top10cryptos/CryptoSection";
import Footer from "../components/footer/Footer";
import GlobalStats from "../components/global-stats/GlobalStats";
import Highlights from "../components/highlights/Highlights";
import Loader from "../components/Loader";
import NewsSection from "../components/news/NewsSection";
import styled from "styled-components";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetGlobalStatsQuery } from "../services/cryptoApi";

const Main = styled.main`
  margin-top: 68px;
  height: calc(100vh - 68px);
  background-image: linear-gradient(
    180deg,
    rgba(253, 248, 250, 0) 0%,
    #f8fafd 100%
  );
`;

const Home = () => {
  const { isFetching } = useGetGlobalStatsQuery();
  const { isFetching: fetch } = useGetCryptoNewsQuery();

  return (
    <Main>
      {isFetching || fetch ? (
        <Loader />
      ) : (
        <>
          <GlobalStats />
          <NewsSection />
          <Highlights />
          <CryptoSection />
          <Footer />
        </>
      )}
    </Main>
  );
};

export default Home;
