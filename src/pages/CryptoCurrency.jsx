import { useEffect } from "react";
import { useState } from "react";
import Loader from "../components/Loader";
import CryptoCard from "../components/top10cryptos/CryptoCard";
import { CoinContainer, SearchDiv } from "../components/top10cryptos/styles";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";

const CryptoCurrency = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery(100);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <SearchDiv>
            <h1>CryptoCurrencies</h1>
            <input
              type="text"
              placeholder="Search Crypto"
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            />
          </SearchDiv>
          <CoinContainer>
            {cryptos?.map((crypto) => {
              const volume = crypto["24hVolume"];
              return (
                <Link key={crypto.uuid} to={`/crypto/${crypto.uuid}`}>
                  <CryptoCard
                    rank={crypto.rank}
                    title={crypto.name}
                    symbol={crypto.symbol}
                    dailyChange={crypto.change}
                    price={crypto.price}
                    marketCap={crypto.marketCap}
                    volume={volume}
                    img={crypto.iconUrl}
                  />
                </Link>
              );
            })}
          </CoinContainer>
          <Footer />
        </>
      )}
    </>
  );
};

export default CryptoCurrency;
