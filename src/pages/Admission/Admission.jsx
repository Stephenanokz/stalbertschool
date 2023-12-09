import "./Admission.scss";
import Banner from "../../components/Banner/Banner";
import Contact from "../Contact/Contact";

const Admission = () => {

  return (
    <div className="admission">
      <Banner
        title="Admission"
        subTitle="Come get your kid the best education"
      />
      <div className="container" data-aos="zoom-in" data-aos-duration="500">
        <div className="section top">
          <div className="image">
            <img src="https://ik.imagekit.io/verbum0179/v0/b/stalbertschool-351e8.appspot.com/o/imgs%2Fadmission1.png?alt=media&token=d7fcca6d-da40-47e4-8c1a-664e1bcb3cb3" alt="admission 1" />
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
            <img src="https://ik.imagekit.io/verbum0179/v0/b/stalbertschool-351e8.appspot.com/o/imgs%2Fadmission3.png?alt=media&token=d7fcca6d-da40-47e4-8c1a-664e1bcb3cb3" alt="admission2" />
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
