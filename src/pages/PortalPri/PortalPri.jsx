import React from "react";
import "./PortalPri.scss";
import Banner from "../../components/Banner/Banner";

const PortalPri = () => {
  return (
    <div className="PortalPri">
      <Banner title="Basic Portal" subTitle="St. Albert the great schools" />
      <div className="container">
        <div className="cardList">
          <div className="portalItem admin">
            <img src="https://www.pngitem.com/pimgs/m/128-1280822_check-mark-box-clip-art-blue-admin-icon.png" alt="" />
            <span className="portalText">Admin Login</span>
            <a href="https://stalbertthegreatschools.ng/stalbertprimaryschool/login000/alogin.php" target="_blank">
              <button className="portalButton">Open</button>
            </a>
          </div>
          <div className="portalItem teacher">
            <img src="https://illustoon.com/photo/4195.png" alt="" />
            <span className="portalText">Teacher's Login</span>
            <a href="https://stalbertthegreatschools.ng/stalbertprimaryschool/login000/tlogin.php" target="_blank">
              <button className="portalButton">Open</button>
            </a>
          </div>
          <div className="portalItem bursary">
            <img src="https://thumbs.dreamstime.com/b/education-money-college-tuition-graduation-scholarship-education-investment-gold-coins-academic-cap-diploma-vector-concept-135971289.jpg" alt="" />
            <span className="portalText">Bursary Login</span>
            <a href="https://stalbertthegreatschools.ng/stalbertprimaryschool/login000/aalogin.php" target="_blank">
              <button className="portalButton">Open</button>
            </a>
          </div>
          <div className="portalItem student">
            <img src="https://img.freepik.com/premium-vector/cartoon-girl-student-character-drawing-illustration-clipart-kawaii_51194-277.jpg" alt="" />
            <span className="portalText">Students' Login</span>
            <a href="https://stalbertthegreatschools.ng/stalbertprimaryschool/login000/slogin.php" target="_blank">
              <button className="portalButton">Open</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortalPri;
