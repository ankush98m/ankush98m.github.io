import React, { useState, useEffect, useRef } from 'react';
import { Divider, Container, Typography, Button, Stack, Chip, Box } from '@mui/material';
import spendCubes from "../assets/images/spendCubes.PNG";
import CodonBiotech from "../assets/images/codonBiotech.PNG";
import ARApp from "../assets/images/ARApp.png";
import harmonyHub from "../assets/images/harmonyHub3.PNG";
import Chess from "../assets/images/checkmateChallenge.jpg"
import IPL from "../assets/images/IPLBayesian.PNG"
import TerraNode from "../assets/images/terranode.png"

function Projects() {
    // const [scrollY, setScrollY] = useState(0);
    const [project, setProject] = useState([
        {
            title: 'CheckMate Challenge',
            descrption: "Checkmate Challenge is a variation of the traditional chess. The Checkmate Challenge is an Android app offering bite-sized chess puzzles. Players must checkmate the king in a limited number of moves on compact boards with varying piece arrangements. With each level presenting a new challenge, it's a stimulating and strategic game for chess enthusiasts on the go.",
            image: Chess,
            technology: ['Java', 'OOPS Concepts', 'MiniMax Algorithm', 'Android Studio'],
            github: 'https://github.com/ankush98m/CheckmateChallenge',
            link: ''
        },
        {
            title: 'TerraNode',
            descrption: "A cloud-based web application hosted on AWS, developed using Node.js and managed with Terraform. Key features include hosting on EC2 instances with auto-scaling and load balancing, PostgreSQL on RDS for database management, and S3 for storing user profile images. CloudWatch monitors API logs, triggers alarms for auto-scaling, and Lambda functions handle email verification via pub/sub on account creation. The application ensures security with SSL certificates, KMS-managed encryption, and utilizes CI/CD pipelines to automate testing and deployment, including updating EC2 instances with new AMI images.",
            image: TerraNode,
            technology: ['JavaScript', 'Node.js', 'TerraForm', 'AWS', 'Shell'],
            github: 'https://github.com/maheshwari-ank/CheckmateChallenge',
            link: ''
        },
        {
            title: 'IPL Data Analysis',
            descrption: 'Analyzed IPL cricket data using Bayesian simulation and Markov Chain Monte Carlo to identify factors affecting team winning probabilities and to evaluate bowler performance in IPL matches, recommending optimal bowlers for taking wickets based on historical data and match situations',
            image: IPL,
            technology: ['Python', 'Bayesian Simulation', 'MCMC Algorithm', 'Jupyter Notebook'],
            github: 'https://github.com/ankush98m/IPL-data-analysis',
            link: ''
        },
        {
            title: 'Harmony Hub',
            descrption: ' HarmonyHub redefines the way we experience and share music by introducing a novel approach to collaborative playlist curation. Unlike traditional music platforms, HarmonyHub focuses on real-time interaction, allowing users to collaboratively build and curate playlists together, transforming the act of music discovery into a social, dynamic, and engaging experience.',
            image: harmonyHub,
            technology: ['Typescript', 'React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'SCSS'],
            github: 'https://github.com/ankush98m/harmonyHub',
            link: 'https://youtu.be/XFxfRkLyJnM'
        },
        {
            title: 'Spend Cubes',
            descrption: 'A responsive website for a startup that manages and helps to audit their telecommunication and wifi bills. Professionals at Spend Cubes bring together decades of experience and expertise in telecom lifecycle management, refunds and recovery.',
            image: spendCubes,
            technology: ['Javascript', 'React', 'HTML5', 'CSS3', 'Google Analytics', 'Vercel'],
            github: 'https://github.com/ankush98m/Spend_Cubes',
            link: 'https://spendcubes.com/'
        },
        {
            title: 'Codon Biotech',
            descrption: 'Responsive Landing Page for Codon Biotech. Codon Biotech Pvt. Ltd. (CBPL) is a company incorporated v/s section 75 of Companies Act, 1956. It was established in 2007 with an aim to encourage Biotechnology related research, product development and Skill development which would lead to bridging the gap between Academics & Industry.',
            image: CodonBiotech,
            technology: ['Javascript', 'React', 'HTML5', 'CSS3', 'Vercel'],
            github: 'https://github.com/ankush98m/Spend_Cubes',
            link: 'https://codonbiotech.vercel.app/'
        },
        // {
        //     title: 'AR Distance Measurer App',
        //     descrption: 'Introducing a cutting-edge mobile application crafted using Unity and Vuforia SDK, designed to effortlessly calculate the distance between any two points. Harnessing the power of smartphone technology, this app simplifies distance measurement with precision and ease',
        //     image: ARApp,
        //     technology: [],
        //     github: '',
        //     link: ''
        // },

    ])
    const projRef = useRef();
    const isMinWidth600 = window.matchMedia('(min-width: 600px)').matches;

    useEffect(() => {
        const leftElements = document.getElementsByClassName('projectCard-left');
        const rightElements = document.getElementsByClassName('projectCard-right');
        const heading = document.getElementsByClassName('projHeading');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('projAnimation');
                } else {
                    entry.target.classList.remove('projAnimation');
                }
            });
        });

        const observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('projAnimation');
                } else {
                    entry.target.classList.remove('projAnimation');
                }
            });
        });

        const observer3 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('headAnimation');
                } else {
                    entry.target.classList.remove('headAnimation');
                }
            });
        });

        // Loop through elements and observe each one
        Array.from(leftElements).forEach(element => {
            observer.observe(element);
        });

        Array.from(rightElements).forEach(element => {
            observer2.observe(element);
        });

        Array.from(heading).forEach(element => {
            observer3.observe(element);
        });

        // Cleanup observer when component unmounts
        return () => {
            Array.from(leftElements).forEach(element => {
                observer.unobserve(element);
            });
            Array.from(rightElements).forEach(element => {
                observer2.unobserve(element);
            });

            Array.from(heading).forEach(element => {
                observer3.unobserve(element);
            });
        };
    }, []);



    return (
        <div id="projects">
            <div style={{
                paddingTop: '5%',
                backgroundColor: '#1F1E1F'
            }}>
                <Typography variant='h2' className='projHeading'>Projects</Typography>
                <div>
                    {
                        project.map((p, index) => (
                            (index % 2 === 0) ?
                                (
                                    <div style={{
                                        backgroundColor: 'rgba(21,20,21)',
                                    }}>
                                        <div
                                            ref={projRef}
                                            className='projectCard-left'>

                                            <div style={{ flexDirection: 'column', }}>
                                                <Typography variant='h4' sx={{
                                                    color: 'white'
                                                }}>{p.title}</Typography>
                                                {/* <Box sx={{ width: '100%', height: 'auto' }}>
                                                    <img src={p.image} alt={p.title} className='projImg-left' sx={{objectFit:'contain'}}/> 
                                                </Box> */}
                                                <Box sx={{ width: '100%', height: 'auto' }}>
                                                    {index==0 ? (<img src={p.image} alt={p.title} className='projImg-left' style={{ objectFit: 'contain' }} />) 
                                                    : (<img src={p.image} alt={p.title} className='projImg-left' />)}
                                                </Box>
                                            </div>
                                            <div style={{ flexDirection: 'column' }}>
                                                <Typography variant='body1' className='projectDesc-left'>
                                                    {p.descrption}
                                                </Typography>
                                                <Stack direction="row" spacing={1} className='skill-stack-left'>
                                                {p.technology.map((t,i)=>{
                                                    return(
                                                        
                                                            <Chip label={t} color= "primary" className="skill-chip-left" 
                                                            sx={{backgroundColor:"#8884fc"}} />
                                                        
                                                    )
                                                })}
                                                </Stack>
                                                <div className='leftProjBtns'>
                                                    {/* <Button variant="contained" className="projBtn-left" href={p.link} target="_blank">
                                                        Open Project
                                                    </Button> */}
                                                    <Button variant="contained" className="gitBtn-left" href={p.github} target="_blank">
                                                        Github
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) :
                                (
                                    isMinWidth600 ?
                                        (
                                            <div className='projectCard-right'>
                                                <div style={{ flexDirection: 'column' }}>

                                                    <Typography variant='body1' className='projectDesc-right'>
                                                        {p.descrption}</Typography>
                                                        <Stack direction="row" spacing={1} className='skill-stack-right'>
                                                            {p.technology.map((t,i)=>{
                                                                return(
                                                                    
                                                                        <Chip label={t} color= "primary" sx={{backgroundColor:"#8884fc"}}/>
                                                                    
                                                                )
                                                            })}
                                                        </Stack>
                                                    <div className='rightProjBtns'>
                                                        {/* <Button variant="contained" className="projBtn-right" href={p.link} target="_blank"> */}
                                                            {/* Open Project */}
                                                        {/* </Button> */}
                                                        <Button variant="contained" className="gitBtn-right" href={p.github} target="_blank">
                                                            Github
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div style={{ flexDirection: 'column' }}>
                                                    <Typography variant='h4' sx={{
                                                        color: 'white'
                                                    }}>{p.title}</Typography>
                                                    <img src={p.image} alt={p.title} className='projImg-right' />
                                                </div>
                                            </div>
                                        )
                                        :
                                        (
                                            <div className='projectCard-right'>

                                                <div style={{ flexDirection: 'column' }}>
                                                <Typography variant='h4' sx={{
                                                        color: 'white'
                                                    }}>{p.title}</Typography>
                                                    <img src={p.image} alt={p.title} className='projImg-right' sx={{objectFit:"contain"}}/>
                                                </div>
                                                <div style={{ flexDirection: 'column' }}>
                                                    
                                                    <Typography variant='body1' className='projectDesc-right'>{p.descrption}</Typography>
                                                    <Stack direction="row" spacing={1} className='skill-stack-right'>
                                                            {p.technology.map((t,i)=>{
                                                                return(
                                                                    <Chip label={t} color= "primary" className="skill-chip-right" sx={{
                                                                        backgroundColor:"#8884fc",
                                                                    }}/>
                                                                )
                                                            })}
                                                        </Stack>
                                                    <div className='rightProjBtns'>
                                                        {/* <Button variant="contained" className="projBtn-right" href={p.link} target="_blank">
                                                            Open Project
                                                        </Button> */}
                                                        <Button variant="contained" className="gitBtn-right" href={p.github} target="_blank">
                                                            Github
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                )
                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;