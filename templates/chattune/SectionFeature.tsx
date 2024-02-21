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

export default function SectionFeature() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>Features</h2>
          {/* <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5> */}
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Chat with GPT"
              description="You can use GPT in Slack to generate text, answer questions, and summarize documents. It's a great way to get started to work with GPT"
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              className={classes.infoArea}
              icon={WatchLater}
              title="Long Memory"
              description="You can make GPT remember things for you. It's a great way to get started to work with GPT"
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              className={classes.infoArea}
              icon={Check}
              title="Always Free"
              description="You can use GPT and long memory function for free. It's a great way to get started to work with GPT"
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
