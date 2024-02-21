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
import ConvertDate from "../../components/CoverDate";

/*
{"articles":[{"id":247724,"post_type":"Article","title":"Cloud Load Balancer × Cloud Runの3-Tier構成で構築してみた","slug":"d296d4c6e03226","comments_count":0,"liked_count":0,"body_letters_count":3430,"article_type":"tech","emoji":"🌏","is_suspending_private":false,"published_at":"2024-02-17T21:11:00.000+09:00","body_updated_at":"2024-02-21T11:37:04.921+09:00","source_repo_updated_at":"2024-02-21T14:29:39.805+09:00","pinned":false,"path":"/hidenari_yuda/articles/d296d4c6e03226","user":{"id":83197,"username":"hidenari_yuda","name":"Hidenari Yuda / 湯田英也","avatar_small_url":"https://res.cloudinary.com/zenn/image/fetch/s--crxoVFyC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_70/https://storage.googleapis.com/zenn-user-upload/avatar/8b1b295026.jpeg"},"publication":null},{"id":221641,"post_type":"Article","title":"【RPA】Goでブラウザ操作/自動化を実装する【go-rod】","slug":"1fb0edcf1782ee","comments_count":0,"liked_count":1,"body_letters_count":2241,"article_type":"tech","emoji":"🤖","is_suspending_private":false,"published_at":"2023-11-30T21:11:01.009+09:00","body_updated_at":"2023-11-30T20:44:47.380+09:00","source_repo_updated_at":"2023-11-30T20:44:47.379+09:00","pinned":false,"path":"/hidenari_yuda/articles/1fb0edcf1782ee","user":{"id":83197,"username":"hidenari_yuda","name":"Hidenari Yuda / 湯田英也","avatar_small_url":"https://res.cloudinary.com/zenn/image/fetch/s--crxoVFyC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_70/https://storage.googleapis.com/zenn-user-upload/avatar/8b1b295026.jpeg"},"publication":null},{"id":129520,"post_type":"Article","title":"【Go】Echoでファイルを通信する方法【Multipart/form,Base64】","slug":"a6eb745225f1ea","comments_count":0,"liked_count":0,"body_letters_count":911,"article_type":"tech","emoji":"📂","is_suspending_private":false,"published_at":"2023-11-30T20:08:02.009+09:00","body_updated_at":"2023-11-30T20:30:45.855+09:00","source_repo_updated_at":"2023-11-30T20:44:48.290+09:00","pinned":false,"path":"/hidenari_yuda/articles/a6eb745225f1ea","user":{"id":83197,"username":"hidenari_yuda","name":"Hidenari Yuda / 湯田英也","avatar_small_url":"https://res.cloudinary.com/zenn/image/fetch/s--crxoVFyC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_70/https://storage.googleapis.com/zenn-user-upload/avatar/8b1b295026.jpeg"},"publication":null}],"next_page":null}
*/
interface Post {
  id: number;
  post_type: string;
  title: string;
  path: string;
  emoji: string;
  published_at: string;
}

export default function SectionZenn({ ...rest }) {
  const classes = useStyles();

  const router = useRouter();

  const [posts, setPosts] = React.useState<Post[]>([]);

  useEffect(() => {
    const f = async () => {
      const res = `{"articles":[{"id":247724,"post_type":"Article","title":"Cloud Load Balancer × Cloud Runの3-Tier構成で構築してみた","slug":"d296d4c6e03226","comments_count":0,"liked_count":0,"body_letters_count":3430,"article_type":"tech","emoji":"🌏","is_suspending_private":false,"published_at":"2024-02-17T21:11:00.000+09:00","body_updated_at":"2024-02-21T11:37:04.921+09:00","source_repo_updated_at":"2024-02-21T14:29:39.805+09:00","pinned":false,"path":"/hidenari_yuda/articles/d296d4c6e03226","user":{"id":83197,"username":"hidenari_yuda","name":"Hidenari Yuda / 湯田英也","avatar_small_url":"https://res.cloudinary.com/zenn/image/fetch/s--crxoVFyC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_70/https://storage.googleapis.com/zenn-user-upload/avatar/8b1b295026.jpeg"},"publication":null},{"id":221641,"post_type":"Article","title":"【RPA】Goでブラウザ操作/自動化を実装する【go-rod】","slug":"1fb0edcf1782ee","comments_count":0,"liked_count":1,"body_letters_count":2241,"article_type":"tech","emoji":"🤖","is_suspending_private":false,"published_at":"2023-11-30T21:11:01.009+09:00","body_updated_at":"2023-11-30T20:44:47.380+09:00","source_repo_updated_at":"2023-11-30T20:44:47.379+09:00","pinned":false,"path":"/hidenari_yuda/articles/1fb0edcf1782ee","user":{"id":83197,"username":"hidenari_yuda","name":"Hidenari Yuda / 湯田英也","avatar_small_url":"https://res.cloudinary.com/zenn/image/fetch/s--crxoVFyC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_70/https://storage.googleapis.com/zenn-user-upload/avatar/8b1b295026.jpeg"},"publication":null},{"id":129520,"post_type":"Article","title":"【Go】Echoでファイルを通信する方法【Multipart/form,Base64】","slug":"a6eb745225f1ea","comments_count":0,"liked_count":0,"body_letters_count":911,"article_type":"tech","emoji":"📂","is_suspending_private":false,"published_at":"2023-11-30T20:08:02.009+09:00","body_updated_at":"2023-11-30T20:30:45.855+09:00","source_repo_updated_at":"2023-11-30T20:44:48.290+09:00","pinned":false,"path":"/hidenari_yuda/articles/a6eb745225f1ea","user":{"id":83197,"username":"hidenari_yuda","name":"Hidenari Yuda / 湯田英也","avatar_small_url":"https://res.cloudinary.com/zenn/image/fetch/s--crxoVFyC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_70/https://storage.googleapis.com/zenn-user-upload/avatar/8b1b295026.jpeg"},"publication":null}],"next_page":null}`;

      // to json
      const data = JSON.parse(res);

      // console.log(res);
      // const data = await res.
      console.log(data);
      const posts: Post[] = data.articles.slice(0, 10);
      setPosts(posts);
    };

    f();
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
              <h2 className={classes.title}>技術ブログ</h2>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            {posts.map((post) => (
              // <li key={post.id}>
              //   <a href={`https://zenn.dev/${post.path}`} target="blank" rel="noopener noreferrer">
              //     <span>{post.emoji}</span>
              //     <p>{post.title}</p>
              //     <p>
              //       <ConvertDate convertDate={post.published_at} />
              //     </p>
              //   </a>
              // </li>
              <GridItem xs={12} sm={4} md={4} key={post.id}>
                <a
                  href={`https://zenn.dev/${post.path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card plain className={classes.card2}>
                    <CardHeader image plain>
                      {/* <img src="/img/zenn.svg" alt="zenn" sizes="sm" /> */}
                      <div>
                        <span style={{ fontSize: "6rem" }}>{post.emoji}</span>
                      </div>
                    </CardHeader>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>{post.title}</h4>
                      <h4 className={classes.description}>
                        <ConvertDate convertDate={post.published_at} />
                      </h4>
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
