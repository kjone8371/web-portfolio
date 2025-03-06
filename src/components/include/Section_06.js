import "../../assets/css/section/section_06.css";
import Winter from "../../assets/image/winter.png";
import Winter1 from "../../assets/image/winter1.png"


const Section_06 = () => {
    return (
        <section id="finsh" className="section6">
            <div className="finshed">
                <h1>연락주세요:)</h1>
                <div className="my_info">
                    <a href="mailto:rlawjddnsj8371@gmail.com" className="mail">메일</a>
                    <a href="https://github.com/kjone8371" className="github">깃허브</a>
                    <a href="tel:010-5238-8371" className="phone">전화</a>
                </div>
            </div>
            <img className="Winter" src={Winter} alt="Winter"/>
            <img className="winter1" src={Winter1} alt="Winter1"/>

        </section>
    );
}


export default Section_06;

