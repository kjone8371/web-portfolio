import profile from "../../assets/image/KakaoTalk_Photo_2024-01-13-14-43-22-removebg-preview 1.png";
import "../../assets/css/section/section_02.css";
import React, {useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Section_02 = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
            
        });
    }, []);

    return (
        <section id="information" className="section2">
            <div className="section2_cont" data-aos="fade-up">
                <div className="section2_desc">
                    <h2 className="title">
                        실패하는 것이 두려운게 아니라 <br/>
                        노력 하지 않는게 두려운것이다!
                    </h2>
                    <p className="desc">
                        초보 프론트엔드 개발자 
                        <br/>
                        처음에 어떻게 공부를 해야 하는지 몰랐습니다.
                        <br/>
                        책과 구글링등을 활용하여 탐구하고 칮이보며
                        <br/>
                        스스로 노력 하는 개발자가 되기 위해 스스로 다집을 하게되었습니다.
                        <br/>
                        개발 공부에 시간 가는줄 모르는 매력에 빠지고, 뿌듯함을 느껴 개발자의 길을 걷게 되었습니다.
                        <br/>
                        <br/>
                        문제에 기회를 발견하고, 해결과 동시에 성취감을 좋아합니다. <br/>
                        React 등 프레임워크 환경에서 컴포넌트 단위의 작업을 능숙하게 할 수 있습니다.
                    </p>
                </div>
            </div>
            <div className="profile_cont" data-aos="fade-left">
                <img className="profile" src={profile} alt="김정원 프로필 이미지"/>
            </div>
        </section>
    );
}

export default Section_02;


