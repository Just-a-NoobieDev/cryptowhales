import { ExtraSmallTitle } from "../Typography";
import { Container, Wrapper } from "./styles";

const GlobalStats = () => {
  return (
    <Container>
      <Wrapper>
        <ExtraSmallTitle>
          Total Cryptos: <span>10000k</span>
        </ExtraSmallTitle>
        <ExtraSmallTitle>
          Total Market Cap: <span>10000k</span>
        </ExtraSmallTitle>
        <ExtraSmallTitle>
          Total Exchanges: <span>10000k</span>
        </ExtraSmallTitle>
        <ExtraSmallTitle>
          Total Markets: <span>10000k</span>
        </ExtraSmallTitle>
        <ExtraSmallTitle>
          24H Volume: <span>10000k</span>
        </ExtraSmallTitle>
      </Wrapper>
    </Container>
  );
};

export default GlobalStats;
