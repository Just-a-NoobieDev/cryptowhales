import NewsCard from "./NewsCard";

import { SectionTitle } from "../Typorgraphy";
import { Container, Wrapper } from "./styles";

const NewsSection = () => {
  return (
    <Container>
      <Wrapper>
        <SectionTitle>LATEST NEWS</SectionTitle>
        <NewsCard />
      </Wrapper>
    </Container>
  );
};

export default NewsSection;
