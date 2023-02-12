import React, { Component } from "react";
import metawees from "../../assests/images/metawees.png"
import CH from "../../assests/images/CH.jpg";
import {
  Grid,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";
class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                {/* <img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
									alt=""
								/> */}
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <Grid container>
          <Grid lg={6} md={6} sm={12} xs={12}>
            <Box
              className="experience"
              sx={{
                textAlignLast: "center",
                alignSelf: "center",
                px: { xs: 0, sm: 2 },

                margin: 2,

                marginTop: 10,
                padding: 3,
                backgroundColor: "#a6e1fa",
              }}
            >
              <Typography
                variant="h5"
                color="text.primary"
                sx={{
                  mb: 3,
                  textAlign: { xs: "center", sm: "start" },
                  mt: { xs: 1.5, sm: 0 },
                }}
              >
                <Avatar
                  alt="CH"
                  src={CH}
                  sx={{ margin: "auto", width: 100, height: 100 }}
                />
              </Typography>
              <Typography
                component="div"
                sx={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: { xm: "center", sm: "start" },
                }}
              >
                Freelancer
              </Typography>
              <Typography
                component="div"
                color="rgb(63, 86, 132)"
                sx={{
                  fontWeight: "bold",
                  textAlign: { xm: "center", sm: "start" },
                }}
              >
                Frontend Developer
              </Typography>
              <Typography
                component="div"
                color="text.secondary"
                sx={{
                  fontSize: 14,
                  color: "rgb(127, 141, 170)",
                  textAlign: { xm: "center", sm: "start" },
                }}
              >
                June 2021 - Aug 2022
              </Typography>
              <Typography
                component="div"
                color="text.secondary"
                sx={{
                  color: "rgb(127, 141, 170)",
                  paddingLeft: 3,
                  marginRight: 3,
                  textAlign: "center",
                }}
              >
                I'm working as frontend web developer to design web based admin
                dashboards for mulitple apps using React.JS, MUI, Node.js and
                some other libraries.
              </Typography>
            </Box>
            </Grid>
            <Grid lg={6} md={6} sm={12} xs={12}>
            <Box
              className="experience"
              sx={{
                textAlignLast: "center",
                alignSelf: "center",
                px: { xs: 0, sm: 2 },
                marginTop:{lg:10,md:10},
                margin: 2,
                padding: 3,
                backgroundColor: "#a6e1fa",
              }}
            >
              <Typography
                variant="h5"
                color="text.primary"
                sx={{
                  mb: 3,
                  textAlign: { xs: "center", sm: "start" },
                  mt: { xs: 1.5, sm: 0 },
                }}
              >
                <Avatar
                  alt="MetaWees"
                  src={metawees}
                  sx={{ margin: "auto", width: 100, height: 100 }}
                />
              </Typography>
              <Typography
                component="div"
                sx={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: { xm: "center", sm: "start" },
                }}
              >
                Metawees
              </Typography>
              <Typography
                component="div"
                color="rgb(63, 86, 132)"
                sx={{
                  fontWeight: "bold",
                  textAlign: { xm: "center", sm: "start" },
                }}
              >
                Full Stack Developer
              </Typography>
              <Typography
                component="div"
                color="text.secondary"
                sx={{
                  fontSize: 14,
                  color: "rgb(127, 141, 170)",
                  textAlign: { xm: "center", sm: "start" },
                }}
              >
                May 2022
              </Typography>
              <Typography
                component="div"
                color="text.secondary"
                sx={{
                  color: "rgb(127, 141, 170)",
                  paddingLeft: 3,
                  marginRight: 3,
                  textAlign: "center",
                }}
              >
              I'm still working web developer in MetaWees to create a E-Learn website using Next.JS, Node.js and some other libraries.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Experience;
