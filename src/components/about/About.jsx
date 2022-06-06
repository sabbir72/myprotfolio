import "./about.css";
import cv from "../../img/cv.jpg";
import AboutMe from "../../img/me.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={AboutMe}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I am a web developer. Trying to establish myself as a <strong>MERN</strong> developer. I like programming and I want to build a career with programming.
        </p>
        <p className="a-desc">
         
        </p>
        <div className="a-award">
          <a target="blank" href="https://drive.google.com/file/d/1tjzXj0UKKhwXz8sB96IZOTNMWrh-79TY/view?usp=sharing"><img src={cv} alt="" className="a-award-img" /></a>
          <div className="a-award-texts">
            <h4 className="a-award-title">Here My CV</h4>
            <p className="a-award-desc">
            <i className="cvicon fa-solid fa-arrow-left"></i>
              If you want to see my CV , please Click here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
