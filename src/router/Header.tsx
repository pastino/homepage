import React, { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo/logo.png";
import { IoMenuSharp } from "react-icons/io5";
import constants from "../styles/constants";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [width, setWidth] = useState(window.innerWidth);

  const resizeWidth = () => {
    const windowWidth = window.innerWidth;
    setWidth(windowWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWidth);
    return () => window.removeEventListener("resize", resizeWidth);
  }, []);

  return (
    <Container style={{ color: "black" }}>
      <Logo src={logo} alt={"main"} />
      {width <= constants.tranWidth ? (
        <Menu>
          <IoMenuSharp style={{ width: 40, height: 30 }} />
        </Menu>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  @media (max-width: ${constants.tranWidth}px) {
    justify-content: center;
    height: 55px;
  }
`;

const Logo = styled.img`
  width: 200px;
  height: 80px;
  margin-left: 20px;
  cursor: pointer;
  @media (max-width: ${constants.tranWidth}px) {
    width: 125px;
    height: 50px;
    margin-left: 0px;
  }
`;

const Menu = styled.div`
  display: flex;
  position: absolute;
  right: 15px;
  cursor: pointer;
`;

export default Header;
