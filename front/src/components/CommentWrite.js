import React from "react";

import { Grid, Input, Text, Button } from "../elements/index";
import { actionCreators as cmtAction } from "../redux/modules/user";

const CommentWrite = () => {
  const [comment, setcomment] = React.useState("");
  const onChangeComment = (e) => {
    setcomment(e.target.value);
    console.log("내용입력");
  };
  const onClickComment = () => {
    console.log(comment);
    setcomment("");
  };

  // const onClickComment =(e) =>

  return (
    <React.Fragment>
      <Text padding="16px 0px" size="1em" bold>
        댓글
      </Text>
      <Grid isFlex width="100%" margin="0 auto">
        <Input
          multiLine
          height="50px"
          padding="10px"
          width="100%"
          radius="15px"
          value={comment}
          placeholder="내용을 입력하세요"
          _onChange={onChangeComment}
        ></Input>

        <Button
          isShadow
          backgroundColor="#ffffee"
          padding="10px"
          margin="0px 0px 0px 10px"
          _onClick={onClickComment}
        >
          댓글작성
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default CommentWrite;
