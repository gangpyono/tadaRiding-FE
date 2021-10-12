import React from "react";

//elements
import { Grid, Button, Input, Text } from "../elements/index";

const SignUp = () => {
  return (
    <>
      <Text margin="40px" size="2em" color="#849298" bold align="center">
        SignUp
      </Text>
      <Grid
        width="450px"
        margin="50px auto 0px auto"
        padding="16px"
        borderRadius="15px"
        bg="#e1f5fe"
        isShadow
      >
        <Grid padding="40px 0px 25px 0px" width="77%" margin="0 auto">
          <Input
            padding="10px"
            width="100%"
            radius="15px"
            placeholder="아이디를 입력하세요"
          ></Input>
        </Grid>

        <Grid width="77%" margin="0 auto">
          <Input
            padding="10px"
            width="100%"
            radius="15px"
            placeholder="닉네임을 입력하세요"
          ></Input>
        </Grid>

        <Grid padding="25px 0px" width="77%" margin="0 auto">
          <Input
            padding="10px"
            width="100%"
            radius="15px"
            type="password"
            placeholder="비밀번호를 입력하세요"
          ></Input>
        </Grid>

        <Grid width="77%" margin="0 auto">
          <Input
            padding="10px"
            width="100%"
            radius="15px"
            type="password"
            placeholder="비밀번호를 한번 더 입력하세요"
          ></Input>
        </Grid>

        <Grid padding="25px 0px 16px 0px" width="77%" margin="0 auto">
          <Input
            padding="10px"
            width="100%"
            radius="15px"
            placeholder="핸드폰번호를 입력하세요"
          ></Input>
        </Grid>

        <Grid isFlex width="250px" margin="40px auto">
          <Button
            padding="10px 20px"
            backgroundColor="#ffffee"
            _onClick={() => {}}
          >
            취소
          </Button>
          <Button
            padding="10px 20px"
            backgroundColor="#ffffee"
            _onClick={() => {}}
          >
            가입완료
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;
