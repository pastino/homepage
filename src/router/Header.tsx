import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import {
  Link,
  useLocation,
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";
import styled from "styled-components";
import { useCookies } from "react-cookie";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return <Container style={{ color: "black" }}>fdafd</Container>;
};

const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: black;
`;

export default Header;
