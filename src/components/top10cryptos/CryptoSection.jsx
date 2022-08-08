import { SectionTitle } from "../Typography";
import CryptoCard from "./CryptoCard";
import { Container, CryptoWrapper, Wrapper } from "./styles";

const CryptoSection = () => {
  return (
    <Container>
      <Wrapper>
        <SectionTitle>Top 10 CryptoCurrency</SectionTitle>
        <CryptoWrapper>
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
        </CryptoWrapper>
      </Wrapper>
    </Container>
  );
};

export default CryptoSection;
