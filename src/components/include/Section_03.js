
import "../../assets/css/section/section_03.css";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Section3 = () => {
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
        <section id='usedStack' className='section3'>
            <section className="skills" ref={scrollSectionRef}>
        
                <div className="horizontal_scroll_wrap">
                    <div className="horizontal_scroll_content" ref={scrollContentRef}>
                      <div className="use_skill">
                        <h1 className="used">USED <em>STACK</em></h1>
                      </div>
                      <div className="section3_item">
                        <div className="item_desc">
                          <h2>FRONT</h2>
                            <div>
                              <h4>React</h4>
                              <p>
                                  React의 구조를 이해하고 있으며, 여러가지 Hook을 사용 할 수 있습니다.
                              </p>
                            </div>
                            <div>
                              <h4>Next.js</h4>
                              <p>
                                  Next.js의 기초 개념을 이해하고 있으며, Express의 기본지식을 <br/>
                                  가지고 기본적인 웹 개발을 시작 했습니다.
                              </p>
                            </div>
                            <div>
                              <h4>JS</h4>
                              <p>
                                  기본 언어인 JavaScript의 기본적인 개념과 또 나아가 실습을 통해 <br/>
                                  JS언어의 이해를 높여 백엔드 개발 Node.js 또한 같이 사용합니다.
                              </p>
                            </div>
                        </div>
                        
                      </div>
                      <div className="section3_item">
                        <div className="item_desc">
                          <h2>BACK-END</h2>
                          <div>
                              <h4>JAVA</h4>
                              <p>
                                JAVA의 대한 여러가지 지식을 사용 할 수 있습니다. <br/>
                                또한 자바 네트워크를 통해 자바의 이해가 더 높아 졌습니다.
                              </p>
                          </div>
                          <div>
                              <h4>Spring</h4>
                              <p>
                                  Spring 애플리케이션의 여러가지 지식을 이용하여 원하는 API를 만들 수 있습니다. <br/>
                                  또한 Spring Boot와 같은 개발 툴을 알 수 있습니다.
                              </p>
                          </div>
                          <div>
                              <h4>Node.js</h4>
                              <p>
                                  JS언어로 하는 서버 애플리케이션을 사용하여  웹 프론트엔드와 <br/>
                                  더 편리하게 사용 할 수 있습니다.
                              </p>
                          </div>
                          <div>
                              <h4>MySQL</h4>
                              <p>
                                기본 데이터 베이스 기초이며, MongoDB 또한 sql의 기본 문법, 기본 지식을 통해<br/>
                                웹 서버 애플리케이션과 연동을 할 수 있고, 웹의 구조에 대해 더 정확히 알수 있게 됩니다.
                              </p>
                          </div>
                        </div>
                      </div>
                      <div className="section3_item">
                        <div className="item_desc">
                        <h2>CLOUD-SERVICE</h2>
                        <div>
                            <h4>AWS</h4>
                            <p>
                               Amazon Web Service에서 컴퓨팅 서비스와 스토리 서비스, <br/>
                               데이터 베이스 서비스를 활용하여 웹의 완성도를 높였습니다.
                            </p>
                        </div>
                        <div>
                            <h4>Oracle Cloud</h4>
                            <p>
                                Oracle 애플리케이션 호스팅과 데이터 베이스를 이용하여 <br/>
                                웹의 완성도를 더욱 높일 수 있습니다.
                            </p>
                        </div>
                        </div>
                      </div>
                      <div className="section3_item">
                        <div className="item_desc">
                          <h2>TOOLS</h2>
                          <div>
                              <h4>Figma</h4>
                              <p>
                              웹 사이트를 손 쉽게 디자인 하고, 팀과 협업을 할 수 있고, <br/>
                              반복적 작업이 필요할때는 컴포넌트별로 분리 후 하나 수정하면 <br/>
                              다양한것들이 수정 가능한 기능들이 제공되어 사용하게 되었습니다. 
                              </p>
                          </div>
                          <div>
                              <h4>GitHub</h4>
                              <p>
                              브랜치를 각각 나누어 작업하며 메인 브랜치에 <br/>
                              merge하는 방식으로 작업 하고 있습니다.
                              </p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Section3;