import { NewsCardContainer, NewsInfo } from "./styles";
import logo from "../../images/logo-crypto.png";
import { NewsTitle } from "../Typorgraphy";

const NewsCard = ({ size = "small", imgUrl }) => {
  return (
    <NewsCardContainer size={size} href="#">
      <img src={logo} alt="" />
      <NewsInfo size={size}>
        <NewsTitle size={size}>
          Test Title of the news in this area. Some more text
        </NewsTitle>
        <p></p>
      </NewsInfo>
    </NewsCardContainer>
  );
};

export default NewsCard;
