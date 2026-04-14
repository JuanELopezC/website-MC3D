import React from 'react';
import "./About.css";
import ImageCard from "../ImageCard.jsx";
//import AppointmentForm from "../AppointmentForm.jsx";

const About = () => {
  return (
    <div className="about-page">

      {/* WHAT IS MC3D */}
      <section className="about-section">
        <div className="container">
          
          <h2 className="section-title">Mission Statement</h2>
          <p>Our mission is to serve as a placeholder until a permanent statement is established.
          </p>
          <br></br>

          <h2 className="section-title">Our History</h2>
          <p>
            The history of MC3D at Maryville College began with independent academic and technical milestones, including a 3D-printed senior study and a 3D scan of the Covenant Stone developed by Mr. Tobby Ryan in IT. As the Mathematics and Computer Science division expanded its resources by remodeling a faculty office into a dedicated "Maker Space" in the Sutton Science Center, student engagement surged. Recognizing this momentum, faculty members Dr. Jesse Smith and Dr. Chase Worley encouraged students Megan Pogue, Anevay Nichol, and Evan Roberson to formalize their interest. Following a campus-wide awareness campaign and official approval from the Student Government Association (SGA), MC3D was established as a student organization. Today, the club serves as a collaborative hub where members master engineering and modeling software through a mix of personal creative projects and professional service, such as designing laboratory equipment for the biology department and emblems for the Scots Science Scholars.
          </p>
        </div>
      </section>

      {/* ADVISOR */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Our Advisor</h2>

          <div className="advisor-layout">
            <div className="advisor-card">
             <a href='https://www.maryvillecollege.edu/academics/faculty/jsmith/' target="_blank" title="Dr. Smith Maryville College Profile">
              <ImageCard 
                picture="https://www.maryvillecollege.edu/wp-content/uploads/EmployeePhotos/Smith_Jessie.jpg" 
                text="Dr. Jesse Smith" 
              />
            </a>
            </div>

            <div className="advisor-text">
              <p>
                I am from East Tennessee, growing up in West Knoxville. I attended
                Karns Elementary, Middle, and High School. I spent an amazing four
                years here at Maryville College earning a B.A. in both Mathematics
                and Computer Science.
              </p>
              <p>
                Graduate school took another six years at the University of Tennessee
                Knoxville where I studied Abstract Algebra under my adviser,
                Dr. David Anderson.
              </p>
              <p>
                I have been back at Maryville College as a faculty member since the
                2014–2015 academic year.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* LOCATION */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Where Are We Located?</h2>
          <p>Sutton Science Building — Second Floor — Room 208</p>

          <div className="map-container">
            <img 
              src="images/SSC_2ndFloorMap.png" 
              alt="Second Floor Map"
              className="location-map"
            />
          </div>

        </div>
      </section>

      

      <section className="about-section">
      <div className="container">
        <h2 className="section-title">Book an Appointment</h2>

        <div className="calendar-embed">
          <iframe
          /*Here is where the link of google calendar will go */
            src="https://calendar.app.google/XBiKeVCYouc339pW7"
            width="100%"
            height="700"
            frameBorder="0"
          />
        </div>
      </div>
    </section>

    </div>
    
  );
};

export default About;
