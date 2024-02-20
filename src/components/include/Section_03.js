import React from "react";

import "../../assets/css/section/section_03.css";


const Section3 = () => {
    return (
        <section id="usedStack" className="section3">
            <div className="section3_fixed">
                <h2>
                    USED <em>STACK</em>
                </h2>
                <p>이런 기술들을 사용해요!</p>
            </div>
            <section className="panel custom_02">

                <div className="section3_item i001">
                    <div className="item_desc">
                        <h2>FRONT</h2>

                        <div>
                            <h4>React</h4>
                            <p>
                                React의 구조를 이해하고 있으며, 여러가지 Hook를 사용할 수 있습니다.
                            </p>
                        </div>

                        <div>
                            <h4>Next.js</h4>
                            <p>
                               Next.js의 기초 개념을 이해하고 있으며, Express의 기본 지식을 
                               가지고 기본적인 웹 개발을 시작했습니다.
                            </p>
                        </div>
                        
                        <div>
                            <h4>JS</h4>
                            <p>
                                기본적인 언어인 JavaScript의 기본적인 개념과 또 나아가 실습을 통해 
                                JS언어의 이해를 높여 백엔드 개발 Node.js 또한 같이 사용합니다.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section3_item i002">
                    <div className="item_desc">
                        <h2>BACK-END</h2>
                        <div>
                            <h4>JAVA</h4>
                            <p>
                                JAVA의 대한 여러가지 지식을 사용 할 수 있습니다. 
                                또한 자바 네트워크를 통해 자바의 이해가 더 높아 졌습니다.
                            </p>
                        </div>
                        
                        <div>
                            <h4>Spring</h4>
                            <p>
                                Spring 애플리케이션의 여러가지 지식을 이용 하여 원하는 API를 만들 수 있습니다. 또한 Spring Boot와 같은 개발 툴을 알 수 있습니다.
                            </p>
                        </div>

                        <div>
                            <h4>Node.js</h4>
                            <p>
                                JS언어로 하는 서버 애플리케이션을 사용하여 웹 프론트 엔드와 더 편리하게 사용 할 수 있습니다.
                            </p>
                        </div>

                        <div>
                            <h4>MYSQL</h4>
                            <p>
                                기본 데이터 베이스 기초이며, MongoDB 또한 sql의 기본 문법, 기본 지식을 통해 웹 서버 애플리케이션과 연동을 할 수 있고, 웹의 구조에 대해 더 정확히 알 수 있게 됩니다.
                            </p>
                        </div>
                    </div>
                </div>
            
            <div className="section3_item i003">
                <div className="item_desc">
                    <h2>CLOUD-SERVICE</h2>
                    <div>
                        <h4>AWS</h4>
                        <p>
                            Amazon Web Service에서 컴퓨팅 서비스와 스토리 서비스, 데이터 베이 서비스를 활용 하여 웹의 완성도를 높였습니다.
                        </p>
                    </div>

                    <div>
                        <h4>Oracle Cloud</h4>
                        <p>
                            Oracle 애플리케이션 호스팅과 데이터 베이스를 이용하여 웹의 완성도를 더욱 높일 수 있습니다.
                        </p>
                    </div>
                </div>
            </div>

        <div className="section3_item i004">
            <div className="item_desc">
                <h2>TOOLS</h2>

                <div>
                    <h4>Figma</h4>
                        <p>
                        웹 사이트를 손 쉽게 디자인 하고, 팀과 협업을 할 수 있고, 반복적 작업이 필요할때는 컴포넌트별로 분리 후 하나 수정하면 다양한것들이 수정 가능한 기능들이 제공되어 사용하게 되었습니다.
                        </p>
                </div>

                <div>
                    <h4>GitHub</h4>
                        <p>
                            브랜치를 각각 나누어 작업하며 메인 브랜치에 merge하는 방식으로 작업 하고 있습니다.
                        </p>
                </div>
            </div>
        </div>
        </section>
    </section>
    );
}

export default Section3;