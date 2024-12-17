import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
// import Collage from "../assets/images/collage1.jpg"
// import photo1 from "../assets/images/collagePhoto1.jpeg";
// import photo2 from "../assets/images/collagePhoto2.jpeg";
// import photo3 from "../assets/images/aboutPhoto.png";
// import photo3 from "../assets/images/collagePhoto4.jpeg"
import Python from "../assets/images/python.svg";
import js from "../assets/images/javascript.svg";
import Java from "../assets/images/Java.svg"
import Postgres from "../assets/images/Postgresql.svg"
import reactNative from "../assets/images/react-native.png"
import react from "../assets/images/react.svg";
import redux from "../assets/images/redux.svg";
import mongo from "../assets/images/mongodb.svg";
import express from "../assets/images/express.png";
import node from "../assets/images/nodejs.svg";
import aws from "../assets/images/aws.svg"
import html5 from "../assets/images/html5.svg"
import css3 from "../assets/images/css-3.svg"
import Footer from "./Footer";
import { red } from "@mui/material/colors";

function About() {
  useEffect(() => {
    // const elements = document.getElementsByClassName('expCard');
    const heading = document.getElementsByClassName("aboutHeading");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("expAnimation");
        } else {
          entry.target.classList.remove("expAnimation");
        }
      });
    });

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("headAnimation");
        } else {
          entry.target.classList.remove("headAnimation");
        }
      });
    });

    // Loop through elements and observe each one
    // Array.from(elements).forEach(element => {
    //     observer.observe(element);
    // });

    Array.from(heading).forEach((element) => {
      observer2.observe(element);
    });

    // Cleanup observer when component unmounts
    return () => {
      // Array.from(elements).forEach(element => {
      //     observer.unobserve(element);
      // });

      Array.from(heading).forEach((element) => {
        observer2.unobserve(element);
      });
    };
  }, []);
  return (
    <div id="about">
      <div className="aboutGradient">
        <Typography variant="h2" className="aboutHeading">
          About Me
        </Typography>
        <div className="aboutDiv">
          <div className="aboutLeft">
            {/* <img src={photo1} alt="Ankush Maheshwari" />
                        <img src={photo2} alt="Ankush Maheshwari" /> */}
            {/* <img src={photo3} height="auto" width="200px" /> */}
          </div>
          <div className="aboutRight">
            <Typography
              sx={{
                color: "#c3c0c0",
                textAlign: "left",
              }}
            >
              I am currently pursuing my master's degree at Northeastern
              University, I bring nearly three years of industry experience in
              web development to the table. I'm driven by a constant quest for
              knowledge, diving into intriguing technologies to further evolve
              my skill set.
              <br />
              <br />I am currently working on a family healthcare project to
              digitalize health and provide the care your family needs. This
              mobile application aims to achieve secure and easy access to your
              healthcare records, summarize your reports, and view medical
              history in one place. This app is integrated with AI chatbot so
              that you can solve your health related queries without any hassle.
              Also, monitor your health vitals like heart rate, blood pressure
              and sugar level using our data visualizations.
              <br />
              <br />
              Beyond my professional endeavors, I find joy in exploring new
              destinations, diving into captivating video games, and
              prioritizing my fitness regimen during my leisure time.
            </Typography>
            <Typography
              sx={{
                color: "#c3c0c0",
                padding: "3% 0%",
              }}
            >
              Here are some technical skills I am proficient at
            </Typography>

            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                <img src={js} alt="Javascript" className="skill-img" title="JavaScript"/>
              </Grid>
              <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                <img src={Python} alt="Python" className="skill-img" title="Python"/>
              </Grid>
              <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                <img src={react} alt="Reactjs" className="skill-img" title="React"/>
              </Grid>
              <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                <img src={reactNative} alt="React-Native" className="skill-img" title="React-Native"/>
              </Grid>
              <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                <img src={redux} alt="Redux" className="skill-img" title="Redux"/>
              </Grid>
              <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                <img src={Java} alt="Java" className="skill-img" title="Java"/>
              </Grid>
              <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                <img src={mongo} alt="MongoDB" className="skill-img" title="MongoDB"/>
              </Grid>
              <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                <img src={Postgres} alt="Postgres" className="skill-img" title="Postgres"/>
              </Grid>
              <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                <img src={express} alt="Expressjs" className="skill-img" title="Express"/>
              </Grid>
              <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                <img src={node} alt="Nodejs" className="skill-img" title="NodeJS"/>
              </Grid>
              <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                <img src={aws} alt="AWS" className="skill-img" title="AWS"/>
              </Grid>
              <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                <img src={html5} alt="HTML" className="skill-img" title="HTML5"/>
              </Grid>
              <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                <img src={css3} alt="HTML" className="skill-img" title="CSS3"/>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="aboutEmptyDiv"></div>
      </div>
    </div>
  );
}

export default About;
