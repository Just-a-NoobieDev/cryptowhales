import styled from "styled-components";

export const NavContainer = styled.nav`
  height: 64px;
  width: 100%;
  padding: 5px 10px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-bottom: 1px solid #bababa;
  z-index: 10000;

  @media (min-width: 768px) {
    padding: 5px 30px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1920px;
  height: 64px;
  width: 100%;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > svg {
    cursor: pointer;
  }

  @media (min-width: 980px) {
    & > svg {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  height: 40px;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #ffffff;
  width: 100%;
  height: 200px;
  top: 64px;
  left: 0;
  flex-direction: column;
  border-bottom: 3px solid #437abd;
  box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.2);

  & > a {
    font-size: 16px;
    margin-bottom: 1rem;
    width: 100%;
    text-align: center;

    &:hover,
    &:active {
      color: #437abd;
    }
  }

  &.disable {
    display: none;
  }

  @media (min-width: 980px) {
    position: unset;
    width: unset;
    height: unset;
    top: unset;
    left: unset;
    flex-direction: row;
    border-bottom: unset;
    box-shadow: unset;

    & > a {
      margin-bottom: 0;
      margin-left: 1rem;
    }
  }

  @media (min-width: 1920px) {
    & > a {
      margin-left: 2rem;
    }
  }
`;
