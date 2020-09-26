import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import SponsorComponent from "../components/about/Sponsor";

const About = () => {
  return (
    <div>
      <BreadCrumb menu="about" />
      <SponsorComponent />
    </div>
  );
};

export default About;
