
import { useEffect, useRef } from "react";
import gsap from "gsap";



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
            <div className="section4_fixed">
                <h2>
                    MY <em>Project</em>
                </h2>
            </div>
            <section className="projects" ref={scrollSectionRef}>

                <div className="horizontal_scroll_wrap">
                    <div className="horizontal_scroll_content" ref={scrollContentRef}>
                        
                    </div>
                </div>
            </section>
        </section>
    )
};

export default Section4;