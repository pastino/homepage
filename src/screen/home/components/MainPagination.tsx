import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface Props {
  activeSlide: number;
}

const MainPagination: FunctionComponent<Props> = ({ activeSlide }) => {
  return (
    <Wrapper style={{}}>
      <Dot activeSlide={activeSlide === 0 ? true : false} />
      <div>
        <Dot activeSlide={activeSlide === 1 ? true : false} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: center;
  align-items: center;
  bottom: 20px;
  div {
    margin-left: 2px;
  }
`;

interface DotProps {
  activeSlide: boolean;
}

const Dot = styled.div<DotProps>`
  width: ${(props) => (props.activeSlide ? "35px" : "17px")};
  height: ${(props) => (props.activeSlide ? "8px" : "8px")};
  background-color: ${(props) => (props.activeSlide ? "black" : "white")};
  border-radius: 10px;
`;

export default MainPagination;
