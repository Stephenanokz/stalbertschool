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
              alt="school"
            />
          </div>
          <div className="right">
            <span data-aos="fade-up" data-aos-duration="1000">
            "{aboutItem?.principalQuote}"
            </span>
            <div data-aos="fade-up" data-aos-duration="1000" className="author">
              <img
                src={aboutItem?.principalImgHome}
                alt="principal"
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
            src="https://ik.imagekit.io/verbum0179/v0/b/stalbertschool-351e8.appspot.com/o/imgs%2Fcomputer-laptop-technology-icon-10.png?alt=media&token=2cc41e86-9ba7-4abf-b303-47fa6016f1ea"
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
            src="https://ik.imagekit.io/verbum0179/v0/b/stalbertschool-351e8.appspot.com/o/imgs%2F1757b57a573e02a.jpg?alt=media&token=c18275b2-2327-4f4b-9383-e9f602180fa9"
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
            src="https://ik.imagekit.io/verbum0179/v0/b/stalbertschool-351e8.appspot.com/o/imgs%2F338-3382994_humor-erlenmeyer-flask-clipart-small-hd-png-download.png?alt=media&token=4aa7d15b-c3dd-4bbf-8714-1825daf58b07"
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
            src="https://ik.imagekit.io/verbum0179/v0/b/stalbertschool-351e8.appspot.com/o/imgs%2F260-2604481_building-clipart-black-and-white-building-clip-art.png?alt=media&token=b21346de-1940-4088-b3b2-c71009c8bbc9"
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
                src="https://ik.imagekit.io/verbum0179/v0/b/stalbertschool-351e8.appspot.com/o/imgs%2F4351477-200.png?alt=media&token=8972ef71-1261-4a09-ac3d-8de0a9cd8786"
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
                src="https://ik.imagekit.io/verbum0179/v0/b/stalbertschool-351e8.appspot.com/o/imgs%2F2153317.png?alt=media&token=76493dae-48d2-46f0-861b-791fb2986211"
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
                src="https://ik.imagekit.io/verbum0179/v0/b/stalbertschool-351e8.appspot.com/o/imgs%2F33887.png?alt=media&token=4352c0bf-e781-4c3c-b2ce-105a4bfa1e51"
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
