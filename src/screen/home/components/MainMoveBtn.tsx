import React, { FunctionComponent } from "react";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import styled from "styled-components";

interface BtnProps {
  onClick: () => void;
  width: number;
}

export const MainLeftBtn: FunctionComponent<BtnProps> = ({
  onClick,
  width,
}) => {
  return (
    <WrapperBTN onClick={onClick} width={width}>
      <IoChevronBackOutline
        style={{
          width: width / 25,
          height: width / 25,
          maxWidth: 50,
          maxHeight: 50,
          paddingRight: 3,
          color: "white",
        }}
      />
    </WrapperBTN>
  );
};

export const MainRightBtn: FunctionComponent<BtnProps> = ({
  onClick,
  width,
}) => {
  return (
    <WrapperBTN onClick={onClick} width={width}>
      <IoChevronForward
        style={{
          width: width / 25,
          height: width / 25,
          maxWidth: 50,
          maxHeight: 50,

          color: "white",
        }}
      />
    </WrapperBTN>
  );
};

interface WrapperBTN {
  width: number;
}

const WrapperBTN = styled.div<WrapperBTN>`
  display: flex;
  width: ${(props) => props.width / 20}px;
  height: ${(props) => props.width / 20}px;
  max-width: 60px;
  max-height: 60px;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: ${(props) => props.width / 20 / 2}px;
  opacity: 0.9;
  cursor: pointer;
`;
