import "./intro.scss";
import { init } from "ityped";
import { ArrowDropDown } from "@material-ui/icons";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/profile.jpg" alt="profile" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>안녕하세요 저는 </h2>
          <h1>심채윤입니다.</h1>
          <h3>
            Frontend <span ref={textRef}></span>
          </h3>
        </div>

        <a href="#portfolio">
          <ArrowDropDown className="icon" />
        </a>
      </div>
    </div>
  );
}
