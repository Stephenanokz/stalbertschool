import React, { useRef, useState } from "react";
import "./Admission.scss";
import Banner from "../../components/Banner/Banner";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";

const Admission = () => {
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
    <div className="admission">
      <Banner
        title="Admission"
        subTitle="Come get your kid the best education"
      />
      {/* {isSent && (
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
      )} */}
      <div className="container" data-aos="zoom-in" data-aos-duration="500">
        <div className="section top">
          <div className="image">
            <img src="/img/admission1.png" alt="admission 1" />
          </div>
          <div className="textContent">
            <div className="title">
              <span className="year">2025</span>
              <span>school</span>
              <span>admission</span>
            </div>
            <div className="subtitle">
              <span>Now open</span>
              <span className="reg">for registration</span>
            </div>
            <div className="desc">
              "Discover an exceptional educational experience at St. Albert the
              Great schools. Our nurturing environment, dedicated faculty, and
              innovative programs ensure your child thrives academically and
              socially. Join our vibrant community where every student is
              encouraged to reach their full potential. Enroll your child today
              for a future of limitless possibilities."
            </div>
            <div className="buttonGroup">
              <button>Apply now</button>
              <a href="tel:6031112298">
                <button className="phone">08095396952</button>
              </a>
            </div>
          </div>
        </div>
        <div className="section bottom">
          <div data-aos="fade-up" data-aos-duration="1000" className="image">
            <img src="/img/admission3.png" alt="admission2" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="textContent"
          >
            <div className="title">Admission policy</div>
            <div className="desc">
              <p>
                To be eligible for admission into St Albert the Great College,
                the candidate must provide evidence of having finished the
                primary School. The candidate will obtain admission form and
                write the School’s entrance examination. The successful
                candidates will provide the following.
              </p>
              <ul>
                <li>
                  Submit a signed testimonial report from the former school.
                </li>
                <li>
                  Provide the photocopy of birth certificate /baptismal card.
                </li>
                <li>Submit two passport photographs.</li>
                <li>Provide Doctor’s report of physical fitness.</li>
              </ul>
            </div>
            <div className="buttonGroup">
              <button>Apply now</button>
              <a href="tel:6031112298">
                <button className="phone">08095396952</button>
              </a>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Admission;
