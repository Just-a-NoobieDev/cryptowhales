import { ExtraSmallTitle } from "../Typography";
import { Container, Wrapper } from "./styles";
import { ThreeDots } from "react-loader-spinner";

import { useGetCryptosQuery } from "../../services/cryptoApi";
import millify from "millify";

const GlobalStats = () => {
  const { data, isFetching } = useGetCryptosQuery();

  const globalStats = data?.data?.stats;

  if (isFetching)
    return (
      <Container>
        <Wrapper>
          <ThreeDots color="#f3bc19" height={30} width={40} />
        </Wrapper>
      </Container>
    );

  return (
    <Container>
      <Wrapper>
        <ExtraSmallTitle>
          Total Cryptos: <span>{millify(globalStats.total)}</span>
        </ExtraSmallTitle>
        <ExtraSmallTitle>
          Total Market Cap: <span>${millify(globalStats.totalMarketCap)}</span>
        </ExtraSmallTitle>
        <ExtraSmallTitle>
          Total Exchanges: <span>{millify(globalStats.totalExchanges)}</span>
        </ExtraSmallTitle>
        <ExtraSmallTitle>
          Total Markets: <span>{millify(globalStats.totalMarkets)}</span>
        </ExtraSmallTitle>
        <ExtraSmallTitle>
          24H Volume: <span>${millify(globalStats.total24hVolume)}</span>
        </ExtraSmallTitle>
      </Wrapper>
    </Container>
  );
};

export default GlobalStats;
