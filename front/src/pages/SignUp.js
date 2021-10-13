import React from "react";
//elements
import { Grid, Button, Input, Text } from "../elements/index";
// store
import { history } from "../redux/configureStore";
// redux, actions
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const SignUp = () => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const signUp = () => {
    if (id === "" || nickname === "" || password === "" || phoneNumber === "") {
      window.alert(
        "아이디, 닉네임, 비밀번호, 핸드폰번호를 모두 입력해주세요 😆!!"
      );
      return;
    }

    if (password !== passwordCheck) {
      window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다 😅");
      return;
    }

    dispatch(
      userActions.SignUpDB({
        userId: id,
        userNickname: nickname,
        userPassword: password,
        userPhoneNumber: phoneNumber,
      })
    );
  };

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
            _onChange={(e) => {
              setId(e.target.value);
            }}
          ></Input>
        </Grid>

        <Grid width="77%" margin="0 auto">
          <Input
            padding="10px"
            width="100%"
            radius="15px"
            placeholder="닉네임을 입력하세요"
            _onChange={(e) => {
              setNickname(e.target.value);
            }}
          ></Input>
        </Grid>

        <Grid padding="25px 0px" width="77%" margin="0 auto">
          <Input
            padding="10px"
            width="100%"
            radius="15px"
            type="password"
            placeholder="비밀번호를 입력하세요"
            _onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></Input>
        </Grid>

        <Grid width="77%" margin="0 auto">
          <Input
            padding="10px"
            width="100%"
            radius="15px"
            type="password"
            placeholder="비밀번호를 한번 더 입력하세요"
            _onChange={(e) => {
              setPasswordCheck(e.target.value);
            }}
          ></Input>
        </Grid>

        <Grid padding="25px 0px 16px 0px" width="77%" margin="0 auto">
          <Input
            padding="10px"
            width="100%"
            radius="15px"
            placeholder="핸드폰번호를 입력하세요"
            _onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          ></Input>
        </Grid>

        <Grid isFlex width="70%" margin="40px auto">
          <Button
            isShadow
            padding="10px"
            width="40%"
            backgroundColor="#ffffee"
            _onClick={() => {
              history.push("/");
            }}
          >
            취소
          </Button>
          <Button
            isShadow
            padding="10px"
            width="40%"
            backgroundColor="#ffffee"
            _onClick={() => {
              signUp();
            }}
          >
            회원가입
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;
