import React from "react";
import { CardContainer, Circle, CoinImg, CryptoName } from "./styles";
import circle from "../../images/circle.png";
import logo from "../../images/logo-crypto.png";

const CryptoCard = () => {
  return (
    <CardContainer>
      <CryptoName>Bitcoin</CryptoName>
      <CoinImg src={logo} alt="" />
      <Circle src={circle} alt="" />
    </CardContainer>
  );
};

export default CryptoCard;
