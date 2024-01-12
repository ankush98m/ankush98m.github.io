import React, { useState, useEffect, useRef } from 'react';
import { Divider, Container, Typography, Button } from '@mui/material';
import spendCubes from "../assets/images/spendCubes.PNG";
import CodonBiotech from "../assets/images/codonBiotech.PNG";
import ARApp from "../assets/images/ARApp.png";
import harmonyHub from "../assets/images/harmonyHub.PNG";

function Projects() {
    // const [scrollY, setScrollY] = useState(0);
    const [project, setProject] = useState([
        {
            title: 'Harmony Hub',
            descrption: ' HarmonyHub redefines the way we experience and share music by introducing a novel approach to collaborative playlist curation. Unlike traditional music platforms, HarmonyHub focuses on real-time interaction, allowing users to collaboratively build and curate playlists together, transforming the act of music discovery into a social, dynamic, and engaging experience.',
            image: harmonyHub,
            technology: [],
            github: 'https://github.com/ankush98m/harmonyHub',
            link: 'https://youtu.be/XFxfRkLyJnM'
        },
        {
            title: 'Spend Cubes',
            descrption: 'A responsive website for a startup that manages and helps to audit their telecommunication and wifi bills. Professionals at Spend Cubes bring together decades of experience and expertise in telecom lifecycle management, refunds and recovery.',
            image: spendCubes,
            technology: [],
            github: 'https://github.com/ankush98m/Spend_Cubes',
            link: 'https://spendcubes.com/'
        },
        {
            title: 'Codon Biotech',
            descrption: 'Responsive Landing Page for Codon Biotech. Codon Biotech Pvt. Ltd. (CBPL) is a company incorporated v/s section 75 of Companies Act, 1956. It was established in 2007 with an aim to encourage Biotechnology related research, product development and Skill development which would lead to bridging the gap between Academics & Industry.',
            image: CodonBiotech,
            technology: [],
            github: 'https://github.com/ankush98m/Spend_Cubes',
            link: 'https://codonbiotech.vercel.app/'
        },
        {
            title: 'AR Distance Measurer App',
            descrption: 'Introducing a cutting-edge mobile application crafted using Unity and Vuforia SDK, designed to effortlessly calculate the distance between any two points. Harnessing the power of smartphone technology, this app simplifies distance measurement with precision and ease',
            image: ARApp,
            technology: [],
            github: '',
            link: ''
        },

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
        <>
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
                                                <img src={p.image} alt={p.title} className='projImg-left' />
                                            </div>
                                            <div style={{ flexDirection: 'column' }}>
                                                <Typography variant='body1' className='projectDesc-left'>{p.descrption}</Typography>
                                                <div className='leftProjBtns'>
                                                    <Button variant="contained" className="projBtn-left" href={p.link} target="_blank">
                                                        Open Project
                                                    </Button>
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

                                                    <Typography variant='body1' className='projectDesc-right'>{p.descrption}</Typography>
                                                    <div className='rightProjBtns'>
                                                        <Button variant="contained" className="projBtn-right" href={p.link} target="_blank">
                                                            Open Project
                                                        </Button>
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
                                                    <img src={p.image} alt={p.title} className='projImg-right' />
                                                </div>
                                                <div style={{ flexDirection: 'column' }}>
                                                    
                                                    <Typography variant='body1' className='projectDesc-right'>{p.descrption}</Typography>
                                                    <div className='rightProjBtns'>
                                                        <Button variant="contained" className="projBtn-right" href={p.link} target="_blank">
                                                            Open Project
                                                        </Button>
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
        </>
    )
}

export default Projects;