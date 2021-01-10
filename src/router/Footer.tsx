import React from "react";
import styled, { css } from "styled-components";
import styles from "../styles/styles";
import logo from "../assets/logo/logo.png";
import constants from "../styles/constants";
import { useLocation } from "react-router";

const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Container pathname={pathname}>
      <FooterWrapper>
        <Logo src={logo} />
        <TextWrapper>
          <div>
            상호 | 대표: 홍길동 | 주소: 서울 서초구 방배로13길 22(방배동,
            한울서리풀베야체 3층)
          </div>
          <div>머머푸드 사업자등록번호:123-12-12333 | 대표번호 : 1231_1231</div>
          <div>이메일 paapdo@naver.com</div>
        </TextWrapper>
      </FooterWrapper>
    </Container>
  );
};

interface ContainerProps {
  pathname: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  height: 150px;
  background-color: ${styles.HeaderColor};
  justify-content: center;
  align-items: center;
  color: #6d6b6b;
  @media (max-width: ${constants.tranWidth}px) {
    height: 230px;
    ${(props) =>
      props.pathname === "/" &&
      css`
        padding-bottom: 45px;
      `}
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: ${constants.tranWidth}px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  width: 140px;
  height: 70px;
  margin-right: 30px;
  @media (max-width: ${constants.tranWidth}px) {
    margin-right: 0px;
  }
`;

const TextWrapper = styled.div`
  margin-left: 35px;
  div:not(:first-child) {
    margin-top: 5px;
  }
  div {
    text-align: center;
  }
  @media (max-width: ${constants.tranWidth}px) {
    margin-left: 0px;
    margin-top: 20px;
    padding-bottom: 20px;
  }
`;

export default Footer;
