/*eslint-disable*/ import React from "react";
// nodejs library that concatenates classes
import makeStyles from "@mui/styles/makeStyles";
// core components
// import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterLinks from "../components/Footer/FooterLinks";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
// import HeaderLinks from "../components/Header/HeaderLinks";
import Parallax from "../components/Parallax/Parallax";

import indexStyle from "../styles/jss/nextjs-material-kit-pro/pages/indexStyle";
import Link from "next/link";

// // Sections for this page
import SectionProducts from "../templates/index/SectionProducts";
import SectionContributions from "../templates/index/SectionContributions";
import { Grid, List } from "@mui/material";
import Button from "../components/CustomButtons/Button";
import SectionZenn from "../templates/index/SectionZenn";
import SectionOpensource from "../templates/index/SectionOpensource";
import SectionPersonal from "../templates/index/SectionPersonal";

const useStyles = makeStyles(indexStyle as Parameters<typeof makeStyles>[0]);

export default function Index({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div className={classes.container}>
        <SectionContributions />
        <SectionOpensource />
        {/* <SectionPersonal /> */}
      </div>
    </div>
  );
}
