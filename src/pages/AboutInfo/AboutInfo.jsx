import React, { useEffect, useState } from "react";
import "./AboutInfo.scss";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { ThreeCircles } from "react-loader-spinner";

const AboutInfo = () => {
  const [aboutItem, setAboutItem] = useState();
  const [personnels, setPersonnels] = useState();
  const [achievements, setAchievements] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
  });

  useEffect(() => {
    //Fetch About Item
    const getAboutItem = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("about", {
          headers: {
            token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
          },
        });
        setAboutItem(res.data[0]);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    //Fetch Personnnels
    const getPersonnels = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("personnels", {
          headers: {
            token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
          },
        });
        setPersonnels(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    //Fetch Achievements
    const getAchievements = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get("achievements", {
          headers: {
            token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
          },
        });
        setAchievements(res.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getAboutItem();
    getPersonnels();
    getAchievements();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2400 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2400, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
    <div className="AboutInfo">
      <Banner
        title="About Us"
        subTitle="Education with us means so much more"
      />
      <div className="aboutContainer">
        <div className="principal">
          <div className="image">
            <span className="title">Meet the Principal</span>
            <div className="imgContainer">
              <img src="img/pri.png" alt="principal" />
              <div className="principal-title">
                <span className="name">{aboutItem?.principalName}</span>
                {aboutItem?.principalTitle && (
                  <span className="honors">{aboutItem?.principalTitle}</span>
                )}
              </div>
            </div>
          </div>
          <div className="caption">
            <span className="title">Meet the Principal</span>
            <p className="body">{aboutItem?.principalDesc}</p>
            <Link to="/contact">
              <button>Contact Us</button>
            </Link>
          </div>
        </div>
        <div className="schoolInfo">
          <div className="images">
            <span data-aos="fade-up" data-aos-duration="1000" className="title">
              About St. Albert the Great School
            </span>
            <div className="imgsContainer">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="imgLg"
              >
                <img src={aboutItem?.schoolImageLg} alt="" />
              </div>
              <div className="imgSmGroup">
                <img
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  src={aboutItem?.schoolImageSmT}
                  alt=""
                  className="imgSm"
                />
                <img
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  src={aboutItem?.schoolImageSmB}
                  alt=""
                  className="imgSm"
                />
              </div>
            </div>
          </div>
          <div className="caption">
            <span data-aos="fade-up" data-aos-duration="1000" className="title">
              About St. Albert the Great School
            </span>
            <p data-aos="fade-up" data-aos-duration="1000" className="body">
              {aboutItem?.desc}
            </p>
          </div>
        </div>
        <div className="mishVish">
          <div className="section top">
            <div className="image">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                className="title"
              >
                Our Vision
              </span>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="imgContainer"
              >
                <div className="imgBackdrop"></div>
                <img src={aboutItem?.visionImg} alt="" />
              </div>
            </div>
            <div className="caption">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                className="title"
              >
                Our Vision
              </span>
              <p data-aos="fade-up" data-aos-duration="1000" className="body">
                {aboutItem?.vision}
              </p>
            </div>
          </div>
          <div className="section bottom">
            <div className="image">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                className="title"
              >
                Our Mission
              </span>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="imgContainer"
              >
                <div className="imgBackdrop"></div>
                <img src={aboutItem?.missionImg} alt="" />
              </div>
            </div>
            <div className="caption">
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                className="title"
              >
                Our Mission
              </span>
              <p data-aos="fade-up" data-aos-duration="1000" className="body">
                {aboutItem?.mission}
              </p>
            </div>
          </div>
        </div>
        <div className="team">
          <div className="title">
            <span data-aos="fade-up" data-aos-duration="1000">
              Meet the administrative board
            </span>
          </div>
          <div className="body">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="adminItems"
            >
              {isLoading ? (
                <div className="loading__inline">Loading...</div>
              ) : (
                personnels?.map((personnel) => (
                  <div key={personnel._id} className="adminItem">
                    <img src={personnel?.img} alt={personnel?.fullName} />
                    <div className="details">
                      <span className="name">{personnel?.fullName}</span>
                      <span className="role">{personnel?.title}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="bodyBottom"></div>
          </div>
        </div>
        <div className="achievements">
          <div className="title">
            <span data-aos="fade-up" data-aos-duration="1000">
              Our Achievements
            </span>
          </div>
          {achievements && (
            <Carousel
              showDots={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              responsive={responsive}
            >
              {achievements?.map((achievement) => (
                <div
                  key={achievement?._id}
                  className="achi-item"
                >
                  <img src={achievement?.img} alt={achievement?.title} />
                  <span className="achi-title">{achievement?.title}</span>
                  <p className="body">{achievement?.desc}</p>
                </div>
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
