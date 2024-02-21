/* eslint-disable */
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import Icon from "@mui/material/Icon";
// @mui/icons-material
import Build from "@mui/icons-material/Build";
import Subject from "@mui/icons-material/Subject";
import FormatPaint from "@mui/icons-material/FormatPaint";
import Code from "@mui/icons-material/Code";
import Dashboard from "@mui/icons-material/Dashboard";
import Timeline from "@mui/icons-material/Timeline";
import Group from "@mui/icons-material/Group";
// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import NavPills from "../../components/NavPills/NavPills";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardHeader from "../../components/Card/CardHeader";
import Button from "../../components/CustomButtons/Button";
import Muted from "../../components/Typography/Muted";
import InfoArea from "../../components/InfoArea/InfoArea";
import Badge from "../../components/Badge/Badge";

import projectsStyle from "../../styles/jss/nextjs-material-kit-pro/pages/sectionsSections/projectsStyle";

const useStyles = makeStyles(projectsStyle as Parameters<typeof makeStyles>[0]);

export default function SectionCommunity({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.projects}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Our Community</h2>
              {/* <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your projects. Keep you user engaged by providing meaningful
                information.
              </h5> */}
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmkp-projects-section-sections"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src={
                        "https://s3.amazonaws.com/creativetim_bucket/products/217/original/opt_mk_nextjs_thumbnail.jpg?1525851474"
                      }
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/217/original/opt_mk_nextjs_thumbnail.jpg?1525851474')",
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmkp-projects-section-sections"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>Slack Community</h4>
                  </a>
                  <p
                    className={classes.description + " " + classes.marginTop20}
                  >
                    Join our Slack community and get access to more resources
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react?ref=njsmkp-projects-section-sections"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src="https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbp_react_thumbnail.jpg?1509466309"
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbp_react_thumbnail.jpg?1509466309')",
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react?ref=njsmkp-projects-section-sections"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>YouTube Channel</h4>
                  </a>
                  <p
                    className={classes.description + " " + classes.marginTop20}
                  >
                    Subscribe to our YouTube channel and get free tutorials and
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react?ref=njsmkp-projects-section-sections"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src="https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306"
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306')",
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react?ref=njsmkp-projects-section-sections"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>Twitter</h4>
                  </a>
                  <p
                    className={classes.description + " " + classes.marginTop20}
                  >
                    Follow us on Twitter and get important updates about our
                    products
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
