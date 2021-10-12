import React from "react";

//elements
import { Grid, Button, Input, Text } from "../elements/index";

const Login = () => {
  return (
    <>
      <Grid
        width="450px"
        margin="100px auto"
        padding="16px"
        border="5px solid #fbe9e7"
        borderRadius="15px"
        bg="#fbe9e7"
        isShadow
      >
        <Text margin="80px" size="2em" bold align="center">
          Login
        </Text>
        <Grid padding="25px 0px" width="77%" margin="0 auto">
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

        <Grid isFlex width="250px" margin="50px auto">
          <Button
            padding="10px 20px"
            backgroundColor="#ffffee"
            _onClick={() => {}}
          >
            로그인
          </Button>
          <Button
            padding="10px 20px"
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
