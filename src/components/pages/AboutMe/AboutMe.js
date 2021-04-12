import React from "react";
import "./AboutMe.scss";

// import CirclePhoto from "../../Images/circle_pic.jpg";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="profile-info">
        <h2 id="profile-name">Christopher Yourth</h2>
        <h4 id="profile-position">
          Junior Full Stack Developer, located in Calgary, AB.
        </h4>
        <div className="profile info">
          <div id='profile-aboutme'>
            <p>Hello, I am Chris,</p>
            {/* <br/><br/> */}
            <p>and I am a recent graduate from the Web Development program at Lighthouse Labs and am looking to get into the industry of programming.</p>
            {/* <br/><br/> */}
            I am originally from Deep River, Ontario, a small town built house the Scientists and Engineers for the Nuclear Research Facility in the neighbouring town. Thus, my love for science and technology has been heavily influenced by the strong culture in Deep River. 
            <div id='profile-aboutme2'>
              <p>Post Highschool, I pursued a degree in Chemistry and Mathematics at St. Francis Xavier University where I went on to work as a Research Chemist for a Nanotechnology start-up called Sona Nanotech. </p>
              <p>Due to the pandemic I was let go from that position and began searching for other Chemistry jobs. In my freetime I found myself rereading old Computer Science texts from classes I'd taken in school. With little luck finding a job during the first few months of the pandemic I decided to go back to school and try my hand at programming.</p>

              <p>...And that leads me to now, having taken a coding bootcamp and working on new and exciting projects, I am ready to gain experience and learn from Senior Developers to pursue my career in Programming.</p>
            </div>
          </div>
        </div>
      </div>
      <img id="pfp"></img>
    </div>
  );
};

export default AboutMe;


