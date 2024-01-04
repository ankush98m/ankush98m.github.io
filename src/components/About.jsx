import React from 'react';
import Navbar from './Navbar';
import { Button, Typography } from '@mui/material';
// import Collage from "../assets/images/collage1.jpg"
import photo1 from "../assets/images/collagePhoto1.jpeg"
import photo2 from "../assets/images/collagePhoto2.jpeg"
import photo3 from "../assets/images/collagePhoto4.jpeg"
import Footer from './Footer';

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
                        <Typography>Id Lorem Lorem nulla proident deserunt pariatur pariatur eu ut aliquip. Irure enim laboris
                            velit culpa velit id do. Dolor ullamco aliqua cupidatat sint ut magna veniam nulla adipisicing
                            deserunt.</Typography>
                            <Typography>Id Lorem Lorem nulla proident deserunt pariatur pariatur eu ut aliquip. Irure enim laboris
                            velit culpa velit id do. Dolor ullamco aliqua cupidatat sint ut magna veniam nulla adipisicing
                            deserunt.</Typography>
                            <Typography>Id Lorem Lorem nulla proident deserunt pariatur pariatur eu ut aliquip. Irure enim laboris
                            velit culpa velit id do. Dolor ullamco aliqua cupidatat sint ut magna veniam nulla adipisicing
                            deserunt.</Typography>
                            <Typography variant='h6'>Skiils</Typography>
                            <div></div>
                    </div>
                </div>
                <div className='aboutEmptyDiv'>
                    
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default About;