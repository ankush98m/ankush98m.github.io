import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Projects', 'Experience', 'Contact'];



function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
       
        <div className="topNav">
            {navItems.map((item) => (
                <ScrollLink
                    key={item}
                    to={item.toLowerCase()} 
                    smooth={true}
                    duration={500}
                    offset={-70} 
                >
                    <Button className='navBtns'>{item}</Button>
                </ScrollLink>
            ))}
        </div>
    );
}

export default Navbar;