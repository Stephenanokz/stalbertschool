import React, { useEffect, useState } from "react";
import "./Home.scss";
import Landing from "../Landing/Landing";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import axios from "axios";
import { ThreeCircles } from "react-loader-spinner";

const Home = () => {
  const [aboutItem, setAboutItem] = useState();
  const [carouselImages, setCarouselImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
  });

  useEffect(() => {
    //Fetch Carousel Images
    const getCarouselImages = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("carouselimages", {
          headers: {
            token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
          },
        });
        setCarouselImages(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    //Fetch Carousel Images
    const getAboutItem = async () => {
      try {
        const res = await axiosInstance.get("about", {
          headers: {
            token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
          },
        });
        setAboutItem(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getCarouselImages();
    getAboutItem();
  }, []);

  return isLoading ? (
    <div className="loading">
      <ThreeCircles
        height="100"
        width="100"
        color="#564f82"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  ) : (
    <div className="home">
      <Landing carouselImages={carouselImages} />
      <About aboutItem={aboutItem} />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
