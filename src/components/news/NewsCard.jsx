import { NewsCardContainer, NewsInfo } from "./styles";

const NewsCard = ({ size, imgUrl }) => {
  return (
    <NewsCardContainer size={size}>
      <img src={imgUrl} alt="" />
      <NewsInfo>
        <h2></h2>
        <p></p>
      </NewsInfo>
    </NewsCardContainer>
  );
};

export default NewsCard;
