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


function Experiences() {
    const [exp, setExp] = useState([
        {
            position: 'System Engineer',
            company: 'Infosys',
            image: `${Infosys}`,
            period: 'May 2022 - September 2023',
            desc: 'Commodo cupidatat proident in culpa. Labore ad veniam sit do. Dolore eu ex minim ad sint laboris nisi reprehenderit ut mollit ullamco dolore ex duis. Commodo dolore consectetur do aliqua sit dolor.',
        },
        {
            position: 'System Engineer',
            company: 'Infosys',
            image: `${Infosys}`,
            period: 'May 2022 - September 2023',
            desc: 'Commodo cupidatat proident in culpa. Labore ad veniam sit do. Dolore eu ex minim ad sint laboris nisi reprehenderit ut mollit ullamco dolore ex duis. Commodo dolore consectetur do aliqua sit dolor. Anim occaecat reprehenderit consequat dolore id aliqua ex nulla eiusmod.',
        },
        {
            position: 'System Engineer',
            company: 'Infosys',
            image: `${Infosys}`,
            period: 'May 2022 - September 2023',
            desc: 'Commodo cupidatat proident in culpa. Labore ad veniam sit do. Dolore eu ex minim ad sint laboris nisi reprehenderit ut mollit ullamco dolore ex duis. Commodo dolore consectetur do aliqua sit dolor. Anim occaecat reprehenderit consequat dolore id aliqua ex nulla eiusmod.',
        },
        {
            position: 'System Engineer',
            company: 'Infosys',
            image: `${Infosys}`,
            period: 'May 2022 - September 2023',
            desc: 'Commodo cupidatat proident in culpa. Labore ad veniam sit do. Dolore eu ex minim ad sint laboris nisi reprehenderit ut mollit ullamco dolore ex duis. Commodo dolore consectetur do aliqua sit dolor. Anim occaecat reprehenderit consequat dolore id aliqua ex nulla eiusmod.',
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