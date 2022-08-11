import { Column, Container, SubContainer, Wrapper } from "./styles";
import { FooterSTitle, FooterSTitle2, FooterTitle } from "../Typography";

import { Link } from "react-router-dom";
import img from "../../images/footer.svg";
import logo from "../../images/crypto-whales-logo.png";

const Footer = () => {
  const date = new Date().getFullYear;

  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="crypto whales logo" />
        <SubContainer>
          <Column>
            <FooterTitle>Company</FooterTitle>
            <Link to="/">
              <FooterSTitle>About Us</FooterSTitle>
            </Link>
            <Link to="/">
              <FooterSTitle>Terms of Use</FooterSTitle>
            </Link>
            <Link to="/">
              <FooterSTitle>Privacy Policy</FooterSTitle>
            </Link>
            <Link to="/">
              <FooterSTitle>Disclaimer</FooterSTitle>
            </Link>
          </Column>
          <Column>
            <FooterTitle>Site Links</FooterTitle>
            <Link to="/">
              <FooterSTitle>Home</FooterSTitle>
            </Link>
            <Link to="/cryptocurrency">
              <FooterSTitle>CryptoCurrency</FooterSTitle>
            </Link>
            <Link to="/news">
              <FooterSTitle>News</FooterSTitle>
            </Link>
            <Link to="/exchanges">
              <FooterSTitle>Exchanges</FooterSTitle>
            </Link>
          </Column>
          <Column>
            <FooterTitle>Socials</FooterTitle>
            <Link to="https://github.com/Just-a-NoobieDev/cryptowhales">
              <FooterSTitle>Github</FooterSTitle>
            </Link>
            <Link to="/">
              <FooterSTitle>Facebook</FooterSTitle>
            </Link>
            <Link to="/">
              <FooterSTitle>Twitter</FooterSTitle>
            </Link>
            <Link to="/">
              <FooterSTitle>Instagram</FooterSTitle>
            </Link>
          </Column>
          <img src={img} alt="undraw" />
        </SubContainer>
        <FooterSTitle2>
          &copy; {date} CryptoWhales. All rights reserved | Design and develop
          by{" "}
          <a
            href="https://carljamesroxas.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            carl james roxas
          </a>
        </FooterSTitle2>
      </Wrapper>
    </Container>
  );
};

export default Footer;
