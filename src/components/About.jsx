import React from 'react';
import Navbar from './Navbar';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
// import Collage from "../assets/images/collage1.jpg"
import photo1 from "../assets/images/collagePhoto1.jpeg"
import photo2 from "../assets/images/collagePhoto2.jpeg"
import photo3 from "../assets/images/collagePhoto4.jpeg"
import Cplusplus from "../assets/images/c++_icon.png";
import js from "../assets/images/javascript.svg";
import react from "../assets/images/react.png";
import redux from "../assets/images/redux.svg";
import mongo from "../assets/images/mongodb.png"
import express from "../assets/images/express.png";
import node from "../assets/images/node.png";
import hclogo from "../assets/images/htmlcss.jpg";
import Footer from './Footer';
import { red } from '@mui/material/colors';

function About() {
    return (
        <>
            <div className='aboutGradient'>
                <Navbar />
                <div className='aboutDiv'>
                    <div className='aboutLeft'>
                        <img src={photo1} alt="Ankush Maheshwari" />
                        <img src={photo2} alt="Ankush Maheshwari" />
                        {/* <img src={photo3} height="auto" width="200px" /> */}
                    </div>
                    <div className='aboutRight'>
                        <Typography sx={{
                            color: "#c3c0c0",
                            textAlign: 'left'
                        }}>Currently pursuing my master's at Northeastern University, I bring nearly three years of industry experience in web development to the table. I'm driven by a constant quest for knowledge, diving into intriguing technologies to further evolve my skill set. Beyond my professional endeavors, I find joy in exploring new destinations, diving into captivating video games, and prioritizing my fitness regimen during my leisure time</Typography>
                        <Typography sx={{
                            color: "#c3c0c0",
                            padding: '3% 0%'
                        }}>Here are some technical skills I am proficient</Typography>
                        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                            <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                                <img src={Cplusplus} alt="C++" className='skill-img'/>
                            </Grid>
                            <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                            <img src={js} alt="Javascript" className='skill-img'/>
                            </Grid>
                            <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                            <img src={react} alt="Reactjs" className='skill-img'/>
                            </Grid>
                            <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                            <img src={redux} alt="Redux" className='skill-img'/>
                            </Grid>
                            <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                            <img src={mongo} alt="MongoDB" className='skill-img'/>
                            </Grid>
                            <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                            <img src={express} alt="Expressjs" className='skill-img'/>
                            </Grid>
                            <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                            <img src={node} alt="Nodejs" className='skill-img'/>
                            </Grid>
                            <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
                            <img src={hclogo} alt="HTML/CSS" className='skill-img'/>
                            </Grid>
                        </Grid>

                    </div>
                </div>
                <div className='aboutEmptyDiv'>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;