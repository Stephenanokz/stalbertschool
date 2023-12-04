import React, { useEffect, useRef, useState } from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CloseIcon from "@mui/icons-material/Close";

const Contact = () => {
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
    <div className="contact" id="contact">
      <div className="contactTitle">
        <span data-aos="fade-up" data-aos-duration="1000" className="title">
          Contact Us
        </span>
        <span data-aos="fade-up" data-aos-duration="1000" className="subTitle">
          For enquiries and more information about us, please reach out to us
        </span>
      </div>
      <div className="form">
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
        <form data-aos="fade-up" data-aos-duration="1000">
          <span className="title">Get in touch</span>
          <input ref={nameRef} name="name" type="text" placeholder="Name" />
          <input ref={emailRef} name="email" type="email" placeholder="Email" />
          <input
            ref={subjectRef}
            name="subject"
            type="text"
            placeholder="Subject"
          />
          <textarea
            ref={messageRef}
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          {isSending ? (
            <button disabled className="disabled">
              Sending...
            </button>
          ) : (
            <button onClick={handleSubmit}>Send</button>
          )}
        </form>
      </div>
      <div className="map"></div>
      <Link to="/contact">
        <button>
          More ways to contact us <ArrowCircleRightIcon className="icon" />{" "}
        </button>
      </Link>
    </div>
  );
};

export default Contact;
