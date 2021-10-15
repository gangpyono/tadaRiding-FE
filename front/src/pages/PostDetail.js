import React from "react";
import styled from "styled-components";
import { Grid, Text, Button, Image } from "../elements/index";

import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
// axios instance
import apis from "../lib/apis";
// actions
import { actionCreators as postActions } from "../redux/modules/post";
import { addCommentDB, deleteCommentDB } from "../redux/modules/comment";

const PostDetail = (props) => {
  const dispatch = useDispatch();
  const _postUid = props.match.params.postUid;
  const [post, setPost] = React.useState("");

  React.useEffect(() => {
    apis
      .getDetail(_postUid)
      .then((res) => {
        console.log(res.data);
        const post = res.data.post;
        setPost(post);
      })
      .catch((err) => console.log(err));
    console.log("디테일 페이지입니다.");
  }, []);

  console.log(post);
  const [postLikeCnt, setPostLikeCnt] = React.useState(post.postLikeCnt);
  const [like, setLike] = React.useState(post.postLikeState);

  const updateLike = () => {
    dispatch(postActions.toggleLikeMiddleware(post.postUid));
    if (like) setPostLikeCnt(postLikeCnt + 1);
    else setPostLikeCnt(postLikeCnt - 1);
  };

  return (
    <React.Fragment>
      <Grid width="800px" margin="100px auto">
        {/* buttons */}
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
          {/* 제목 */}
          <Text size="2em" bold margin="20px 0px 0px 20px" color="#727e82">
            {post.postTitle}
          </Text>

          <Grid isFlex>
            {/* 이미지 */}
            <Grid width="300px">
              <Image src={post.postImage}></Image>
            </Grid>

            <Grid width="350px">
              {/* 인원수 */}
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
                  align="center"
                >
                  {post.attendUserNicknames
                    ? `${post.attendUserNicknames.length}/${post.limitedUserNum}`
                    : ""}
                </Text>
              </Grid>

              {/* 출발지 */}
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
                  align="center"
                >
                  {post.origin}
                </Text>
              </Grid>

              {/* 도착지 */}
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
                  align="center"
                >
                  {post.destination}
                </Text>
              </Grid>

              {/* 출발시간 */}
              <Grid isFlex padding="10px 0px" width="100%" margin="0 auto">
                <Text size="1em" bold color="#727e82">
                  출발시간
                </Text>
                <Text
                  bg="white"
                  padding="10px"
                  borderRadius="10px"
                  width="250px"
                  size="1em"
                  align="center"
                >
                  {post.startTime}
                </Text>
              </Grid>
            </Grid>
          </Grid>

          {/* 내용 */}
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
            >
              {post.postDesc}
            </Text>
          </Grid>
          <CommentWrite postUid={props.postUid} />
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
