import React, { useState, useEffect } from "react";
import {
  Divider,
  Container,
  Typography,
  Button,
  Textarea,
  Avatar,
  Paper,
  styled,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

function Recommendations() {
  const user = {
    Name: "Professor Iris Berent - Northeastern University",
    Recommendation:
      "\"In what follows, I am pleased to offer a warm professional reference for Mr. Ankush Maheshwari. Ankush has volunteered in my lab for the past four months over the summer of 2024. In this capacity, Ankush has helped develop, program, and test two psychological experiments. I have had the good fortune of interacting with him closely, and I can thus attest to his qualifications. Ankush is a bright and competent individual with an impeccable work ethic and careful attention to detail. He has completed every assignment in the best possible way, always delivered the results on time, and offered lots of valuable feedback on the project. In addition, Ankush strikes me as a kind, pleasant person who is a pleasure to work with. I believe Ankush will be a valuable asset to any future team. If I had the means to hire him, I would have kept him in my lab. I thus recommend him to you strongly and without reservation.\"",
  };

  const [startTyping, setStartTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  const typingSpeed = 10; // Adjust typing speed (milliseconds per character)

  useEffect(() => {
    // const elements = document.getElementsByClassName('expCard');
    const heading = document.getElementsByClassName("recommendationHeading");

    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("headAnimation");
            // setStartTyping(true);
          }
        });
      },
    );

    Array.from(heading).forEach((element) => {
      observer2.observe(element);
    });

    // Cleanup observer when component unmounts
    return () => {
      Array.from(heading).forEach((element) => {
        observer2.unobserve(element);
      });
    };
  }, []);

  useEffect(() => {
    if (startTyping) {
      let index = 0;
      setTypedText(""); 
  
      const interval = setInterval(() => {
        setTypedText((prev) => prev + user.Recommendation.charAt(index));
        index++;
        if (index >= user.Recommendation.length) {
          clearInterval(interval);
        }
      }, typingSpeed);
  
      return () => clearInterval(interval);
    }
  }, [startTyping]);
  
  return (
    <div
      id="recommendations"
      style={{
        paddingTop: "5%",
        backgroundColor: "rgb(21, 20 ,21)",
      }}
    >
      <Typography variant="h2" className="recommendationHeading">
        Recommendations
      </Typography>
      <div className="recommendationContainer">
        <Avatar
          className="userProfileIcon"
          style={{ backgroundColor: "white", color: "black" }}
        >
          {user.Name.charAt(10)}
        </Avatar>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography style={{ color: "white", textAlign: "left" }}>
            {user.Name},
          </Typography>
          <p style={{ color: "white", textAlign: "left", color: "#c3c0c0" }}>
            {user.Recommendation}
            {/* {typedText} */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
