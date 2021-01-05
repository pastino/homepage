import React from "react";

const Home = () => {
  // const image = [
  //   {
  //     title: "메인 - 첫번째 이미지",
  //     url: "../../assets/home/main.png",
  //   },
  //   {
  //     title: "두번째 이미지",
  //     url: "../../assets/home/main.png",
  //   },
  // ];

  // window.screenTop : 브라우저 위에서 위치
  // window.screenLeft : 브라우저 왼쪽에서 위치
  // window.innerWidth : 브라우저 화면의 너비
  // window.innerHeight : 브라우저 화면의 높이
  // window.outerWidth : 브라우저 전체의 너비
  // window.outerHeight : 브라우저 전체의 높이

  const width = window.innerWidth;
  return (
    <div>
      <img
        src={require("../../assets/home/main.png")}
        style={{ width: 500, height: 200 }}
        alt={"main"}
      />
    </div>
  );
};

export default Home;
