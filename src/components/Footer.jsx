import React from "react";
import { Button, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/FileDownloadOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  const resumeURL =
    "https://drive.google.com/file/d/1nZsjmgLGtHREpqs8rNxJyqk_VVqO8s0-/view?usp=drive_link";

  const sendEmail = () => {
    const emailAddress = "ankush97m@Gmail.com"; // Replace with the recipient's email address
    // const subject = '';
    // const body = 'Body of the email';

    const mailtoLink = `mailto:${emailAddress}`;

    // Open the default email client with the mailto link
    window.location.href = mailtoLink;
  };
  return (
    <div id="contact">
      <div style={{ backgroundColor: "rgba(16,21,27)" }}>
        <div className="socIcons">
          {/* <Typography variant='h4'>Follow Me on</Typography> */}
          <a href="https://github.com/ankush98m" target="_blank">
            <GitHubIcon
              sx={{
                fontSize: "2.5em !important",
                color: "#fcca46",
              }}
            />
          </a>
          <a
            href="https://www.instagram.com/ankush98m?igsh=bGg2eDV4a25jZWY0"
            target="_blank"
          >
            <InstagramIcon
              sx={{
                fontSize: "2.5em !important",
                color: "#FF005D",
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ankush-maheshwari98/"
            target="_blank"
          >
            <LinkedInIcon
              sx={{
                fontSize: "2.5em !important",
                color: "#0A66C2",
              }}
            />
          </a>
        </div>
        <div className="footerDiv">
          <div className="collaborateDiv">
            <Typography sx={{ color: "snow" }}>
              <span
                style={{
                  color: "rgba(136, 132, 255)",
                  fontWeight: "500",
                }}
              >
                Collaborate
              </span>{" "}
              <span
                style={{
                  position: "relative",
                }}
              >
                or Get in Touch with me
              </span>
            </Typography>
            <Button onClick={sendEmail}>
              <EmailIcon
                sx={{
                  fontSize: "3.5em",
                }}
              />
            </Button>
          </div>
          <div className="resumeDiv">
            <Typography sx={{ color: "snow" }}>
              <span
                style={{
                  color: "#73FBD3",
                  fontWeight: "500",
                }}
              >
                Download
              </span>{" "}
              <span
                style={{
                  position: "relative",
                }}
              >
                My Resume
              </span>
            </Typography>
            <Button>
              <a id="resumeLink" href={resumeURL} target="_blank">
                <DownloadIcon
                  sx={{
                    fontSize: "3.5em",
                    color: "#1976d2",
                  }}
                />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
