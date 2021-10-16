import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configureStore";

import { Grid, Button, Text, Image } from "../elements/index.js";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { actionCreators as postActions } from "../redux/modules/post";

const Post = (props) => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  // React.useEffect(() => {
  //   setLikeState(props.isLike);
  // console.log(props);
  return (
    <Grid
      bg="#e1f5fe"
      center
      margin="20px"
      flexBasis
      isShadow
      borderRadius="10px"
      isPosition="relative"
    >
      <Text align="center" margin="20px" bold color="#727e82">
        {/* postTitle */}
        {props.postTitle}
      </Text>

      {props.isMe && (
        <Grid isPosition="absolute" top="5px" right="5px">
          {/* edit */}
          <Button
            borderRadius="15px"
            backgroundColor="transparent"
            width="30px"
            _onClick={() => {
              history.push(`/PostWrite/${props.postUid}`);
            }}
          >
            <EditIcon />
          </Button>
          {/* Delete */}
          <Button
            borderRadius="15px"
            backgroundColor="transparent"
            width="30px"
            _onClick={() => {
              dispatch(postActions.deletePostMiddleware(props.postUid));
            }}
          >
            <DeleteIcon />
          </Button>
        </Grid>
      )}

      <Grid margin="0px 20px 20px 20px">
        <Image
          src={props.postImage}
          _onClick={() => {
            history.push(`/PostDetail/${props.postUid}`);
          }}
          cursor
        ></Image>
      </Grid>
      {/*  */}
      <Text bold>
        {props.origin} → {props.destination}
      </Text>

      <Grid padding="14px">
        <Grid isFlex padding="10px">
          <Text size="15px">출발일 : {props.startTime}</Text>
          <Text size="15px">
            인원수 :
            {props.attendUserNicknames
              ? `${props.attendUserNicknames.length}/${props.limitedUserNum}`
              : ""}
          </Text>

          <Grid isFlex padding="10px">
            <Text size="15px" margin="10px">
              {props.postLikeCnt}
            </Text>
            {/* 좋아요 버튼 */}
            {isLogin && props.likeState ? (
              <Button
                width="12px"
                backgroundColor="transparent"
                borderRadius="0px"
                padding="0px"
                _onClick={() => {
                  if (!isLogin) {
                    window.alert("로그인정보가 없습니다.");
                    history.replace("/Login");
                    return;
                  }
                  dispatch(
                    postActions.toggleLikeMiddleware(props.postUid, false)
                  );
                }}
              >
                <FavoriteIcon />
              </Button>
            ) : (
              <Button
                width="12px"
                backgroundColor="transparent"
                borderRadius="0px"
                padding="0px"
                _onClick={() => {
                  if (!isLogin) {
                    window.alert("로그인정보가 없습니다.");
                    history.replace("/Login");
                    return;
                  }
                  dispatch(
                    postActions.toggleLikeMiddleware(props.postUid, true)
                  );
                }}
              >
                <FavoriteBorderIcon />
              </Button>
            )}
          </Grid>
        </Grid>

        <Grid isFlex padding="10px">
          <Text size="15px">작성일 : {props.postDate}</Text>
          <Text size="14px">작성자 : {props.postRegister}</Text>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Post;
