import React from "react";

//elements
import { Grid, Button, Input, Text } from "../elements/index";

const Login = () => {
  return (
    <>
      <Text margin="60px" size="2em" color="#849298" bold align="center">
        Login
      </Text>
      <Grid
        width="450px"
        margin="50px auto"
        padding="16px"
        borderRadius="15px"
        bg="#e1f5fe"
        isShadow
      >
        <Grid padding="60px 0px 25px 0px" width="77%" margin="0 auto">
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
            placeholder="비밀번호를 입력하세요"
            type="password"
          ></Input>
        </Grid>

        <Grid isFlex width="70%" margin="60px auto">
          <Button
            padding="10px"
            width="40%"
            backgroundColor="#ffffee"
            _onClick={() => {}}
          >
            로그인
          </Button>
          <Button
            padding="10px"
            width="40%"
            backgroundColor="#ffffee"
            _onClick={() => {}}
          >
            회원가입
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
