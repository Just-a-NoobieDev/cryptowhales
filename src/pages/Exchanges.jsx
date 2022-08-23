import axios from "axios";
import { useState, useEffect } from "react";
import { ExchangeContainer, Table } from "../components/ExchangesStyle";
import { SearchDiv } from "../components/top10cryptos/styles";

import { BsArrowUpRightSquare } from "react-icons/bs";
import Footer from "../components/footer/Footer";
import Loader from "../components/Loader";

const Exchanges = () => {
  const [data, setData] = useState();
  const [exchanges, setExchanges] = useState();
  const [searchExchanges, setSearchExchanges] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const data = async () => {
      axios.get("https://api.coingecko.com/api/v3/exchanges").then((res) => {
        setData(res.data);
      });
    };

    data();
  }, []);

  console.log(data);

  useEffect(() => {
    setExchanges(data);

    const filteredData = data?.filter((item) =>
      item.name.toLowerCase().includes(searchExchanges)
    );

    setExchanges(filteredData);
  }, [data, searchExchanges]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <SearchDiv>
            <h1>CryptoCurrencies</h1>
            <input
              type="text"
              placeholder="Search Exchanges"
              onChange={(e) => setSearchExchanges(e.target.value.toLowerCase())}
            />
          </SearchDiv>
          <ExchangeContainer>
            <Table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Trust Score</th>
                  <th>Country</th>
                  <th>Trading Volume 24H (BTC)</th>
                  <th>Year Established</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {exchanges?.map((exchange) => {
                  return (
                    <tr>
                      <td className="rank">{exchange.trust_score_rank}</td>
                      <td className="name">
                        <img src={exchange.image} alt="" />
                        {exchange.name}
                      </td>
                      <td className="score">
                        <div
                          className={`box ${
                            exchange.trust_score <= 6
                              ? "orange"
                              : exchange.trust_score < 3
                              ? "red"
                              : "green"
                          }`}
                        >
                          {exchange.trust_score}
                        </div>
                      </td>
                      <td>{exchange.country}</td>
                      <td className="trade">
                        {exchange.trade_volume_24h_btc.toLocaleString(
                          undefined,
                          {
                            maximumFractionDigits: 2,
                          }
                        )}
                      </td>
                      <td className="year">{exchange.year_established}</td>
                      <td className="url">
                        <a href={exchange.url} target="_blank" rel="noreferrer">
                          <BsArrowUpRightSquare size="1.5em" />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </ExchangeContainer>
          <Footer />
        </>
      )}
    </>
  );
};

export default Exchanges;
