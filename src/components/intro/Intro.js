import "./intro.scss";
// import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1500,
  //     backSpeed:60,
  //     strings: ["Developer", "Designer", "Content Creator"],
  //   });
  // }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi I'm</h2>
          <h1>Shafat Rahman</h1>
          <h3>
          I am currently pursuing a certification to be a Full Stack Web Developer through GW Coding Boot Camp. posess a background in Accounting. Motivated to gain experience in new technologies and systems to improve skillset.
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}