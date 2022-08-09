import React from "react";
import {
  CardContainer,
  Circle,
  CoinImg,
  CryptoDetails,
  CryptoName,
} from "./styles";
import circle from "../../images/circle.png";
import logo from "../../images/logo-crypto.png";
import { CryptoParagraph, CryptoTitle, CryptoTitleGray } from "../Typography";

const CryptoCard = ({
  title,
  symbol,
  dailyChange,
  price,
  marketCap,
  volume,
  img,
}) => {
  return (
    <CardContainer>
      <CryptoName>
        <CryptoTitle>1.</CryptoTitle>
        <CryptoTitle>Bitcoin</CryptoTitle>
        <CryptoTitleGray>BTC</CryptoTitleGray>
        <CryptoParagraph>-0.15%</CryptoParagraph>
      </CryptoName>
      <CryptoDetails>
        <CryptoParagraph>Price: $100k</CryptoParagraph>
        <CryptoParagraph>Market Cap: $100k</CryptoParagraph>
        <CryptoParagraph>Volume(24H): $100k</CryptoParagraph>
      </CryptoDetails>
      <CoinImg src={logo} alt="" />
      <Circle src={circle} alt="" />
    </CardContainer>
  );
};

export default CryptoCard;
