import React from "react";
import {
  CardContainer,
  Circle,
  CoinImg,
  CryptoDetails,
  CryptoName,
} from "./styles";
import circle from "../../images/circle.svg";
import { CryptoParagraph, CryptoTitle, CryptoTitleGray } from "../Typography";

import millify from "millify";

const CryptoCard = ({
  rank,
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
        <CryptoTitle>{rank}.</CryptoTitle>
        <CryptoTitle>{title}</CryptoTitle>
        <CryptoTitleGray>{symbol}</CryptoTitleGray>
        <CryptoParagraph
          className={`${dailyChange < 0 ? "red" : "green"} bold`}
        >
          {dailyChange}%
        </CryptoParagraph>
      </CryptoName>
      <CryptoDetails>
        <CryptoParagraph className="bold2">
          Price:{" "}
          <span>
            $
            {Number(price).toLocaleString(navigator.language, {
              maximumFractionDigits: 2,
            })}
          </span>
        </CryptoParagraph>
        <CryptoParagraph>Market Cap: ${millify(marketCap)}</CryptoParagraph>
        <CryptoParagraph>Volume(24H): ${millify(volume)}</CryptoParagraph>
      </CryptoDetails>
      <CoinImg src={img} alt={title} />
      <Circle src={circle} alt="circle" />
    </CardContainer>
  );
};

export default CryptoCard;
