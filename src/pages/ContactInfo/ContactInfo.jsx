import React, { useEffect, useRef, useState } from "react";
import "./ContactInfo.scss";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Banner from "../../components/Banner/Banner";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";

const ContactInfo = () => {
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
  });

  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;

    try {
      setIsSending(true);
      const res = await axiosInstance.post(
        "contactmails",
        { name, email, subject, message },
        {
          headers: {
            token: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
          },
        }
      );
      res.data && setIsSent(true);
    } catch (error) {
      console.log(error);
    }
    setIsSending(false);
  };

  return (
    <div className="contactInfo">
      <Banner title="Our Contact" subTitle="For enquiries and more info" />
      {isSent && (
        <div className="successOverlay">
          <div className="successModal">
            <CloseIcon
              className="modalIcon"
              onClick={() => {
                setIsSent(false);
              }}
            />
            <div className="message">
              <span className="top">Thank you for your submission!</span>
              <span className="bottom">
                We've received your enquiry/complaint and will be in touch
                shortly.
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="container" data-aos="zoom-in" data-aos-duration="1000">
        <div className="contactDetails">
          <div className="contactDetailsContainer">
            <div className="contactDetailsTitle">
              <span className="title">Contact information</span>
              <span className="subtitle">
                Fill up the form and our team would get back to you within 24
                hours.
              </span>
            </div>
            <div className="contactDetailsInfo">
              <div className="phone">
                <CallIcon className="icon" />
                <span>08095396952, 08035469696</span>
              </div>
              <div className="mail">
                <MailOutlineIcon className="icon" />
                info@stalbertthegreatschools.ng
              </div>
              <div className="address">
                <LocationOnIcon className="icon" />
                No 24 Enugu Ozalla street, P.M.B 1010 Odume-Obosi Anambra state,
                Nigeria.
              </div>
              <div className="workingHours">
                <AccessTimeIcon className="icon" />
                Monday-Friday; 8:00AM - 5:00PM
              </div>
            </div>
            <div className="contactDetailsSocials">
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
        <div className="contactForm">
          <form>
            <div className="formInputs">
              <input
                ref={nameRef}
                name="name"
                type="text"
                placeholder="Full name"
              />
              <input
                ref={emailRef}
                name="email"
                type="email"
                placeholder="Email"
              />
              <input
                ref={subjectRef}
                name="subject"
                type="text"
                placeholder="Subject"
              />
              <textarea
                ref={messageRef}
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Your message here"
              ></textarea>
            </div>
            {isSending ? (
              <button disabled className="disabled">
                Sending...
              </button>
            ) : (
              <button onClick={handleSubmit}>Send</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
