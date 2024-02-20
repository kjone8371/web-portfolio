import React, { useEffect, useRef } from "react";

import { Fragment } from "react";

const MouseComponents = () => {
  const subCursor = useRef();
  const mainCursor = useRef();
  const objCursor = useRef();


  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      subCursor.current.style.transform = `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`;
      mainCursor.current.style.transform = `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`;
      objCursor.current.style.transform = `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem)) `;
    });
    window.addEventListener("mousedown", (e) => {
      subCursor.current.style.transform = `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem)) scale(2)`;
    });
    window.addEventListener("mouseup", (e) => {
      subCursor.current.style.transform = `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem)) scale(1)`;
    });
  }, []);

  return (
    <Fragment>

      <div id="cursor" className="cursor">
        <div className="ring" ref={subCursor}>
          <div></div>
        </div>
        <div className="ring" ref={mainCursor}>
          <div></div>
        </div>
      </div>
      <div className="cursor obj">
        <div className="back_obj" ref={objCursor}>
          <div></div>
        </div>
      </div>
      
    </Fragment>
  );
};

export default MouseComponents;
