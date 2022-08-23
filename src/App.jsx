import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./components/NotFound";
import CryptoCurrency from "./pages/CryptoCurrency";
import News from "./pages/News";
import Crypto from "./pages/Crypto";
import Exchanges from "./pages/Exchanges";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cryptocurrency" element={<CryptoCurrency />} />
        <Route exact path="/crypto/:id" element={<Crypto />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/exchanges" element={<Exchanges />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
