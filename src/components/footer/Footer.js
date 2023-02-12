import React from "react";
import Avatar from "@mui/material/Avatar";
import im from "../../assests/images/my.jpg";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Avatar
        alt="Remy Sharp"
        src={im}
        sx={{ margin: "auto", width: 120, height: 120 }}
      />
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.title}
          <p>2023</p>
        </p>

        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
