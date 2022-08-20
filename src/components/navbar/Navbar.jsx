import { useEffect, useState } from "react";

import { Logo, MenuContainer, NavContainer, Wrapper } from "./styles";
import LogoImg from "../../images/crypto-whales-logo.png";
import { Link } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const size = window.screen.availWidth;

  useEffect(() => {
    size >= 980 ? setActive(true) : setActive(false);
  }, [size]);

  const toggleNav = () => {
    setActive(!active);
  };

  return (
    <NavContainer>
      <Wrapper>
        <Link to="/" onClick={size >= 980 ? null : () => setActive(false)}>
          <Logo src={LogoImg} alt="logo" />
        </Link>
        {active ? (
          <IoMdClose size="2em" onClick={toggleNav} />
        ) : (
          <IoMdMenu size="2em" onClick={toggleNav} />
        )}
        <MenuContainer className={active ? "" : "disable"}>
          <Link to="/" onClick={size >= 980 ? null : toggleNav}>
            Home
          </Link>
          <Link to="/cryptocurrency" onClick={size >= 980 ? null : toggleNav}>
            CryptoCurrency
          </Link>
          <Link to="/news" onClick={size >= 980 ? null : toggleNav}>
            News
          </Link>
          <Link to="/exchanges" onClick={size >= 980 ? null : toggleNav}>
            Exchanges
          </Link>
        </MenuContainer>
      </Wrapper>
    </NavContainer>
  );
};

export default Navbar;
