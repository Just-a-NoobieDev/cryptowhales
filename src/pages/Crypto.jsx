import { useParams } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { Container } from "../components/top10cryptos/styles";
import { useGetCoinQuery } from "../services/cryptoApi";

const Crypto = () => {
  const { id } = useParams();
  const { data } = useGetCoinQuery(id);

  console.log(data);
  return (
    <Container>
      <h1>This is Crypto Details</h1>
      <Footer />
    </Con>
  );
};

export default Crypto;
