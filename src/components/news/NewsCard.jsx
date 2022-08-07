import { NewsCardContainer, NewsInfo } from "./styles";
import logo from "../../images/logo-crypto.png";

const NewsCard = ({ size = "small", imgUrl }) => {
  return (
    <NewsCardContainer size={size}>
      <img src={logo} alt="" />
      <NewsInfo size={size}>
        <h2></h2>
        <p></p>
      </NewsInfo>
    </NewsCardContainer>
  );
};

export default NewsCard;
