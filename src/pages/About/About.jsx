import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";
import CountUpSection from "../../components/CountUpSection/CountUpSection";

const About = ({ aboutItem }) => {
  return (
    <div className="about" id="about">
      <div className="top">
        <div className="aboutTitle">
          <span data-aos="fade-down" data-aos-duration="1000" className="title">About Us</span>
          <span data-aos="fade-down" data-aos-duration="1000" className="desc">
            {aboutItem?.welcomeText}
          </span>
          <hr />
        </div>
        <div className="aboutInfo">
          <div data-aos="fade-up" data-aos-duration="1000" className="left">
            <img
              src={aboutItem?.schoolImage}
              alt=""
            />
          </div>
          <div className="right">
            <span data-aos="fade-up" data-aos-duration="1000">
            "{aboutItem?.principalQuote}"
            </span>
            <div data-aos="fade-up" data-aos-duration="1000" className="author">
              <img
                src="https://images.unsplash.com/photo-1523825036634-aab3cce05919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
              <span>{aboutItem?.principalTitleHome}</span>
              <Link to="/about">
                <button>Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div data-aos="fade-up" data-aos-duration="1000" className="aboutItem">
          <img
            src="https://www.freeiconspng.com/thumbs/technology-icon/computer-laptop-technology-icon-10.png"
            alt=""
          />
          <span className="title">Creative & Tech Based</span>
          <span className="desc">
            The use of information and communication technologies in education
            can play a crucial role in providing new and innovative forms of
            support to teachers, students, and the learning process more
            broadly.
          </span>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="aboutItem">
          <img
            src="https://png.pngtree.com/element_origin_min_pic/16/08/18/1757b57a573e02a.jpg"
            alt=""
          />
          <span className="title">25+ years of experience</span>
          <span className="desc">
            With a commitment to innovation, we've adapted to changing times,
            preparing students for the challenges of the 21st century. Grateful
            for the support of our community, we look forward to continuing our
            mission of educational excellence in the years to come.
          </span>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="aboutItem">
          <img
            src="https://www.pngitem.com/pimgs/m/338-3382994_humor-erlenmeyer-flask-clipart-small-hd-png-download.png"
            alt=""
          />
          <span className="title">Modern Educational Facilities</span>
          <span className="desc">
            Our school boasts state-of-the-art, modern educational facilities
            designed to inspire and facilitate learning. From well-equipped
            classrooms to cutting-edge laboratories and multimedia centers, we
            provide students with an environment that encourages exploration,
            creativity, and innovation.
          </span>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="aboutItem">
          <img
            src="https://www.pngkey.com/png/detail/260-2604481_building-clipart-black-and-white-building-clip-art.png"
            alt=""
          />
          <span className="title">Best Infrastructure</span>
          <span className="desc">
            We take pride in offering the very best infrastructure at our
            school. Our campus features top-notch facilities, including spacious
            classrooms, well-maintained sports fields, advanced technology labs,
            and a welcoming environment that fosters holistic development.
          </span>
        </div>
      </div>
      <div className="count">
        <CountUpSection />
      </div>
      <div className="section">
        <div className="title">
          <span data-aos="fade-up" data-aos-duration="1000" className="subhead">Why choose us</span>
          <span data-aos="fade-up" data-aos-duration="1000" className="head">Child development without compromise</span>
          <span data-aos="fade-up" data-aos-duration="1000" className="desc">
            We prioritize your child's future. Our dedicated educators, modern
            facilities, and holistic approach to education ensure academic
            excellence and personal growth. Join our school, where your child's
            potential is nurtured and unleashed.
          </span>
        </div>
        <div className="itemList">
          <div data-aos="fade-up" data-aos-duration="1000" className="item">
            <div className="icon">
              <img
                src="https://static.thenounproject.com/png/4351477-200.png"
                alt=""
              />
            </div>
            <span className="itemTitle">Good behaviour</span>
            <span className="itemDesc">
              Goodness and Love comes from God. We are God’s creation and his
              image. It is His plan that we turn to Him from our independent
              self or rebellious self and be connected to Him. We teach our
              students to have a good relationship with God and strive to do
              God's will in order to produce good individuals to the society.
            </span>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="item">
            <div className="icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2153/2153317.png"
                alt=""
              />
            </div>
            <span className="itemTitle">Best Education</span>
            <span className="itemDesc">
              We at St. Albert the Great School, commit ourselves to give
              every child a holistic education that will equip him/ her for
              life, by giving him/her whatever is necessary academically,
              socially, spiritually, and vocationally, to enable him/ her to
              realize his/her full human dignity and potential.
            </span>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="item">
            <div className="icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/33/33887.png"
                alt=""
              />
            </div>
            <span className="itemTitle">Quality Environment</span>
            <span className="itemDesc">
              As the saying goes, cleanliness is next to Godliness, we make it
              an utmost priority to ensure that our school environment is
              nothing short of clean. A positive learning environment
              encourages: Student confidence. High academic achievement. Good
              social skills. Positive relationships. Ability to solve problems.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
