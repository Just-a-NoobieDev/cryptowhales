import {
  MainProviderDiv,
  NewsCardContainer,
  NewsInfo,
  ProviderDiv,
  Redirect,
} from "./styles";
import logo from "../../images/logo-crypto.png";
import { NewsAuthor, NewsTitle, Paragraph, TimeParagraph } from "../Typography";
import { Link } from "react-router-dom";

const NewsCard = ({
  size = "small",
  imgUrl,
  title,
  desc,
  providerImg,
  providerName,
  newsLink,
}) => {
  const sub = size === "big-card" ? 230 : 90;

  const truncate = (str) => {
    return str.length > sub ? str.substring(0, sub) + "..." : str;
  };

  return (
    <NewsCardContainer size={size} href="#">
      <img src={logo} alt="" />
      <NewsInfo size={size}>
        <NewsTitle size={size}>
          Test Title of the news in this area. Some more text
        </NewsTitle>
        <MainProviderDiv>
          <ProviderDiv size={size}>
            <img src={logo} alt="" />
            <NewsAuthor size={size}>BBC News</NewsAuthor>
          </ProviderDiv>
          <TimeParagraph size={size}>1 hour ago</TimeParagraph>
        </MainProviderDiv>
        <Paragraph size={size}>
          {truncate(`This is the news description and it will trim if exceeds to about a
          number of words This is the news description and it will trim if exceeds to about a
          number of words exceeds to about a
          number of words This is the news description and it will trim if exceeds to about a
          number of words exceeds to about a
          number of words This is the news description and it will trim if exceeds to about a
          number of words`)}
        </Paragraph>
        <Redirect>
          <Link to="#">Read more</Link>
        </Redirect>
      </NewsInfo>
    </NewsCardContainer>
  );
};

export default NewsCard;
