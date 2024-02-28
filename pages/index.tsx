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
import { List } from "@mui/material";
import Button from "../components/CustomButtons/Button";
import SectionZenn from "../templates/index/SectionZenn";

const useStyles = makeStyles(indexStyle as Parameters<typeof makeStyles>[0]);

export default function Index({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Parallax>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h2 className={classes.title}>Hidenari Yuda / 湯田英也</h2>
              <h4>
                大阪府出身。同志社大学在学中。
                <br />
                2022年2月から2024年2月現在までアンドイーズ株式会社でエンジニアとしてインターンをしております。
                <br />
                サッカーとプログラミングが好きです。
              </h4>
              <List className={classes.list}>
                <Button
                  color="github"
                  justIcon
                  simple
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/hidenari-yuda"
                >
                  <i className="fab fa-github" />
                </Button>
                {/* <Button
                  color="youtube"
                  justIcon
                  simple
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/@hideyuda"
                >
                  <i className="fab fa-youtube" />
                </Button> */}
                <Button
                  color="linkedin"
                  justIcon
                  simple
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/hidenari-yuda"
                >
                  <i className="fab fa-linkedin" />
                </Button>
                <Button
                  color="facebook"
                  justIcon
                  simple
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/hideyuda"
                >
                  <i className="fab fa-facebook" />
                </Button>
                {/* <Button
                  justIcon
                  simple
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://x.com/hideyudajp"
                >
                  <img src="/img/x.svg" alt="x" />
                </Button>
                <Button
                  justIcon
                  simple
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://note.com/hideyuda"
                >
                  <img src="/img/note.svg" alt="note" />
                </Button> */}
                <Button
                  justIcon
                  simple
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://zenn.dev/hidenari_yuda"
                >
                  <img src="/img/zenn.svg" alt="zenn" />
                </Button>
              </List>
              <br />
              <div style={{ display: "flex" }}>
                <Link href="/#zenn">
                  <a
                    style={{
                      alignItems: "center",
                      color: "#000",
                      backgroundColor: "#fff",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      display: "inline-flex",
                      fontFamily: "Lato, sans-serif",
                      fontSize: "16px",
                      fontWeight: "600",
                      height: "56px",
                      justifyContent: "center",
                      textDecoration: "none",
                      width: "296px",
                      marginRight: "16px",
                    }}
                  >
                    技術ブログ
                  </a>
                </Link>
                <Link href="/#contributions">
                  <a
                    style={{
                      alignItems: "center",
                      color: "#000",
                      backgroundColor: "#fff",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      display: "inline-flex",
                      fontFamily: "Lato, sans-serif",
                      fontSize: "16px",
                      fontWeight: "600",
                      height: "56px",
                      justifyContent: "center",
                      textDecoration: "none",
                      width: "296px",
                    }}
                  >
                    インターンシップでの開発経験
                  </a>
                </Link>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.container}>
        {/* <SectionProducts id="products" /> */}
        <SectionZenn id="zenn" />
        <SectionContributions id="contributions" />
      </div>
      {/* <Footer content={<FooterLinks />} /> */}
    </div>
  );
}
