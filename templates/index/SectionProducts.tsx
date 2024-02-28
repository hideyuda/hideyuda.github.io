/* eslint-disable */
import React, { useEffect } from "react";
import makeStyles from "@mui/styles/makeStyles";
// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardHeader from "../../components/Card/CardHeader";

import projectsStyle from "../../styles/jss/nextjs-material-kit-pro/pages/sectionsSections/projectsStyle";
import Link from "next/link";

const useStyles = makeStyles(projectsStyle as Parameters<typeof makeStyles>[0]);

import ReactMarkdown from "react-markdown";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";

export default function SectionProducts({ ...rest }) {
  const classes = useStyles();

  const router = useRouter();

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
              <h2 className={classes.title}>個人開発 / Products</h2>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <Link href="/tubeai" target="_blank" rel="noopener noreferrer">
                  <CardHeader image plain>
                    <img src="/img/tubeai/logo.png" alt="tubeai logo" />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306')",
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                </Link>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Tube AI</h4>
                  <h4 className={classes.description}>
                    コンテンツの種類を選択するだけで、自動でキーワード選定から動画を生成するサービスです。
                  </h4>
                  <a
                    href="https://hidenari-yuda.jp/hideyuda/tubeai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton sx={{ color: "secondary" }}>
                      <KeyboardDoubleArrowRightIcon sx={{ fontSize: "1rem" }} />
                      <span style={{ fontSize: "0.8rem" }}>技術詳細を見る</span>
                    </IconButton>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Link href="/chattune" target="_blank" rel="noopener noreferrer">
                <Card plain className={classes.card2}>
                  <CardHeader image plain>
                    <img src="/img/chattune/logo.png" alt="chattune logo" />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306')",
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Chat Tune</h4>
                    <h4 className={classes.description}>
                      会話履歴から自動でリプライをサジェストするサービスです。ブラウザ拡張(Chrome)として提供しています。
                    </h4>
                    <a
                      href="https://hidenari-yuda.jp/hideyuda/tubeai"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconButton sx={{ color: "secondary" }}>
                        <KeyboardDoubleArrowRightIcon
                          sx={{ fontSize: "1rem" }}
                        />
                        <span style={{ fontSize: "0.8rem" }}>
                          技術詳細を見る
                        </span>
                      </IconButton>
                    </a>
                  </CardBody>
                </Card>
              </Link>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Link href="/expertai" target="_blank" rel="noopener noreferrer">
                <Card plain className={classes.card2}>
                  <CardHeader image plain>
                    <img src="/img/expertai/logo.png" alt="expert ai logo" />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306')",
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Expert AI</h4>
                    <h4 className={classes.description}>
                      会話履歴から自動でリプライをサジェストするサービスです。SlackAppとして提供しています。
                      <br />
                      <br />
                      Add to Slack from below
                      <br />
                      <br />
                      [@expert-ai read/ {`<your message>`}] make memo.ai save
                      information
                      <br />
                      <br />
                      [@expert-ai {`<question>`}] to answer your question from
                      saved information
                      <br />
                      <br />
                    </h4>
                    <a
                      href="https://slack.com/oauth/v2/authorize?client_id=5140938213351.5168113999441&scope=app_mentions:read,channels:history,chat:write,groups:history,im:history,mpim:history&user_scope="
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          height: "20px",
                          width: "20px",
                          marginRight: "12px",
                        }}
                        viewBox="0 0 122.8 122.8"
                      >
                        <path
                          d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z"
                          fill="#e01e5a"
                        ></path>
                        <path
                          d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z"
                          fill="#36c5f0"
                        ></path>
                        <path
                          d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z"
                          fill="#2eb67d"
                        ></path>
                        <path
                          d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z"
                          fill="#ecb22e"
                        ></path>
                      </svg>
                      Add to Slack
                    </a>
                    <a
                      href="https://hidenari-yuda.jp/hideyuda/tubeai"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconButton sx={{ color: "secondary" }}>
                        <KeyboardDoubleArrowRightIcon
                          sx={{ fontSize: "1rem" }}
                        />
                        <span style={{ fontSize: "0.8rem" }}>
                          技術詳細を見る
                        </span>
                      </IconButton>
                    </a>
                  </CardBody>
                </Card>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
