import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="left">
          <div className="title">
            <img src="/img/logo.png" alt="logo" />
            <span>St. Albert the Great</span>
          </div>
          <div className="newsletter">
            <span>Subscribe to our Newsletter to get more of our updates</span>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="right">
          <div className="links">
            <div className="title">
              <span>Quick Links</span>
            </div>
            <ul className="items">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/blog">Events</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/primary-portal">Portal (Basic)</Link>
              </li>
              <li>
                <Link to="/college-portal">Portal (College)</Link>
              </li>
            </ul>
          </div>
          <div className="info">
            <div className="title">
              <span>Contact Info</span>
            </div>
            <div className="items">
              <div className="item">
                <span className="title">Address:</span>
                <span className="desc">
                  No 24 Enugu Ozalla street, P.M.B 1010 Odume-Obosi Anambra
                  state, Nigeria.
                </span>
              </div>
              <div className="item">
                <span className="title">Email:</span>
                <span className="desc">info@stalbertthegreatschools.ng</span>
              </div>
              <div className="item">
                <span className="title">Contact Us:</span>
                <span className="desc">08095396952, 08035469696</span>
                {/* <span className="desc">08039521944, 08030614130</span> */}
              </div>
            </div>
            <div className="socials">
              <a href="" target="_blank">
                <FacebookRoundedIcon className="icon" />
              </a>
              <a href="" target="_blank">
                <InstagramIcon className="icon" />
              </a>
              <a href="" target="_blank">
                <TwitterIcon className="icon" />
              </a>
              <a href="" target="_blank">
                <WhatsAppIcon className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <span>
          {" "}
          <a href="https://notredameacademyadmin.onrender.com/" target="_blank">
            &copy;
          </a>{" "}
          2023 St. Albert the Great School . All Right Reserved
        </span>
        <span>Developed by Verbum Networks, Enugu.</span>
      </div>
    </div>
  );
};

export default Footer;
