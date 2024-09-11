/*eslint-disable*/
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material
import Favorite from "@mui/icons-material/Favorite";
// core components
import Header from "../components/Header/Header";
import HeaderLinks from "../components/Header/HeaderLinks";
import Footer from "../components/Footer/Footer";
import FooterLinks from "../components/Footer/FooterLinks";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";

import errorPageStyle from "../styles/jss/nextjs-material-kit-pro/pages/errorPageStyles";
import { Button } from "@mui/material";

const useStyles = makeStyles(
  errorPageStyle as Parameters<typeof makeStyles>[0],
);

export default function ErrorPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#fff" }}>
      {/* <Header
        absolute
        color="transparent"
        links={<HeaderLinks dropdownHoverColor="dark" />}
        {...rest}
      /> */}
      <div
        className={classes.pageHeader}
        style={{
          // backgroundImage: "url('/img/clint-mckoy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        {/* <div className={classes.container}> */}
        <div className={classes.contentCenter}>
          <GridContainer>
            <GridItem md={12}>
              <h1 className={classes.title}>404</h1>
              <h2 className={classes.subTitle}>Page not found</h2>
              <Button
                href="/"
                color="primary"
                // size="lg"
                sx={{
                  size: "lg",
                }}
                // target="_blank"
                // rel="noopener noreferrer"
              >
                Return Home
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* <Footer content={<FooterLinks />} /> */}
    </div>
  );
}
