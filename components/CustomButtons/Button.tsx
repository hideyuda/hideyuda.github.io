// tslint:disable-next-line: no-submodule-imports
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

import makeStyles from "@mui/styles/makeStyles";
import Button from "@mui/material/Button";

import styles from "../../styles/jss/nextjs-material-kit-pro/components/buttonStyle";

const useStyles = makeStyles(styles as Parameters<typeof makeStyles>[0]);

type Props = {
  color?: string;
  round?: boolean;
  children?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  simple?: boolean;
  size?: string;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  fileButton?: boolean;
  className?: string;
  [key: string]: any; // this is for the ...rest spread
};

const RegularButton = React.forwardRef(
  (props: Props, ref: React.Ref<HTMLButtonElement>) => {
    const {
      color,
      round,
      children,
      fullWidth,
      disabled,
      simple,
      size,
      block,
      link,
      justIcon,
      fileButton,
      className,
      ...rest
    } = props;
    const classes = useStyles();
    const btnClasses = classNames({
      [classes.button]: true,
      [classes[size]]: size,
      [classes[color]]: color,
      [classes.round]: round,
      [classes.fullWidth]: fullWidth,
      [classes.disabled]: disabled,
      [classes.simple]: simple,
      [classes.block]: block,
      [classes.link]: link,
      [classes.justIcon]: justIcon,
      [classes.fileButton]: fileButton,
      [className]: className,
    });
    return (
      <Button {...rest} ref={ref} className={btnClasses}>
        {children}
      </Button>
    );
  },
);

RegularButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "black",
    "twitter",
    "facebook",
    "google",
    "linkedin",
    "pinterest",
    "youtube",
    "tumblr",
    "github",
    "behance",
    "dribbble",
    "reddit",
    "instagram",
    "transparent",
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  fileButton: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default RegularButton;
