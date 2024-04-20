
import React, {useRef, useState, useEffect} from "react";
import "../../assets/css/layout/header.css";



const Header = () => {
  const headerBox = useRef(null);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const checkTop = () => {
      if (document.querySelector("#information").offsetTop >= window.scrollY) {
        // 안닿았을때
        // headerBox.current.style.position = "sticky";
      } else {
        // 닿았을때
        let scrollTop =
          window.pageYOffset ||
          window.scrollY ||
          document.documentElement.scrollTop;

        if (scrollTop < lastScroll) {
          //현재 스크롤 값이 이전 스크롤 값보다 작다면
          headerBox.current.style.top = "0px";
          // headerBox.current.style.position = "fixed";
        } else {
          headerBox.current.style.top = "-100px"; // top속성을 -95px만큼 설정
        }
        setLastScroll(scrollTop); // 지금 현재 스크롤 값을 이전 스크롤 값에 넣은 뒤
      }
    };

    window.addEventListener("scroll", checkTop);
  });

    return (
        <header id="header" ref={headerBox}>
            <div className="header_inner">
                <a href="#main">
                    <div>
                        <p>
                            <i>2024</i> 웹 프론트엔드
                        </p>
                        <p>
                            <i>김정원</i> 포트-폴리오
                        </p>
                    </div>
                </a>
                <div className="menu_cont">
                    <a href="#information">소개</a>
                    <a href="#usedStack">스택</a>
                    <a href="#project">프로젝트</a>
                    <a href="#experience">경험</a>
                    <a href="#finsh">마치며</a>
                </div>
                {/* <button className="menu_bt">메뉴</button> */}
                <div className="menu_cont mobile">
                    <a href="#information">소개</a>
                    <a href="#usedStack">스택</a>
                    <a href="#project">프로젝트</a>
                    <a href="#experience">경험</a>
                    <a href="#finsh">마치며</a>
                </div>
            </div>
        </header>
    );
}

export default Header;





















