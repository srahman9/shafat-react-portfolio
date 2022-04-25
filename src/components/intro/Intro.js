import "./intro.scss";

export default function Intro() {

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="https://user-images.githubusercontent.com/32348687/165153163-f1e40904-524e-4bff-bc3b-48271ccd3191.jpeg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h3>Hi my name is</h3>
          <h2>Shafat Rahman</h2>
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