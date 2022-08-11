import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
