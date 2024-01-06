import React, { useState, useEffect } from 'react';
import expCover from "../assets/images/expBG.jpeg"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Typography } from '@mui/material';
import Infosys from "../assets/images/infosys.jpg"
import Tcs from "../assets/images/tcs.jpg"
import Opentext from "../assets/images/opentext.png";
import QuaffMedia from "../assets/images/quaffMedia.png"


function Experiences() {
    const [exp, setExp] = useState([
        {
            position: 'System Engineer',
            company: 'Infosys',
            image: `${Infosys}`,
            period: 'May 2022 - September 2023',
            desc: 'Developed a responsive and dynamic digital library housing over 100 e-books and journals. This involved collaborative design and implementation of PostgreSQL database schemas. Leading a team of two, we continuously enhanced the application, introducing new features and reducing load time.',
        },
        {
            position: 'Assistant System Engineer',
            company: 'TCS',
            image: `${Tcs}`,
            period: 'January 2021 - April 2022',
            desc: 'Transformed mainframe software into a web app for a major American grocery company. Embracing test-driven development, I maximized modularity and extensively tested the application using React testing library, fortifying its reliability and performance.',
        },
        {
            position: 'Engineering Intern',
            company: 'Opentext',
            image: `${Opentext}`,
            period: 'January 2020 - June 2020',
            desc: 'Developed comprehensive Java test scripts using Selenium to ensure robust functionality, performance, and security in web applications. Using Jira, I meticulously tracked and resolved issues, significantly enhancing software quality and reliability.',
        },
        {
            position: 'Web Developer Intern',
            company: 'Quaff Media',
            image: `${QuaffMedia}`,
            period: 'May 2018 - June 2018',
            desc: 'Utilizing advanced JavaScript techniques, I introduced dynamic features such as intuitive tile selection, enhancing the overall user experience and engagement on the site and leading to a remarkable boost in the website\'s revenue generation.',
        },
    ])

    const isMinWidth = window.matchMedia('(min-width: 1199px)').matches;

    useEffect(() => {
        const elements = document.getElementsByClassName('expCard');
        const heading = document.getElementsByClassName('expHeading');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('expAnimation');
                } else {
                    entry.target.classList.remove('expAnimation');
                }
            });
        });

        const observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('headAnimation');
                } else {
                    entry.target.classList.remove('headAnimation');
                }
            });
        });

        // Loop through elements and observe each one
        Array.from(elements).forEach(element => {
            observer.observe(element);
        });

        Array.from(heading).forEach(element => {
            observer2.observe(element);
        });

        // Cleanup observer when component unmounts
        return () => {
            Array.from(elements).forEach(element => {
                observer.unobserve(element);
            });

            Array.from(heading).forEach(element => {
                observer2.unobserve(element);
            });
        };
    }, []);

    return (
        <>
            <div className='expDiv'>
                <Typography variant='h2'
                    className='expHeading'
                >Experience</Typography>
                <div style={{ marginLeft: '2%', marginRight: '1%' }}>
                    {
                        isMinWidth ? (
                            exp.map((e, index) => (
                                <div style={{ height: '50vh' }}>
                                    <List key={index} className="expCard"
                                        sx={{
                                            marginLeft: `calc(22.5%*${index})`
                                        }}>
                                        <Typography variant='h5' sx={{ color: 'snow' }}>{index + 1}. {e.period}</Typography>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar src={e.image} />
                                            </ListItemAvatar>
                                            <ListItemText sx={{
                                                color: 'white',
                                            }} primary={e.position} secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {e.company}
                                                    </Typography>
                                                    : {e.desc}
                                                </React.Fragment>}
                                            />
                                        </ListItem>

                                    </List>
                                </div>
                            ))
                        ) :
                            (
                                exp.map((e, index) => (
                                    <div style={{ height: 'auto' }}>
                                        <List key={index} className="expCard">
                                            <Typography variant='h5' sx={{ color: 'snow' }}>{index + 1}. {e.period}</Typography>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar src={e.image} />
                                                </ListItemAvatar>
                                                <ListItemText sx={{
                                                    color: 'white',
                                                }} primary={e.position} secondary={
                                                    <React.Fragment>
                                                        <Typography
                                                            sx={{ display: 'inline' }}
                                                            component="span"
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                            {e.company}
                                                        </Typography>
                                                        : {e.desc}
                                                    </React.Fragment>}
                                                />
                                            </ListItem>

                                        </List>
                                    </div>
                                ))
                            )
                    }

                </div>
            </div>
        </>
    )
}

export default Experiences;