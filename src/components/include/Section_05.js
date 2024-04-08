import { useEffect, useState } from "react";


const Section_05 = () => {
    const [scrollY, setScrollY] = useState(0);
    const [circles, setCircles] = useState([]);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      // 스크롤 위치가 30 이상일 때만 원을 생성합니다.
      if (scrollY >= 30) {
        const newCircle = { id: circles.length, x: 50, y: scrollY };
        setCircles([...circles, newCircle]);
      }
    }, [scrollY]);
  
    return (
      <svg width="100%" height="100%">
        {circles.map(circle => (
          <circle key={circle.id} cx={circle.x} cy={circle.y} r="10" fill="red" />
        ))}
      </svg>
    );
  };

export default Section_05;


