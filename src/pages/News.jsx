import { useState } from "react";
import Footer from "../components/footer/Footer";
import NewsCard from "../components/news/NewsCard";
import { NewsContainer } from "../components/news/styles";
import { SearchDiv } from "../components/news/styles";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { NoFound2 } from "../components/top10cryptos/styles";
import Loader from "../components/Loader";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = () => {
  const [category, setCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    category,
    count: 20,
  });

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <SearchDiv>
            <h1>Crypto News</h1>
            <select
              name="CryptoNews"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Cryptocurency">Cryptocurrency</option>
              {data?.data?.coins?.map((coin) => (
                <option key={coin.uuid} value={coin.name}>
                  {coin.name}
                </option>
              ))}
            </select>
          </SearchDiv>
          <NewsContainer>
            {cryptoNews?.value?.length > 0 ? (
              cryptoNews?.value?.map((news, index) => {
                return (
                  <NewsCard
                    key={index}
                    size="page"
                    newsLink={news.url}
                    imgUrl={news?.image?.thumbnail?.contentUrl || demoImage}
                    title={news.name}
                    desc={news.description}
                    providerName={news.provider[0]?.name}
                    providerImg={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    datePublished={news.datePublished}
                  />
                );
              })
            ) : (
              <NoFound2>
                <h1>0 results for {category}</h1>
              </NoFound2>
            )}
          </NewsContainer>
          <Footer />
        </>
      )}
    </>
  );
};

export default News;
