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
    <div>
      <Footer />
    </div>
  );
};

export default News;
