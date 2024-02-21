import React from "react";
import makeStyles from "@mui/styles/makeStyles";

// @mui/icons-material
import Chat from "@mui/icons-material/Chat";
import WatchLater from "@mui/icons-material/WatchLater";
import Check from "@mui/icons-material/Check";
// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import InfoArea from "../../components/InfoArea/InfoArea";

import productStyle from "../../styles/jss/nextjs-material-kit-pro/pages/landingPageSections/productStyle";

const useStyles = makeStyles(productStyle as Parameters<typeof makeStyles>[0]);

export default function SectionProduct() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>Features</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              className={classes.infoArea}
              icon={Chat}
              title="Casual Chat"
              description="カジュアルな英語を学ぶことができる！"
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Anytime Chat"
              description="会話相手がAIのため、いつでも話しかけることができ、いつでも返事が返ってくる！"
              icon={WatchLater}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              className={classes.infoArea}
              icon={Check}
              title="Correct English"
              description="英語を間違えても問題なし！AIが間違えた英語を直してくれる！"
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
