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

const useStyles = makeStyles(projectsStyle as Parameters<typeof makeStyles>[0]);

export default function SectionCommitingProducts({ ...rest }) {
  const classes = useStyles();

  const prs = [
    {
      id: 1,
      title: "TheAlgorithms/Go",
      url: "https://github.com/TheAlgorithms/Go/pull/624",
    },
    {
      id: 2,
      title: "remdis/remdis",
      url: "https://github.com/remdis/remdis/pull/2",
    },
    {
      id: 3,
      title: "kunishou/databricks-dolly-15k-ja",
      url: "https://github.com/kunishou/databricks-dolly-15k-ja/pull/27"
    }
  ];
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
              <h2 className={classes.title}>OSSへのPR</h2>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            {prs.map((pr) => (
              <GridItem xs={12} sm={4} md={4} key={pr.id}>
                <a href={pr.url} target="_blank" rel="noopener noreferrer">
                  <Card plain className={classes.card2}>
                    <CardHeader image plain>
                      <img
                        src={`https://gh-card.dev/repos/${pr.title}.svg`}
                        alt="github"
                        sizes="sm"
                      />
                    </CardHeader>
                    <CardBody plain>
                    </CardBody>
                  </Card>
                </a>
              </GridItem>
            ))}
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
