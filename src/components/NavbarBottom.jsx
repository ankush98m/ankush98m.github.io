import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Link as ScrollLink } from "react-scroll";
import { Home, Person, Work, School, ContactMail } from "@mui/icons-material";

const drawerWidth = 240;
const navItems = [
  { name: "Home", icon: <Home /> },
  { name: "About", icon: <Person /> },
  { name: "Projects", icon: <School /> },
  { name: "Experience", icon: <Work /> },
  { name: "Contact", icon: <ContactMail /> },
];

function NavbarBottom(props) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // You can change 100 to any scroll threshold
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`bottomNav ${isSticky ? "sticky" : ""}`}>
      {navItems.map((item) => (
        <ScrollLink
          key={item}
          to={item.name.toLowerCase()}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <Button className="navBtns">
            {item.icon} {/* Display the icon */}
          </Button>
        </ScrollLink>
      ))}
    </div>
  );
}

export default NavbarBottom;
