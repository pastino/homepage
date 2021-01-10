import React from "react";
import styled, { css } from "styled-components";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const Consulting = () => {
  return (
    <ConsultingContainer>
      <CounsultingWrapper
        color={"#FFDE03"}
        backgroundColor={"#391A1A"}
        borderRight={true}
      >
        {parse("카카오톡<br/>상담하기")}
      </CounsultingWrapper>
      <CounsultingPhoneWrapper
        href="tel:123-456-7890"
        color={"white"}
        backgroundColor={"#980000"}
        borderRight={true}
        borderLeft={true}
        onClick={() => Link}
      >
        {parse("전화<br/>상담하기")}
      </CounsultingPhoneWrapper>
      <CounsultingPhoneWrapper
        href="https://www.facebook.com/all.about.20s"
        color={"white"}
        backgroundColor={"#BF0455"}
        borderRight={true}
        borderLeft={true}
      >
        {parse("인스타<br/>둘러보기")}
      </CounsultingPhoneWrapper>
      <CounsultingPhoneWrapper
        href="https://blog.naver.com/jdy0306/222199503911"
        color={"black"}
        backgroundColor={"#00C63C"}
        borderLeft={true}
      >
        {parse("블로그<br/>둘러보기")}
      </CounsultingPhoneWrapper>
    </ConsultingContainer>
  );
};

const ConsultingContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 99;
  flex-direction: row;
  height: 50px;
`;

interface CounsultingWrapperProps {
  color: string;
  backgroundColor: string;
  borderRight?: boolean;
  borderLeft?: boolean;
}

const CounsultingWrapper = styled.div<CounsultingWrapperProps>`
  display: flex;
  background-color: ${(props) => props.backgroundColor};
  width: 50%;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  line-height: 1.3;
  font-weight: 700;
  text-align: center;
  ${(props) =>
    props.borderRight &&
    css`
      border-top-right-radius: 10px;
    `}

  ${(props) =>
    props.borderLeft &&
    css`
      border-top-left-radius: 10px;
    `}
  cursor:pointer;
`;

const CounsultingPhoneWrapper = styled.a<CounsultingWrapperProps>`
  display: flex;
  background-color: ${(props) => props.backgroundColor};
  width: 50%;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  line-height: 1.3;
  font-weight: 700;
  text-align: center;
  ${(props) =>
    props.borderRight &&
    css`
      border-top-right-radius: 10px;
    `}

  ${(props) =>
    props.borderLeft &&
    css`
      border-top-left-radius: 10px;
    `}
  cursor:pointer;
`;

export default Consulting;
