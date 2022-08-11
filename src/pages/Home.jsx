import styled from "styled-components";
import GlobalStats from "../components/global-stats/GlobalStats";
import NewsSection from "../components/news/NewsSection";
import CryptoSection from "../components/top10cryptos/CryptoSection";
import Highlights from "../components/highlights/Highlights";

import { useGetGlobalStatsQuery } from "../services/cryptoApi";
import { useGet4LatestCryptoNewsQuery } from "../services/cryptoNewsApi";
import Loader from "../components/Loader";

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
  const { isFetching: fetch } = useGet4LatestCryptoNewsQuery();

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
        </>
      )}
    </Main>
  );
};

export default Home;
