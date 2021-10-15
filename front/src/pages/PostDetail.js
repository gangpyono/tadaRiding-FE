import React from "react";
import styled from "styled-components";

import { Grid, Text, Input, Button, Image } from "../elements/index";

import CommentWrite from "../components/CommentWrite";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";

import { apis } from "../lib/apis";

const PostDetail = (props) => {
  const _postUid = props.match.params.postUid;
  const postList = useSelector((state) => state.post.list);
  const post = postList.find((p) => p.postUid === _postUid);
  const comments = post.comments;
  console.log(post);

  // const postIdx = postList.findIndex((p) => p._postUid === _postUid);
  // const _post = postList[postIdx];

  return (
    <React.Fragment>
      {/* <Text margin="80px" size="2em" bold align="center">
        상세페이지
      </Text> */}
      <Grid width="800px" margin="100px auto">
        <Grid padding="10px 0px" width="100%" flexEnd>
          <Button
            borderRadius="15px"
            backgroundColor="transparent"
            width="30px"
          >
            <EditIcon />
          </Button>
          <Button
            margin="0px 10px 0px 0px"
            borderRadius="15px"
            backgroundColor="transparent"
            width="30px"
          >
            <DeleteIcon />
          </Button>
          <Grid isFlex>
            <Button
              borderRadius="15px"
              backgroundColor="transparent"
              width="30px"
            >
              <FavoriteBorderIcon />
            </Button>
            <Text size="1em">1</Text>
          </Grid>
        </Grid>

        <Grid
          width="100%"
          padding="55px"
          borderRadius="15px"
          bg="#e1f5fe"
          isShadow
        >
          <Text size="2em" bold margin="20px 0px 0px 20px" color="#727e82">
            {post.postTitle}
          </Text>

          <Grid isFlex>
            <Grid width="300px">
              <Image src={post.postImage}></Image>
            </Grid>

            <Grid width="350px">
              <Grid isFlex padding="10px 0px" width="100%" margin="0 auto">
                <Text size="1em" bold color="#727e82">
                  인원수
                </Text>
                <Text
                  bg="white"
                  padding="10px"
                  borderRadius="10px"
                  width="250px"
                  size="1em"
                  bold
                  align="center"
                >
                  {post.participants.length}/{post.limitedUserNum}
                </Text>
              </Grid>
              <Grid isFlex padding="10px 0px" width="100%" margin="0 auto">
                <Text size="1em" bold color="#727e82">
                  출발
                </Text>
                <Text
                  bg="white"
                  padding="10px"
                  borderRadius="10px"
                  width="250px"
                  size="1em"
                  bold
                  align="center"
                >
                  {post.origin}
                </Text>
              </Grid>
              <Grid isFlex padding="10px 0px" width="100%" margin="0 auto">
                <Text size="1em" bold color="#727e82">
                  도착
                </Text>
                <Text
                  bg="white"
                  padding="10px"
                  borderRadius="10px"
                  width="250px"
                  size="1em"
                  bold
                  align="center"
                >
                  {post.destination}
                </Text>
              </Grid>
              <Grid isFlex padding="10px 0px" width="100%" margin="0 auto">
                <Text size="1em" bold>
                  출발시간
                </Text>
                <Text
                  bg="white"
                  padding="10px"
                  borderRadius="10px"
                  width="250px"
                  size="1em"
                  bold
                  align="center"
                >
                  {post.startTime}
                </Text>
              </Grid>
            </Grid>
          </Grid>

          <Grid width="100%">
            <Text padding="10px 0px" size="1em" bold color="#727e82">
              내용
            </Text>
            <Text
              padding="10px"
              bg="white"
              borderRadius="10px"
              width="100%"
              size="1em"
              // bold
            >
              {post.postDesc}
            </Text>
          </Grid>
          <CommentWrite postUid={_postUid} />
        </Grid>

        <Grid margin="0px 0px 50px 0px">
          {comments.map((comment, idx) => {
            return (
              <div>
                <Grid isFlex>
                  <Text size="1em">
                    {comment.userUid}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {comment.commentDate}
                  </Text>
                  <Button
                    borderRadius="15px"
                    backgroundColor="transparent"
                    width="30px"
                  >
                    <DeleteIcon />
                  </Button>
                </Grid>

                <Text size="1em" width="100%" padding="20px 0px 10px 0px">
                  {comment.commentDesc}
                </Text>
                <Line />
              </div>
            );
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Line = styled.hr`
  border-top: 1px solid #bbb;
`;

export default PostDetail;
