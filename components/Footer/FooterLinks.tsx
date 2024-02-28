/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import Link from "next/link";

import makeStyles from "@mui/styles/makeStyles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

// import styles from "../../styles/jss/nextjs-material-kit-pro/components/FooterStyle";
import styles from "../../styles/jss/nextjs-material-kit-pro/components/footerLinksStyle";

import Button from "../../components/CustomButtons/Button";

const useStyles = makeStyles(styles as Parameters<typeof makeStyles>[0]);

export default function FooterLinks(props: any) {
  // const easeInOutQuad = (t, b, c, d) => {
  //   t /= d / 2;
  //   if (t < 1) return (c / 2) * t * t + b;
  //   t--;
  //   return (-c / 2) * (t * (t - 2) - 1) + b;
  // };

  // const smoothScroll = (e, target) => {
  //   if (window.location.pathname === "/sections") {
  //     letisMobile = navigator.userAgent.match(
  //       /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
  //     );
  //     if (isMobile) {
  //       // if we are on mobile device the scroll into view will be managed by the browser
  //     } else {
  //       e.preventDefault();
  //       lettargetScroll = document.getElementById(target);
  //       scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
  //     }
  //   }
  // };
  // const scrollGo = (element, to, duration) => {
  //   letstart = element.scrollTop,
  //     change = to - start,
  //     currentTime = 0,
  //     increment = 20;

  //   letanimateScroll = function () {
  //     currentTime += increment;
  //     letval = easeInOutQuad(currentTime, start, change, duration);
  //     element.scrollTop = val;
  //     if (currentTime < duration) {
  //       setTimeout(animateScroll, increment);
  //     }
  //   };
  //   animateScroll();
  // };
  // let onClickSections = {};

  // const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <div>
      <div className={classes.left}>
        <List className={classes.list}>
          <ListItem className={classes.inlineBlock}>
            <a href="/" className={classes.block}>
              Home
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a href="/#products" className={classes.block}>
              Products
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a href="/contact" className={classes.block}>
              Contact
            </a>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <a href="/privacy-policy" className={classes.block}>
              Privacy Policy
            </a>
          </ListItem>
        </List>
      </div>
      <div className={classes.left}>
        <List className={classes.list}>
          <Button
            color="youtube"
            justIcon
            simple
            target="_blank"
            href="https://www.youtube.com/@hideyuda"
          >
            <i className="fab fa-youtube" />
          </Button>
          <Button
            color="github"
            justIcon
            simple
            target="_blank"
            href="https://github.com/hidenari-yudaInc"
          >
            <i className="fab fa-github" />
          </Button>
          <Button
            justIcon
            simple
            target="_blank"
            href="https://note.com/hideyuda"
          >
            <img src="/img/note.svg" alt="note" />
          </Button>
          {/* <Button justIcon simple href="https://x.com/hidenari-yudajp">
            <img src="/img/x.svg" alt="x" />
          </Button> */}
          {/* <Button
            justIcon
            simple
            target="_blank"
            href="https://zenn.dev/hidenari-yuda"
          >
            <img src="/img/zenn.svg" alt="zenn" />
          </Button> */}
          {/* <Button
            color="instagram"
            justIcon
            simple
            href="https://instagram.com/hidenari-yuda.jp"
          >
            <i className="fab fa-instagram" />
          </Button> */}
          {/* <Button
            color="linkedin"
            justIcon
            simple
            href="https://linkedin.com/company/hidenari-yuda_jp"
          >
            <i className="fab fa-linkedin" />
          </Button> */}
          {/* <Button
            color="facebook"
            justIcon
            simple
            href="https://facebook.com/hidenari-yuda"
          >
            <i className="fab fa-facebook" />
          </Button> */}
          {/* <Button
            color="medium"
            justIcon
            simple
            href="https://medium.com/@space.ai"
          >
            <i className="fab fa-medium" />
          </Button> */}
        </List>
      </div>
      <div className={classes.right}>
        &copy; {new Date().getFullYear()} , All rights reserved by Hidenari Yuda
      </div>
    </div>
  );
}

FooterLinks.defaultProps = {
  hoverColor: "primary",
};

FooterLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]),
};
