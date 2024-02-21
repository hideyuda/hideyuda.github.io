import React from "react";

import makeStyles from "@mui/styles/makeStyles";

const styles = {
  clearfix: {
    "&:after,&:before": {
      display: "table",
      content: '" "',
    },
    "&:after": {
      clear: "both",
    },
  },
};

const useStyles = makeStyles(styles as Parameters<typeof makeStyles>[0]);

export default function Clearfix() {
  const classes = useStyles();
  return <div className={classes.clearfix} />;
}
