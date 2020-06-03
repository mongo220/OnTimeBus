import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Parallax from "../../components/Parallax/Parallax.js";
import image from "assets/img/faces/avatar.jpg";
import foto1 from "assets/img/faces/fotos2/foto1.jpeg";
import foto2 from "assets/img/faces/fotos2/foto2.jpeg";
import foto3 from "assets/img/faces/foto3.jpeg";
import foto4 from "assets/img/faces/fotos2/foto4.jpeg";
import foto5 from "assets/img/faces/fotos2/foto5.jpeg";
import foto6 from "assets/img/faces/fotos2/foto6.jpeg";
import foto7 from "assets/img/faces/fotos2/foto7.jpg";
import foto8 from "assets/img/faces/fotos2/foto8.jpeg";
import foto_logo from "assets/img/icon.png";
// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import ListItem from "@material-ui/core/ListItem";

import styles from "assets/jss/material-kit-react/views/components.js";
import stylesImage from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

const useStylesImage = makeStyles(stylesImage);

export default function Components(props) {
  const classes = useStyles();
  const classesImages = useStylesImage();
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
                src={foto_logo}
                alt="..."
                style={{ width: "150px" }, { height: "150px" }}
              />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div id="images">
            <div className={classesImages.title}>
              <h2>Equipe</h2>
            </div>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={2} className={classesImages.marginLeft}>
                <img
                  src={foto1}
                  alt="..."
                  className={classesImages.imgRoundedCircle + " " + classesImages.imgFluid}
                  style={{ width: "150px" }, { height: "150px" }}
                />
              </GridItem>
              <GridItem xs={12} sm={2} className={classesImages.marginLeft}>
                <img
                  src={foto2}
                  alt="..."
                  className={classesImages.imgRoundedCircle + " " + classesImages.imgFluid}
                  style={{ width: "150px" }, { height: "150px" }}
                />
              </GridItem>
              <GridItem xs={12} sm={2} className={classesImages.marginLeft}>
                <img
                  src={foto3}
                  alt="..."
                  className={classesImages.imgRoundedCircle + " " + classesImages.imgFluid}
                  style={{ width: "150px" }, { height: "150px" }}
                />
              </GridItem>
              <GridItem xs={12} sm={2} className={classesImages.marginLeft}>
                <img
                  src={foto4}
                  alt="..."
                  className={classesImages.imgRoundedCircle + " " + classesImages.imgFluid}
                  style={{ width: "150px" }, { height: "150px" }}
                />
              </GridItem>
            </GridContainer>
            <br></br>
            <GridContainer>
              <GridItem xs={12} sm={2} className={classesImages.marginLeft}>
                <img
                  src={foto5}
                  alt="..."
                  className={classesImages.imgRoundedCircle + " " + classesImages.imgFluid}
                  style={{ width: "150px" }, { height: "150px" }}
                />
              </GridItem>
              <GridItem xs={12} sm={2} className={classesImages.marginLeft}>
                <img
                  src={foto6}
                  alt="..."
                  className={classesImages.imgRoundedCircle + " " + classesImages.imgFluid}
                  style={{ width: "150px" }, { height: "150px" }}
                />
              </GridItem>
              <GridItem xs={12} sm={2} className={classesImages.marginLeft}>
                <img
                  src={foto7}
                  alt="..."
                  className={classesImages.imgRoundedCircle + " " + classesImages.imgFluid}
                  style={{ width: "150px" }, { height: "150px" }}
                />
              </GridItem>
              <GridItem xs={12} sm={2} className={classesImages.marginLeft}>
                <img
                  src={foto8}
                  alt="..."
                  className={classesImages.imgRoundedCircle + " " + classesImages.imgFluid}
                  style={{ width: "150px" }, { height: "150px" }}
                />
              </GridItem>
            </GridContainer>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}
