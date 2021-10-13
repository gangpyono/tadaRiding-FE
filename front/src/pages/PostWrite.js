import React from "react";
import { Grid, Text, Input, Button } from "../elements/index";

import TextField from "@mui/material/TextField";

const PostWrite = (props) => {
  return (
    <React.Fragment>
      <Text width margin="80px" size="2em" bold align="center">
        게시물작성
      </Text>
      <Grid
        width="800px"
        margin="100px auto"
        padding="16px"
        borderRadius="15px"
        bg="#e1f5fe"
        isShadow
      >
        <Grid isFlex padding="25px 0px" width="77%" margin="0 auto">
          <Text size="1em" bold>
            제목
          </Text>
          <Input
            padding="10px"
            width="80%"
            radius="15px"
            placeholder="제목을 입력하세요"
          ></Input>
        </Grid>
        <Grid isFlex padding="25px 0px" width="77%" margin="0 auto">
          <Text size="1em" bold>
            인원수
          </Text>
          <Input
            padding="10px"
            width="80%"
            radius="15px"
            placeholder="인원수를 입력하세요"
            _onChange={() => {}}
          ></Input>
        </Grid>
        <Grid isFlex padding="25px 0px" width="77%" margin="0 auto">
          <Text size="1em" bold>
            출발
          </Text>
          <Input
            padding="10px"
            width="80%"
            radius="15px"
            placeholder="출발지를 입력하세요"
            _onChange={() => {}}
          ></Input>
        </Grid>
        <Grid isFlex padding="25px 0px" width="77%" margin="0 auto">
          <Text size="1em" bold>
            도착
          </Text>
          <Input
            padding="10px"
            width="80%"
            radius="15px"
            placeholder="도착지를 입력하세요"
            _onChange={() => {}}
          ></Input>
        </Grid>
        <Grid isFlex padding="25px 0px" width="77%" margin="0 auto">
          <Text size="1em" bold>
            사진
          </Text>
          <Input type="file" padding="10px" width="80%" radius="15px"></Input>
        </Grid>
        <Grid isFlex padding="25px 0px" width="77%" margin="0 auto">
          <Text size="1em" bold>
            출발시간
          </Text>
          <TextField
            style={{ backgroundColor: "white" }}
            // color="white"
            label="일시"
            type="datetime-local"
            sx={{ width: 1, maxWidth: 470 }}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid isFlex padding="25px 0px" width="77%" margin="0 auto">
          <Text size="1em" bold>
            내용
          </Text>
          <Input
            multiLine
            padding="10px"
            width="80%"
            radius="15px"
            placeholder="내용을 입력하세요"
            _onChange={() => {}}
          ></Input>
        </Grid>
        <Grid isFlex width="250px" margin="50px auto">
          <Button padding="10px" _onClick={() => {}}>
            확인
          </Button>
          <Button padding="10px" _onClick={() => {}}>
            취소
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
