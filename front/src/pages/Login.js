import React from "react";
//elements
import { Grid, Button, Input, Text } from "../elements/index";
import { history } from "../redux/configureStore";
// redux, action
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = () => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = () => {
    if (id === "" || password === "") {
      window.alert("아이디 혹은 비밀번호를 입력해주세요 😊");
      return;
    }

    dispatch(userActions.LoginDB({ userId: id, userPassword: password }));
  };

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
            _onChange={(e) => setId(e.target.value)}
          ></Input>
        </Grid>
        <Grid width="77%" margin="0 auto">
          <Input
            padding="10px"
            width="100%"
            radius="15px"
            placeholder="비밀번호를 입력하세요"
            type="password"
            _onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </Grid>

        <Grid isFlex width="70%" margin="60px auto">
          <Button
            isShadow
            padding="10px"
            width="40%"
            backgroundColor="#ffffee"
            _onClick={() => {
              login();
              console.log("로그인했어!!!!!!!!!!");
            }}
          >
            로그인
          </Button>
          <Button
            isShadow
            padding="10px"
            width="40%"
            backgroundColor="#ffffee"
            _onClick={() => {
              history.push("/signup");
            }}
          >
            회원가입
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
