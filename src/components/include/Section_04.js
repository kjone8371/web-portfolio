
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../../assets/css/section/section_04.css";
import PCOT from "../../assets/image/PCOT.png";

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
                    </div>
                </div>
            </section>
        </section>
    )
};

export default Section4;