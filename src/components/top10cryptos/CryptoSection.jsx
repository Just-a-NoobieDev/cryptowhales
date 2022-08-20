import { SectionTitle } from "../Typography";
import CryptoCard from "./CryptoCard";
import { Container, CryptoWrapper, Wrapper } from "./styles";

import { useGetCryptosQuery } from "../../services/cryptoApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CryptoSection = () => {
  const { data: coinsList } = useGetCryptosQuery(10);
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
              <Link key={coin.uuid} to={`/crypto/${coin.uuid}`}>
                <CryptoCard
                  rank={coin.rank}
                  title={coin.name}
                  symbol={coin.symbol}
                  dailyChange={coin.change}
                  price={coin.price}
                  marketCap={coin.marketCap}
                  volume={volume}
                  img={coin.iconUrl}
                />
              </Link>
            );
          })}
        </CryptoWrapper>
      </Wrapper>
    </Container>
  );
};

export default CryptoSection;
