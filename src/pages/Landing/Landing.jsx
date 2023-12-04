import React from "react";
import "./Landing.scss";
import Carousel from "../../components/Carousel/Carousel";

const Landing = ({ carouselImages }) => {
  // const slides = [
  //   {
  //     url: "https://notredameacademyenugu.com/20230310_102406.jpg",
  //     title: "Welcome to Notre Dame Academy",
  //   },
  //   {
  //     url: "https://notredameacademyenugu.com/assets/images/secondary.jpg",
  //     title: "Education and Morals reimagined",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     title: "State of the art learning infrastructure",
  //   },
  //   {
  //     url: "https://notredameacademyenugu.com/assets/images/courses-04.jpg",
  //     title: "Mental, physical, and spiritual growth for students",
  //   },
  // ];

  return (
    <div className="landing" id="landing">
      <div className="container">
        <Carousel slides={carouselImages} />
      </div>
    </div>
  );
};

export default Landing;
