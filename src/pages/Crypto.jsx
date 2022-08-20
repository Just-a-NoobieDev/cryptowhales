import { useParams } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { useGetCoinQuery } from "../services/cryptoApi";

const Crypto = () => {
  const { id } = useParams();
  const { data } = useGetCoinQuery(id);

  console.log(data);
  return (
    <div>
      <Footer />
    </div>
  );
};

export default Crypto;
