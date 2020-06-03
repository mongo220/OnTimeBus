import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";
import ListItem from "@material-ui/core/ListItem";

import foto1 from "assets/img/icon.png";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const a = <div class=""><Button color="red"></Button></div>
  const sobre = <ListItem className={classes.listItem}>
    <Button
      color="transparent"
      href="../sobre/Sobre.js"
      className={classes.navLink}
    >
      Sobre
                  </Button>
  </ListItem>
  return (
    <div>
      <Header
        brand="OnTimeBus"
        rightLinks={<HeaderLinks />}
        leftLinks={sobre}
        fixed
        color="dark"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg-bus.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <div class="row">
                <div class="col-lg-10">
                  <div className={classes.brand}>
                    <h1 className={classes.title}>OnTimeBus</h1>
                  </div>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={2}>
            </GridItem>
            <GridItem xs={12} sm={2}>
            </GridItem>
            <GridItem xs={12} sm={2}>
            </GridItem>
            <GridItem xs={12} sm={1}>
            </GridItem>
            <GridItem xs={15} sm={2}>
              <img
                src={foto1}
                alt="..."
                style={{ width: "150px" }, { height: "150px" }}
              />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div>
            <div>
              <h2></h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
