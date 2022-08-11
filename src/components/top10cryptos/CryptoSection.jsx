import { SectionTitle } from "../Typography";
import CryptoCard from "./CryptoCard";
import { Container, CryptoWrapper, Wrapper } from "./styles";
import { ThreeDots } from "react-loader-spinner";

import { useGetTop10CryptosQuery } from "../../services/cryptoApi";
import { useEffect, useState } from "react";

const CryptoSection = () => {
  const { data: coinsList } = useGetTop10CryptosQuery();
  const [coins, setCoins] = useState(coinsList?.data?.coins);

  useEffect(() => {
    setCoins(coinsList?.data?.coins);
  }, [coinsList]);

  return (
    <Container>
      <Wrapper>
        <SectionTitle>Top 10 CryptoCurrency</SectionTitle>

        <CryptoWrapper>
          {coins?.map((coin) => {
            const volume = coin["24hVolume"];

            return (
              <CryptoCard
                key={coin.rank}
                rank={coin.rank}
                title={coin.name}
                symbol={coin.symbol}
                dailyChange={coin.change}
                price={coin.price}
                marketCap={coin.marketCap}
                volume={volume}
                img={coin.iconUrl}
              />
            );
          })}
        </CryptoWrapper>
      </Wrapper>
    </Container>
  );
};

export default CryptoSection;
