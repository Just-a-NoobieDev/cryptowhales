import { CoinTitle, CryptoParagraph, SectionTitle2 } from "../Typography";
import {
  Card,
  CardDiv,
  CardTitleDiv,
  CoinDiv,
  CoinImg,
  Container,
  Wrapper,
} from "./styles";
import { BsFillStarFill, BsClock } from "react-icons/bs";
import { ThreeDots } from "react-loader-spinner";

import { useGetGlobalStatsQuery } from "../../services/cryptoApi";
import { Link } from "react-router-dom";

const Highlights = () => {
  const { data, isFetching } = useGetGlobalStatsQuery();

  const bestCoins = data?.data?.bestCoins;
  const newCoins = data?.data?.newestCoins;

  return (
    <Container>
      <Wrapper>
        <SectionTitle2>CoinRanking API Highlights</SectionTitle2>
        <CardDiv>
          <Card>
            {isFetching ? (
              <Container>
                <ThreeDots color="#f3bc19" height={30} width={40} />
              </Container>
            ) : (
              <>
                <CardTitleDiv>
                  <BsFillStarFill size={"1.5em"} color="#f3bc19" />{" "}
                  <CryptoParagraph className="big">Best Coins</CryptoParagraph>
                </CardTitleDiv>
                {bestCoins?.map((coin, index) => {
                  return (
                    <Link to="/">
                      <CoinDiv>
                        <CoinTitle style={{ cursor: "pointer" }}>
                          {index + 1}.
                        </CoinTitle>
                        <CoinImg src={coin.iconUrl} alt="" />
                        <CoinTitle style={{ cursor: "pointer" }}>
                          {coin.name}
                        </CoinTitle>
                        <CoinTitle
                          className="gray"
                          style={{ cursor: "pointer" }}
                        >
                          {coin.symbol}
                        </CoinTitle>
                      </CoinDiv>
                    </Link>
                  );
                })}
              </>
            )}
          </Card>
          <Card>
            {isFetching ? (
              <Container>
                <ThreeDots color="#f3bc19" height={30} width={40} />
              </Container>
            ) : (
              <>
                <CardTitleDiv>
                  <BsClock size={"1.5em"} />
                  <CryptoParagraph className="big">New Coins</CryptoParagraph>
                </CardTitleDiv>
                {newCoins?.map((coin, index) => {
                  return (
                    <Link to="/">
                      <CoinDiv>
                        <CoinTitle style={{ cursor: "pointer" }}>
                          {index + 1}.
                        </CoinTitle>
                        <CoinImg src={coin.iconUrl} alt="" />
                        <CoinTitle style={{ cursor: "pointer" }}>
                          {coin.name}
                        </CoinTitle>
                        <CoinTitle
                          className="gray"
                          style={{ cursor: "pointer" }}
                        >
                          {coin.symbol}
                        </CoinTitle>
                      </CoinDiv>
                    </Link>
                  );
                })}
              </>
            )}
          </Card>
        </CardDiv>
      </Wrapper>
    </Container>
  );
};

export default Highlights;
