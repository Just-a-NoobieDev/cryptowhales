import { ExtraSmallTitle } from "../Typography";
import { Container, Wrapper } from "./styles";
import { ThreeDots } from "react-loader-spinner";

import { useGetGlobalStatsQuery } from "../../services/cryptoApi";

const GlobalStats = () => {
  const { data, isFetching } = useGetGlobalStatsQuery();

  const globalStats = data?.data;

  return (
    <Container>
      <Wrapper>
        {isFetching ? (
          <ThreeDots color="#f3bc19" height={30} width={40} />
        ) : (
          <>
            <ExtraSmallTitle>
              Total Cryptos:{" "}
              <span>
                {globalStats.totalCoins.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </span>
            </ExtraSmallTitle>
            <ExtraSmallTitle>
              Total Market Cap:{" "}
              <span>
                $
                {Number(globalStats.totalMarketCap).toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </span>
            </ExtraSmallTitle>
            <ExtraSmallTitle>
              Total Exchanges:{" "}
              <span>
                {globalStats.totalExchanges.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </span>
            </ExtraSmallTitle>
            <ExtraSmallTitle>
              Total Markets:{" "}
              <span>
                {globalStats.totalMarkets.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </span>
            </ExtraSmallTitle>
            <ExtraSmallTitle>
              24H Volume:{" "}
              <span>
                $
                {Number(globalStats.total24hVolume).toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </span>
            </ExtraSmallTitle>
            <ExtraSmallTitle>
              BTC Dominance:{" "}
              <span>
                {globalStats.btcDominance.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
                %
              </span>
            </ExtraSmallTitle>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default GlobalStats;
