import { useEffect } from "react";
import AOS from "aos";
import "../../assets/css/animation.css";
// import "../css/animation.css";
import 'aos/dist/aos.css';

const ScrollAnimation = () => {
    useEffect(()=>{
        AOS.init({duration: 2000});
    }, []);
    return (
        <div className="top">
            <h1 className="text-center">Welcome to react animation</h1> <br/> <br/> <br/>
            <h1>Fade</h1>
            <div className="animation" data-aos="fade-up" ></div> <br/> <br/>
            <div className="animation" data-aos="fade-down" ></div> <br/> <br/>
            <div className="animation" data-aos="fade-right" ></div> <br/> <br/>
            <div className="animation" data-aos="fade-left"></div> <br/> <br/>
            <h1>Flip</h1> <br/> <br /> <br/>
            <div className="animation" data-aos="flip-right"></div> <br/> <br/>
            <h1>Zoom Animation</h1>
            <div className="animation" data-aos="zoom-in"></div> <br/>
            <br/> <br/>
        </div>
    );
}

export default ScrollAnimation;






