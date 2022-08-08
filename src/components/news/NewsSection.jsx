import NewsCard from "./NewsCard";

import { SectionTitle } from "../Typography";
import { Container, NewsCardDiv, SmallCardDiv, Wrapper } from "./styles";

const NewsSection = () => {
  return (
    <Container>
      <Wrapper>
        <SectionTitle>LATEST NEWS</SectionTitle>
        <NewsCardDiv>
          <NewsCard size="big-card" />
          <SmallCardDiv>
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </SmallCardDiv>
        </NewsCardDiv>
      </Wrapper>
    </Container>
  );
};

export default NewsSection;
