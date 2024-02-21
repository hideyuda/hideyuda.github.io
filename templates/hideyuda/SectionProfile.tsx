/* eslint-disable */
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardHeader from "../../components/Card/CardHeader";

import projectsStyle from "../../styles/jss/nextjs-material-kit-pro/pages/sectionsSections/projectsStyle";

const useStyles = makeStyles(projectsStyle as Parameters<typeof makeStyles>[0]);

export default function SectionProfile({ ...rest }) {
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
              <h2 className={classes.title}>Profile</h2>
              <h5 className={classes.description}>
                2021年2月から、株式会社Motoyuiという京都のスタートアップでエンジニアとしてインターンしております。働き始めた時で、
                {/* I've worked at a startup in Japan as an engineer and developed services for recruitment agency. Including me, member of organization are only four members now, for engineer, there are only two members. So I've developed server-side project written by Golang with echo and clean arch almost by myself, also front end (nextjs, typescript) and infrastructure (GCP). Not just learning about developing, I’ve communicated with members of sales and recruiter, and learned about HR industry, especially recruitment agency. Worked as an outsourcing though, I’ve commited hard and think I could use these experiences for your company. Other than at the company, so I've developed services personally for several years because I like to learn new things.
                Work History
                2022-02 - Current	 	Software Engineer
              Motoyui Inc, Ukyo, Kyoto 
              •	developed management services for recruitment agency from started. before this, I developed system sharing job listings and candidates.
              •	Including me, Including me, engineer teams at the company are only two members, so I've developed server-side written by Golang with echo and clean arch almost by myself, also front end (nextjs, typescript) and infra (GCP). 
              •	at the matching with job listings and candidates, it is necessary to match these spec each other and display best listing for the candidate and best candidate for the listing. I develop function scoring and sorting over 8,000 job listings and 1,000 candidates of agents from 20 items.
              •	Tried to write code and arch with safely, speedy and easily read someone else and

              
              Education
              
                2021-04 - Current	 	Bachelor of Political Science: Political Science
              Doshisha University - Kamigyo, Kyoto 
              
              Works I’ve developed
              
              Management system for recruitment agency.
              backend: go, docker
              -frontend: nextjs, typescript
              -infra: gcp(cloudrun, cloudsql, firebasehosting etc)
              -term: 8 months by 2 members
              -I developed backend with echo and clean arch by myself, also frontend and infra. It is hard to connect with Agents of LINE, which is chat tools in Japan, using API. At the matching with job listings and candidates, it is necessary to match these spec each other and display best listing for the candidate and best candidate for the listing. I develop function scoring and sorting over 8,000 job listings and 1,000 candidates of agents from 20 items.

              Buying receipt service with OCR
              -backend: go, docker
              -frontend: react
              -infra: gcp(cloudrun, cloudsql, firebasehosting etc)
              -term: 4 months by 1 member
              I'm in charge of the full stack from design to development. It takes time to develop OCR for receipts and data table assets and design. And connecting cloudrun with cloudsql also takes time to me.

              Service sharing job listing and candidates s for recruitment agency
              -backend: go, docker
              -frontend: nextjs, typescript
              -infra: aws(rds, ecs, cloudfront etc)
              -term: 6 months by 2 members
              -I mainly developed backend.

              Sales lists maker from recruitment sites
              -backend: go, python, docker
              -infra: gcp
              -term: 4 months by 1 member
              
              The reason I hope to work
              
              
              While I've worked there and personally developed some services, I think it's important to learn how to develop and spread software services speedy and safely in the global teams. I would say It's not wasted to work at global company and learn new things in early career. The reasons I've choose HR industry is that most of Japanese see working at company as bored thing, actually people around me think that and Japanese is worst in ranking of working with happy in the world, but I thought it is weird when I was a child, and  I must change those situations by using a new notion with technology. I don't speak English well though, I'll try hard to learn what I don't have for changing Japan and HR now, so I'd like to work at your company as an internship or a part-time.
            */}
                Goについて、
                オープンソースプロジェクトにも、たまにではありますが、使っている中で不具合を見つけた際に、PRを送っています。特にGoを使っていると、周辺のエコシステムが比較的整っておらず、オープンソースへのコミットをしている中で、海外の方々とやりとりをする楽しさと緊張感を感じることができるので、今後も力を入れていきたいと思っています。
              </h5>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
