import React from 'react';
// import CoverImage from "../assets/images/coverPhoto2.jpeg"

import { Typography } from '@mui/material';
// import List from '@mui/material/List';
// import ListItemText from '@mui/material/ListItemText';
import { useScroll, motion} from "framer-motion";
import CircleIcon from '@mui/icons-material/Circle';
import Navbar from './Navbar';
import Projects from './Projects';
// import Experiences from './Experiences';
// import Footer from './Footer';

function Home() {
    const { scrollYProgress } = useScroll();
    return (
        <>
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />

            <div className='container-fluid'>

                <div className='coverGradient' >
                    <Navbar />
                    <Typography variant='h3' className='coverHeading' 
                    style={{
                        position: 'relative', 
                        color: '#1b1b1b'
                    }}>Hi, I am <span id="headingSpan" style={{
                        color: 'snow'
                    }}>Ankush Maheshwari</span></Typography>
                    <div className='coverList'>
                        <span id="webDiv" style={{ display: 'flex'}}>
                            <CircleIcon className="circle-icon" sx={{ position: 'relative' }} />
                            <div id="webList">
                                <span style={{'--i': 1}}>W</span>
                                <span style={{'--i': 2}}>E</span>
                                <span style={{'--i': 3}}>B</span>
                                <span>&nbsp;</span>
                                {/* <span style={{'--i': 4}}> </span> */}
                                <span style={{'--i': 4}}>D</span>
                                <span style={{'--i': 5}}>E</span>
                                <span style={{'--i': 6}}>V</span>
                                <span style={{'--i': 7}}>E</span>
                                <span style={{'--i': 8}}>L</span>
                                <span style={{'--i': 9}}>O</span>
                                <span style={{'--i': 10}}>P</span>
                                <span style={{'--i': 11}}>E</span>
                                <span style={{'--i': 12}}>R</span>
                            </div>
                        </span>
                        <span id="softwareDiv" style={{ display: 'flex'}}>
                            <CircleIcon className="circle-icon" sx={{ position: 'relative' }} />
                            <div id="softwareList">
                                <span style={{'--i': 1}}>S</span>
                                <span style={{'--i': 2}}>O</span>
                                <span style={{'--i': 3}}>F</span>
                                <span style={{'--i': 4}}>T</span>
                                <span style={{'--i': 5}}>W</span>
                                <span style={{'--i': 6}}>A</span>
                                <span style={{'--i': 7}}>R</span>
                                <span style={{'--i': 8}}>E</span>
                                <span>&nbsp;</span>
                                <span style={{'--i': 9}}>D</span>
                                <span style={{'--i': 10}}>E</span>
                                <span style={{'--i': 11}}>V</span>
                                <span style={{'--i': 12}}>E</span>
                                <span style={{'--i': 13}}>L</span>
                                <span style={{'--i': 14}}>O</span>
                                <span style={{'--i': 15}}>P</span>
                                <span style={{'--i': 16}}>E</span>
                                <span style={{'--i': 17}}>R</span>
                            </div>
                        </span>
                    </div>


                </div>
            </div>

            <Projects />
            {/* <Experiences />
            <Footer /> */}
        </>
    )
}

export default Home;