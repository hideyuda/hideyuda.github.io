/* eslint-disable */
import React, { useEffect, useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardHeader from "../../components/Card/CardHeader";

import projectsStyle from "../../styles/jss/nextjs-material-kit-pro/pages/sectionsSections/projectsStyle";

import ReactMarkdown from "react-markdown";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { IconButton } from "@mui/material";

const useStyles = makeStyles(projectsStyle as Parameters<typeof makeStyles>[0]);

export default function SectionPersonal({ ...rest }) {
  const classes = useStyles();

  const [expanded, setExpanded] = useState<boolean>(false);
  const [reachMarkdown, setReachMarkdown] = useState("");

  useEffect(() => {
    fetch(`/markdown/personal.md`)
      .then((m) => {
        return m.text();
      })
      .then((md) => {
        setReachMarkdown(md);
      });
  }, []);

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
              <h2 className={classes.title}>オープンソースでの経験</h2>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            {/* <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a href="https://reach-agent.com" target="_blank">
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
                </CardBody>
              </Card>
            </GridItem> */}
            <div className={classes.container}>
              {expanded ? (
                <>
                  <ReactMarkdown>{reachMarkdown}</ReactMarkdown>
                  {/* <IconButton
                    sx={{ color: "secondary" }}
                    onClick={() => setExpanded(false)}
                  >
                    <KeyboardDoubleArrowUpIcon sx={{ fontSize: "1rem" }} />
                    <span style={{ fontSize: "0.8rem" }}>閉じる</span>
                  </IconButton> */}
                </>
              ) : (
                <>
                  <ReactMarkdown>{reachMarkdown.slice(0, 500)}</ReactMarkdown>
                  {/* <IconButton
                    sx={{ color: "secondary" }}
                    onClick={() => setExpanded(true)}
                  >
                    <KeyboardDoubleArrowDownIcon sx={{ fontSize: "1rem" }} />
                    <span style={{ fontSize: "0.8rem" }}>もっと見る</span>
                  </IconButton> */}
                </>
              )}
            </div>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
