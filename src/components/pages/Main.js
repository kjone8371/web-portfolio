import React, {useState} from "react";

import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Section1 from "../include/Section_01";
import Section2 from "../include/Section_02";
import Section3 from "../include/Section_03";
import Section4 from "../include/Section_04";
import Section5 from "../include/Section_05";
import Section6 from "../include/Section_06";

import DescFixed from "../layout/DescFixed";

// import MouseComponents from "../common/MouseComponents";
// import Section_03 from "../include/Section_03";
// import Section_04 from "../include/Section_04";

const Main = () => {
    const [scrolled, setScrolled] = useState(0);
    // 스크롤
    window.onscroll = function () {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrolled((winScroll / height) * 100);
  };

    return (
        <>
        
        <Header/>
        <Contents>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            {/* <MouseComponents /> */}
            <DescFixed scrolled={scrolled} />
        </Contents>
        </>
    );
}

export default Main;