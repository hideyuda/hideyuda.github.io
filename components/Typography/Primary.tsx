import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import makeStyles from "@mui/styles/makeStyles";
// core components
import styles from "../../styles/jss/nextjs-material-kit-pro/components/typographyStyle";

const useStyles = makeStyles(styles as Parameters<typeof makeStyles>[0]);

export default function Primary(props) {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={classes.defaultFontStyle + " " + classes.primaryText}>
      {children}
    </div>
  );
}

Primary.propTypes = {
  children: PropTypes.node,
};
