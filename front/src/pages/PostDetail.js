import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { apis } from "../lib/apis";
import { actionCreators as postActions } from "../redux/modules/post";
import { Grid, Text, Input, Button, Image } from "../elements/index";
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";

const PostDetail = (props) => {
  const postUid = props.match.params.postUid;
  const { history } = props;
  const dispatch = useDispatch();
  // const _postUid = props.match.params.postUid;
  // const list = useSelector((state) => state.post.list);
  // const post = list.find((p) => p.postUid === _postUid);
  let [post, setPost] = React.useState(null);
  let [comments, setComments] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      // You can await here

      const res = await apis.getPostDetail(postUid);

      setPost(res.data.post);
      setComments(res.data.comments);
      // ...
    }
    fetchData();

    console.log("디테일 페이지입니다.");
  }, []);

  console.log(post);
  console.log(comments);

  // const updateLike = () => {
  //   // dispatch(postActions.toggleLikeMiddleware(post.postUid));
  //   if (!like) {
  //     setLike(true);
  //     setPostLikeCnt(postLikeCnt + 1);
  //   } else {
  //     setLike(false);
  //     setPostLikeCnt(postLikeCnt - 1);
  //   }
  // };

  // console.log(like);
  return (
    <React.Fragment>
      <Grid width="800px" margin="100px auto">
        <Grid padding="10px 0px" width="100%" flexEnd>
          <Button
            borderRadius="15px"
            backgroundColor="transparent"
            width="30px"
            _onClick={() => {
              history.push(`/PostWrite/${postUid}`);
            }}
          >
            <EditIcon />
          </Button>
          <Button
            margin="0px 10px 0px 0px"
            borderRadius="15px"
            backgroundColor="transparent"
            width="30px"
            _onClick={() => {
              dispatch(postActions.deletePostMiddleware(postUid));
            }}
          >
            <DeleteIcon />
          </Button>

          <Grid isFlex>
            {post.like ? (
              // 채워진 하트
              <Button
                borderRadius="15px"
                backgroundColor="transparent"
                width="30px"
                // _onClick={updateLike}
              >
                <FavoriteIcon />
              </Button>
            ) : (
              // 빈  하트
              <Button
                borderRadius="15px"
                backgroundColor="transparent"
                width="30px"
                // _onClick={updateLike}
              >
                <FavoriteBorderIcon />
              </Button>
            )}
            <Text size="1em">{post.postLikeCnt}</Text>
          </Grid>
        </Grid>

        <Grid width="100%" padding="55px" borderRadius="15px" bg="#e1f5fe" isShadow>
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
          <CommentWrite postUid={postUid} />
        </Grid>
        <CommentList postUid={postUid} />
      </Grid>
    </React.Fragment>
  );
};

export default PostDetail;
