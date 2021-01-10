import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { css } from "styled-components";
import { MainLeftBtn, MainRightBtn } from "./components/MainMoveBtn";
import constants from "../../styles/constants";
import MainPagination from "./components/MainPagination";

import main from "../../assets/home/main.png";
import main_2 from "../../assets/home/main_2.jpg";
import sub_banner_img_1 from "../../assets/home/sub_banner_img_1.png";
import sub_banner_img_2 from "../../assets/home/sub_banner_img_2.png";
import move_up_1 from "../../assets/home/move_up_1.png";
import sub_con_img_1 from "../../assets/home/sub_con_img_1.png";
import desc_background_img from "../../assets/home/desc_background_img.png";
import desc_img_1 from "../../assets/home/desc_img_1.jpg";
import desc_img_2 from "../../assets/home/desc_img_2.jpg";
import desc_img_3 from "../../assets/home/desc_img_3.jpg";
import Consulting from "./view/Consulting";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [activeSlide, setActiveSlide] = useState(0);
  const transWidth = width <= constants.tranWidth;
  const scrollY = useRef(0);

  const image = [
    {
      title: "메인 - 첫번째 이미지",
      url: main,
    },
    {
      title: "메인 - 두번째 이미지",
      url: main_2,
    },
    {
      title: "메인서브 - 첫번째 이미지",
      url: sub_banner_img_1,
    },
    {
      title: "메인서브 - 두번째 이미지",
      url: sub_banner_img_2,
    },
    {
      title: "무브업 이미지 - 첫번째 이미지",
      url: move_up_1,
    },
    {
      title: "서브 이미지 - 첫번째 이미지",
      url: sub_con_img_1,
    },
    {
      title: "설명 이미지 - 백그라운드 이미지",
      url: desc_background_img,
    },
    {
      title: "설명 이미지 - 첫번째 이미지",
      url: desc_img_1,
    },
    {
      title: "설명 이미지 - 두번째 이미지",
      url: desc_img_2,
    },
    {
      title: "설명 이미지 - 세번째 이미지",
      url: desc_img_3,
    },
  ];

  // window.screenTop : 브라우저 위에서 위치
  // window.screenLeft : 브라우저 왼쪽에서 위치
  // window.innerWidth : 브라우저 화면의 너비
  // window.innerHeight : 브라우저 화면의 높이
  // window.outerWidth : 브라우저 전체의 너비
  // window.outerHeight : 브라우저 전체의 높이

  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    afterChange: (current) => {
      setActiveSlide(current);
    },
  };

  const sliderRef = useRef<any>(null);

  const resizeWidth = () => {
    const windowWidth = window.innerWidth;
    setWidth(windowWidth);
  };

  const firstSlidePosition = 700;
  const secondSlidePosition = 1200;

  const [firstImageMove, setFirstImageMove] = useState(false);
  const [secondImageMove, setSecondImageMove] = useState(false);
  const [goingUp, setGoingUp] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (scrollY.current > firstSlidePosition && !firstImageMove) {
      setFirstImageMove(!firstImageMove);
    }
    if (scrollY.current > secondSlidePosition && !firstImageMove) {
      setSecondImageMove(!secondImageMove);
    }
    if (scrollY.current > currentScrollY && !goingUp) {
      setGoingUp(true);
    }
    scrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWidth);
    window.addEventListener("scroll", handleScroll);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return () => {
      window.removeEventListener("resize", resizeWidth);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ marginBottom: 100 }}>
      <MainWrapper>
        <Slider ref={sliderRef} {...settings}>
          <Image src={image[0].url} alt={"main"} />
          <Image src={image[1].url} alt={"main"} />
        </Slider>
        {!transWidth ? (
          <BTNWrapper width={width}>
            <MainLeftBtn
              onClick={() => sliderRef.current.slickPrev()}
              width={width}
            />
            <div>
              <MainRightBtn
                onClick={() => sliderRef.current.slickNext()}
                width={width}
              />
            </div>
          </BTNWrapper>
        ) : (
          <div>
            <MainPagination activeSlide={activeSlide} />
          </div>
        )}
      </MainWrapper>
      <Image src={image[2].url} alt={"main"} />
      <Image src={image[3].url} alt={"main"} />
      <MoveUpWrapper style={{ marginTop: 30 }}>
        <MoveUpSmallTitle width={width}>
          인스타보고 한 입, 유투브보고 한 입
        </MoveUpSmallTitle>
        <MoveUpBigTitle width={width}>
          맛있는 한끼는 소비자가 먼저, 알아봅니다.
        </MoveUpBigTitle>
        <div style={{ width: "100%", justifyContent: "center" }}>
          <MoveUpImage
            src={image[4].url}
            alt={"main"}
            firstImageMove={firstImageMove}
            width={width}
          />
        </div>
      </MoveUpWrapper>
      <MoveUpFakeHeight width={width} />
      <Image src={image[5].url} alt={"main"} />
      <DescWrapper>
        <DescText>왜 찐곱도리식당인가?</DescText>
        <div>
          <DescImage src={image[7].url} marginRight={true} />
          <DescImage src={image[8].url} marginRight={true} />
          <DescImage src={image[9].url} />
        </div>
      </DescWrapper>
      {width <= constants.tranWidth ? <Consulting /> : null}
    </div>
  );
};

const MainWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

interface MoveUpImageProps {
  firstImageMove: boolean;
  width: number;
}

const MoveUpImage = styled.img<MoveUpImageProps>`
  width: 800px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  opacity: 0;
  top: 600px;
  z-index: -1;
  ${(props) =>
    props.firstImageMove &&
    props.width > constants.tranWidth &&
    css`
      transform: translate3d(0, -500px, 0);
      opacity: 1;
      transition-property: opacity transform;
      transition-duration: 1s;
      transition-delay: 0s;
      transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    `};
  @media (max-width: ${constants.tranWidth}px) {
    width: ${(props) => props.width / 1.3}px;
    height: "auto";
    opacity: 1;
    top: 90px;
  }
`;

interface DescImageProps {
  marginRight?: boolean;
}

const DescImage = styled.img<DescImageProps>`
  width: 320px;
  height: 300px;
  margin-right: ${(props) => (props.marginRight ? "30px" : "0px")};
  @media (max-width: ${constants.tranWidth}px) {
    margin-right: 0px;
    margin-top: 30px;
  }
`;

const DescWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (max-width: ${constants.tranWidth}px) {
      flex-direction: column;
    }
  }
`;

const DescText = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const DescBackgroundImage = styled.img`
  width: 100%;
  height: 400px;
`;

interface MoveUpFakeHeightProps {
  width: number;
}

const MoveUpFakeHeight = styled.div<MoveUpFakeHeightProps>`
  height: 400px;
  @media (max-width: ${constants.tranWidth}px) {
    height: ${(props) => props.width / 2.5}px;
  }
`;

interface BTNWrapper {
  width: number;
}

const BTNWrapper = styled.div<BTNWrapper>`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: ${(props) => props.width / 10}px;
  bottom: ${(props) => props.width / 30}px;
  div {
    margin-left: 30px;
  }
`;

const MoveUpWrapper = styled.div`
  margin-top: 30px;
  position: relative;
  div {
    display: flex;
    width: 100;
    justify-content: center;
    margin-top: 20px;
  }
`;

interface TitleProps {
  width: number;
}

const MoveUpSmallTitle = styled.div<TitleProps>`
  font-size: 20px;
  text-align: center;
  @media (max-width: ${constants.tranWidth}px) {
    font-size: 13px;
  }
`;

const MoveUpBigTitle = styled.div<TitleProps>`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-top: 15px;
  @media (max-width: ${constants.tranWidth}px) {
    font-size: 20px;
    margin-top: 7px;
  }
`;

export default Home;
