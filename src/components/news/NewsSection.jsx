import { Container, NewsCardDiv, SmallCardDiv, Wrapper } from "./styles";

import NewsCard from "./NewsCard";
import { SectionTitle } from "../Typography";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const NewsSection = () => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    category: "Cryptocurrency",
    count: 4,
  });

  console.log(cryptoNews);

  return (
    <Container>
      <Wrapper>
        <SectionTitle>LATEST NEWS</SectionTitle>
        <NewsCardDiv>
          {cryptoNews?.value?.map((news, index) => {
            if (index === 0) {
              return (
                <NewsCard
                  key={index}
                  size="big-card"
                  newsLink={news.url}
                  imgUrl={news?.image?.thumbnail?.contentUrl || demoImage}
                  title={news.name}
                  desc={news.description}
                  providerName={news.provider[0]?.name}
                  providerImg={
                    news.provider[0]?.image?.thumbnail?.contentUrl || demoImage
                  }
                  datePublished={news.datePublished}
                />
              );
            }
            return null;
          })}
          <SmallCardDiv>
            {cryptoNews?.value?.map((news, index) => {
              if (index > 0) {
                return (
                  <NewsCard
                    key={index}
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
              }
              return null;
            })}
          </SmallCardDiv>
        </NewsCardDiv>
      </Wrapper>
    </Container>
  );
};

export default NewsSection;
