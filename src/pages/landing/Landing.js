import React from "react";
import heroImage from "../../assets/hero-image.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__hero">
        <div className="landing__hero__text">
          <h1 className="page-title ">
            Effortlessly manage your <br />
            projects.
          </h1>
          <div className="landing__hero__text__link">
            <Link to="/login">Get Started</Link>
          </div>
        </div>
        <div className="landing__hero__image">
          <img src={heroImage} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
