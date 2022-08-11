import {
  MainProviderDiv,
  NewsCardContainer,
  NewsInfo,
  ProviderDiv,
  Redirect,
} from "./styles";
import { NewsAuthor, NewsTitle, Paragraph, TimeParagraph } from "../Typography";

import moment from "moment";

const NewsCard = ({
  size = "small",
  imgUrl,
  title,
  desc,
  providerImg,
  providerName,
  newsLink,
  datePublished,
}) => {
  const sub = size === "big-card" ? 230 : 90;

  const truncate = (str) => {
    return str.length > sub ? str.substring(0, sub) + "..." : str;
  };

  return (
    <NewsCardContainer size={size} href={newsLink} target="_blank">
      <img src={imgUrl} alt={title} align="middle" />
      <NewsInfo size={size}>
        <NewsTitle size={size}>{title}</NewsTitle>
        <MainProviderDiv>
          <ProviderDiv size={size}>
            <img src={providerImg} alt={providerName} />
            <NewsAuthor size={size}>{providerName}</NewsAuthor>
          </ProviderDiv>
          <TimeParagraph size={size}>
            {moment(datePublished).startOf("ss").fromNow()}
          </TimeParagraph>
        </MainProviderDiv>
        <Paragraph size={size}>{truncate(desc)}</Paragraph>
        <Redirect>
          <a href={newsLink} target="_blank" rel="noreferrer">
            Read more
          </a>
        </Redirect>
      </NewsInfo>
    </NewsCardContainer>
  );
};

export default NewsCard;
