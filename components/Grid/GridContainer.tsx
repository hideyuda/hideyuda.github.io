import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

import makeStyles from "@mui/styles/makeStyles";
import Grid from "@mui/material/Grid";

const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto",
  },
};

const useStyles = makeStyles(styles as Parameters<typeof makeStyles>[0]);

export default function GridContainer(props: any) {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: "",
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  justifyContent: PropTypes.string,
  style: PropTypes.object,
};
