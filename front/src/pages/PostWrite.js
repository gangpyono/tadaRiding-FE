import React from "react";

import { Grid, Text, Input, Button } from "../elements/index";

const PostWrite = (props) => {
  return (
    <React.Fragment>
      <Grid center>
        <Text bold size="70px">
          포스팅
        </Text>
      </Grid>
      <Grid margin="0px auto" width="35%">
        <Grid isFlex padding="16px 0px">
          <Input label="제목"></Input>
        </Grid>
        <Grid isFlex padding="16px 0px">
          <Input label="인원수"></Input>
        </Grid>
        <Grid isFlex padding="16px 0px">
          <Input label="출발"></Input>
        </Grid>
        <Grid isFlex padding="16px 0px">
          <Input label="도착"></Input>
        </Grid>
        <Grid isFlex padding="16px 0px">
          <Input type="file" label="사진URL"></Input>
        </Grid>
        <Grid isFlex padding="16px 0px">
          <Input label="주행기간"></Input>
        </Grid>
        <Grid isFlex padding="16px 0px">
          <Input multiLine label="내용"></Input>
        </Grid>
        <Grid isFlex margin="auto" width="60%" padding="16px 0px">
          <Button padding="10px">확인</Button>
          <Button padding="10px">취소</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default PostWrite;
