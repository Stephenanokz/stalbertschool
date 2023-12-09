import React from "react";
import "./PortalSec.scss";
import Banner from "../../components/Banner/Banner";

const PortalSec = () => {
  return (
    <div className="PortalSec">
      <Banner title="College Portal" subTitle="St. Albert the great schools" />
      <div className="container">
        <div className="cardList">
          <div className="portalItem admin">
            <img src="https://ik.imagekit.io/verbum0179/v0/b/stalbertschool-351e8.appspot.com/o/imgs%2F128-1280822_check-mark-box-clip-art-blue-admin-icon.png?alt=media&token=8f132460-9352-4f99-8a4c-8fb6a9d868b3" alt="" />
            <span className="portalText">Admin Login</span>
            <a href="https://stalbertthegreatschools.ng/login000/alogin.php" target="_blank">
              <button className="portalButton">Open</button>
            </a>
          </div>
          <div className="portalItem teacher">
            <img src="https://ik.imagekit.io/verbum0179/v0/b/stalbertschool-351e8.appspot.com/o/imgs%2F4195.png?alt=media&token=2c4f919f-7536-467b-92bb-2d60c3334ff1" alt="" />
            <span className="portalText">Teacher's Login</span>
            <a href="https://stalbertthegreatschools.ng/login000/tlogin.php" target="_blank">
              <button className="portalButton">Open</button>
            </a>
          </div>
          <div className="portalItem bursary">
            <img src="https://ik.imagekit.io/verbum0179/v0/b/stalbertschool-351e8.appspot.com/o/imgs%2Feducation-money-college-tuition-graduation-scholarship-education-investment-gold-coins-academic-cap-diploma-vector-concept-135971289.jpg?alt=media&token=e7087f66-7b8c-4705-bedf-084840f42ced" alt="" />
            <span className="portalText">Bursary Login</span>
            <a href="https://stalbertthegreatschools.ng/login000/aalogin.php" target="_blank">
              <button className="portalButton">Open</button>
            </a>
          </div>
          <div className="portalItem student">
            <img src="https://ik.imagekit.io/verbum0179/v0/b/stalbertschool-351e8.appspot.com/o/imgs%2Fcartoon-girl-student-character-drawing-illustration-clipart-kawaii_51194-277.avif?alt=media&token=91947366-5dee-4e7b-b20c-ba3287df7fa1" alt="" />
            <span className="portalText">Students' Login</span>
            <a href="https://stalbertthegreatschools.ng/login000/slogin.php" target="_blank">
              <button className="portalButton">Open</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortalSec;
