import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import TextField from "@mui/material/TextField";
import { Grid, Text, Input, Button, Image } from "../elements/index";
import { useDispatch } from "react-redux";
import { SaveAltRounded } from "@mui/icons-material";

const PostWrite = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list);
  const postUid = props.match.params.postUid;

  let isEdit = postUid ? true : false;
  const post = isEdit ? postList.find((p) => p.postUid === postUid) : null;

  const [postTitle, setPostTitle] = React.useState(post ? post.postTitle : "");
  const [limitedUserNum, setLimitedUserNum] = React.useState(post ? post.limitedUserNum : "");
  const [origin, setOrigin] = React.useState(post ? post.origin : "");
  const [destination, setDestination] = React.useState(post ? post.destination : "");
  const [postDesc, setPostDesc] = React.useState(post ? post.postDesc : "");
  const [postImage, setPostImage] = React.useState(post ? post.postImage : "");
  // 수정시 날짜 T 넣어줄것.
  //ex) 2018-06-12T19:30
  const [startTime, setStartTime] = React.useState(post ? post.startTime : "");

  const changePostTitle = (e) => {
    setPostTitle(e.target.value);
  };

  const changeLimitedUserNum = (e) => {
    setLimitedUserNum(e.target.value);
  };

  const changeOrigin = (e) => {
    setOrigin(e.target.value);
    console.log(e.target.value);
  };

  const changeDestination = (e) => {
    setDestination(e.target.value);
  };

  const changePostDesc = (e) => {
    setPostDesc(e.target.value);
  };

  //업로드
  const fileInput = React.useRef();
  const selectFile = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.readAsDataURL(file); //파일을 읽어오면 onloaded이벤트 발생.

    reader.onloadend = () => {
      setPostImage(reader.result);
    };
  };

  //날짜 포맷
  const dateInput = React.useRef();
  const selectDate = (e) => {
    const startDate = e.target.value;
    setStartTime(startDate.replace("T", "-"));
  };

  //추가
  const addPost = () => {
    const post = {
      postTitle: postTitle,
      postDesc: postDesc,
      limitedUserNum: limitedUserNum,
      origin: origin,
      destination: destination,
      postImage: postImage,
      startTime: startTime,
      postDate: moment().format("YYYY-MM-DD hh:mm:ss"),
    };
    console.log(post);
    dispatch(postActions.addPostMiddleware(post));
  };

  // 수정
  const updatePost = () => {
    const post = {
      postTitle: postTitle,
      postDesc: postDesc,
      origin: origin,
      destination: destination,
      postState: true,
      postImage: postImage,
      limitedUserNum: limitedUserNum,
      startTime: startTime,
    };

    dispatch(postActions.updatePostMiddleware(postUid, post));
  };

  return (
    <React.Fragment>
      <Text color="#727e82" margin="70px" size="2em" bold align="center">
        {isEdit ? "게시물 수정" : "게시물 작성"}
      </Text>
      <Grid
        width="800px"
        margin="0px auto"
        padding="16px"
        borderRadius="15px"
        bg="#e1f5fe"
        isShadow
      >
        <Grid isFlex padding="25px 0px" width="77%" margin="0 auto">
          <Text color="#727e82" size="1em" bold>
            제목
          </Text>
          <Input
            padding="10px"
            width="80%"
            radius="15px"
            placeholder="제목을 입력하세요"
            _onChange={changePostTitle}
            defaultValue={postTitle}
          ></Input>
        </Grid>
        <Grid isFlex padding="25px 0px" width="77%" margin="0 auto">
          <Text color="#727e82" size="1em" bold>
            인원수
          </Text>
          <Input
            padding="10px"
            width="80%"
            radius="15px"
            placeholder="인원수를 입력하세요"
            _onChange={changeLimitedUserNum}
            defaultValue={limitedUserNum}
          ></Input>
        </Grid>
        <Grid isFlex padding="25px 0px" width="77%" margin="0 auto">
          <Text color="#727e82" size="1em" bold>
            출발
          </Text>
          <Input
            padding="10px"
            width="80%"
            radius="15px"
            placeholder="출발지를 입력하세요"
            _onChange={changeOrigin}
            defaultValue={origin}
          ></Input>
        </Grid>
        <Grid isFlex padding="25px 0px" width="77%" margin="0 auto">
          <Text color="#727e82" size="1em" bold>
            도착
          </Text>
          <Input
            padding="10px"
            width="80%"
            radius="15px"
            placeholder="도착지를 입력하세요"
            _onChange={changeDestination}
            defaultValue={destination}
          ></Input>
        </Grid>

        <Grid isFlex padding="25px 0px" width="77%" margin="0 auto">
          <Text color="#727e82" size="1em" bold>
            사진
          </Text>
          <Input
            type="file"
            padding="10px"
            width="80%"
            radius="15px"
            ref={fileInput}
            _onChange={selectFile}
          ></Input>
        </Grid>

        <Grid isFlex padding="25px 0px" width="77%" margin="0 auto">
          <Text color="#727e82" size="1em" bold>
            사진 미리보기
          </Text>
          <Grid width="77%">
            <Image margin="0px 0px 0px 20px" src={postImage}></Image>
          </Grid>
        </Grid>

        <Grid isFlex padding="25px 0px" width="77%" margin="0 auto">
          <Text color="#727e82" size="1em" bold>
            출발시간
          </Text>
          <TextField
            style={{ backgroundColor: "white" }}
            // color="white"
            label="일시"
            type="datetime-local"
            sx={{ width: 1, maxWidth: 470 }}
            InputLabelProps={{ shrink: true }}
            onChange={selectDate}
            ref={dateInput}
          />
        </Grid>
        <Grid isFlex padding="25px 0px" width="77%" margin="0 auto">
          <Text color="#727e82" size="1em" bold>
            내용
          </Text>
          <Input
            multiLine
            padding="10px"
            width="80%"
            radius="15px"
            placeholder="내용을 입력하세요"
            _onChange={changePostDesc}
            defaultValue={postDesc}
          ></Input>
        </Grid>
        <Grid isFlex width="300px" margin="50px auto">
          {/* 수정/추가버튼 */}
          {isEdit ? (
            <Button isShadow padding="10px" backgroundColor="#ffffee" _onClick={updatePost}>
              수정완료
            </Button>
          ) : (
            <Button isShadow padding="10px" backgroundColor="#ffffee" _onClick={addPost}>
              게시물 생성
            </Button>
          )}
          <Button
            isShadow
            padding="10px"
            backgroundColor="#ffffee"
            _onClick={() => {
              history.goBack();
            }}
          >
            취소
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
