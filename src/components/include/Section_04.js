
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../../assets/css/section/section_04.css";
import PCOT from "../../assets/image/PCOT.png";
import Portfolio from "../../assets/image/포트폴리오.png";
import ExporCar from "../../assets/image/ExporCar Logo.png";
import KessDB from "../../assets/image/KessDB.jpg";

const Section4 = () => {
    const scrollSectionRef = useRef(null);
    const scrollContentRef = useRef(null);

  useEffect(() => {
    const scrollSection = scrollSectionRef.current;
    const scrollContent = scrollContentRef.current;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const sectionOffset = Math.abs(scrollSection.offsetTop - scrolled);
      const notReachedBottom = parseInt(
        Math.max(
          0,
          scrollSection.getBoundingClientRect().bottom - window.innerHeight
        )
      );

      if (scrollSection.offsetTop <= scrolled && notReachedBottom) {
        gsap.to(scrollContent, {
          x: -sectionOffset,
        });
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return (
        <section id="project" className="section4">
            <section className="projects" ref={scrollSectionRef}>

                <div className="horizontal_scroll_wrap">
                    <div className="horizontal_scroll_content" ref={scrollContentRef}>
                        <div className="project_main">
                            Project
                        </div>
                        <div className="section4_item">
                            <div className="item_desc2">
                                <div>
                                    <h2>PCOT</h2>
                                    <h3>나르샤 프로젝트</h3>
                                    <h1>설명</h1>
                                    <p>
                                        PCOT는 디자이너들을 위한 협업 툴을 웹으로 제작하며, 회사 조직마다 관리자가 있고, <br/>
                                        PSD파일을 관리 하거나 실시간으로 직원의 업무 진도를 확인 할 수 있습니다.
                                    </p>
                                    <h1 className="skill">기술 스택</h1>
                                    <p> 
                                        React, JS <br/>
                                        Spring Boot, JAVA <br/>
                                        AWS, Photo <br/>
                                    </p>
                                    <div className="project_pr">
                                        <a href="https://github.com/Team-Freckle" className="github">깃허브</a>
                                        <a href="https://pcothub.com" className="show">미리보기</a>
                                        <a href="https://www.figma.com/file/O1HV3K1Xwy1FgLKCl6x21g/PCOT?type=design&node-id=2504%3A35&mode=design&t=c1u2Id1M0tnloWAY-1" className="figma">피그마</a>
                                    </div>
                                </div>
                            </div>
                            <div className="item_desc3"><img className="PCOT" src={PCOT} alt="PCOT"/></div>
                        </div>
                        <div className="section4_item">
                            <div className="item_desc2">
                                <div>
                                    <h2>Portfolio</h2>
                                    <h3>개인 프로젝트</h3>
                                    <h1>설명</h1>
                                    <p>
                                        저의 포트폴리오를 이렇게 웹으로 제작해 많은 사람들이 볼 수 있도록 제작되었습니다. <br/>
                                        react를 활용해 react 프론트엔드으 기술을 향상 시키고 보안 하기위해 <br/>
                                        react 개념 이해를 위해 제작 되었습니다.
                                    </p>
                                    <h1 className="skill">기술 스택</h1>
                                    <p> 
                                        React, JS <br/>
                                        Firebase, Figma <br/>
                                    </p>
                                    <div className="project_pr">
                                        <a href="https://github.com/kjone8371/web-portfolio.git" className="github">깃허브</a>
                                        <a href="https://portfolio-eadd1.web.app" className="show">미리보기</a>
                                        <a href="https://www.figma.com/file/d5k7EBO3tgQsoniYUmSuoW/%EC%9B%B9-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?type=design&node-id=0%3A1&mode=design&t=feMMzAwNOA3GRCkT-1" className="figma">피그마</a>
                                    </div>
                                </div>
                            </div>
                            <div className="item_desc3"><img className="Portfolio" src={Portfolio} alt="Portfolio"/></div>
                        </div>
                        <div className="section4_item">
                            <div className="item_desc2">
                                <div>
                                    <h2>ExporCar</h2>
                                    <h3>개인 프로젝트</h3>
                                    <h1>설명</h1>
                                    <p>
                                        깔끔하고 내가 원하는 차량을 쉽게 찾을 수 있는 서비스! <br/>
                                        ExporCar는 수출차, 중고차등 자신이 원하는 가격대로 구매 할 수 있는 웹 서비스입니다.
                                    </p>
                                    <h1 className="skill">기술 스택</h1>
                                    <p> 
                                        React, JS <br/>
                                        Spring Boot, JAVA <br/>
                                        AWS, Outh2 Google Cloud <br/>
                                    </p>
                                    <div className="project_pr">
                                        <a href="https://github.com/exporcar-cozllia" className="github">깃허브</a>
                                        <a href="https://pcothub.com" className="show">미리보기</a>
                                        <a href="https://www.figma.com/file/feaxteWnyOmvrXQqjmq1fo/ExporCar?type=design&node-id=0%3A1&mode=design&t=Ya1dH9g7jd9pWOLX-1" className="figma">피그마</a>
                                    </div>
                                </div>
                            </div>
                            <div className="item_desc3"><img className="ExporCar" src={ExporCar} alt="ExporCar"/></div>
                        </div>
                        <div className="section4_item">
                            <div className="item_desc2">
                                <div>
                                    <h2>KessDB</h2>
                                    <h3>팀 프로젝트</h3>
                                    <h1>설명</h1>
                                    <p>
                                        KessDB는 한글로 된 명령어를 사용하여 DB를 제어 할 수 있습니다. <br/>
                                        C언어를 이용하여 개발하였다는것에 강점을 두고 있습니다.
                                    </p>
                                    <h1 className="skill">기술 스택</h1>
                                    <p> 
                                        React, JS <br/>
                                        C, Python, JAVA <br/>
                                     <br/>
                                    </p>
                                    <div className="project_pr">
                                        <a href="https://github.com/Miun-ulisaekki" className="github">깃허브</a>
                                        <a href="https://github.com/Miun-ulisaekki/KessDB_Web.git" className="show">미리보기</a>
                                        <a href="https://www.figma.com/file/G4sc9FPy2KrlT1WPlcRPCW/%EB%AF%B8%EC%9A%B4%EC%9A%B0%EB%A6%AC%EC%83%88%EB%81%BC?type=design&node-id=0%3A1&mode=design&t=uqa6Qskg32PmiJ7P-1" className="figma">피그마</a>
                                    </div>
                                </div>
                            </div>
                            <div className="item_desc3"><img className="KessDB" src={KessDB} alt="KessDB"/></div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
};

export default Section4;