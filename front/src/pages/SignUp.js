import React from "react";
// elements
import { Grid, Button, Input, Text } from "../elements/index";
// store
import { history } from "../redux/configureStore";
// redux, actions
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
// 유효성 체크 함수
import { idCheck, pwdCheck, phoneNumberCheck } from "../shared/common";

const SignUp = () => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [passwordHelp, setPasswordHelp] = React.useState(false);

  const passwordChk = (e) => {
    // password !== passwordCheck 일 때(true) 문구가 나타난다.
    setPasswordHelp(password !== e.target.value);
  };

  console.log(passwordHelp);
  console.log(password);
  console.log(passwordCheck);
  const signUp = () => {
    if (id === "" || nickname === "" || password === "" || phoneNumber === "") {
      window.alert(
        "아이디, 닉네임, 비밀번호, 핸드폰번호를 모두 입력해주세요 😆!!"
      );
      return;
    }

    if (!idCheck(id)) {
      window.alert("아이디 형식을 확인해주세요 !");
      return;
    }

    if (!pwdCheck(password)) {
      window.alert("비밀번호 형식을 확인해주세요!");
      return;
    }

    if (!phoneNumberCheck(phoneNumber)) {
      window.alert("핸드폰 번호 양식을 확인해주세요 !");
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
      <Grid
        width="35vw"
        minWidth="420px"
        margin="50px auto 50px auto"
        padding="16px"
        borderRadius="15px"
        bg="#e1f5fe"
        isShadow
      >
        {/* 제목 */}
        <Text margin="40px" size="2em" color="#849298" bold align="center">
          SignUp
        </Text>

        {/* 아이디 */}
        <Grid padding="40px 0px 25px 0px" width="77%" margin="0 auto">
          <Input
            value={id}
            padding="10px"
            width="100%"
            radius="15px"
            placeholder="아이디를 입력하세요"
            _onChange={(e) => {
              setId(e.target.value);
            }}
          ></Input>

          <Text margin="5px 0px 0px 10px" size="12px" color="#586165">
            2-10자의 영문 숫자 조합만 입력가능합니다.
          </Text>
        </Grid>

        {/* 닉네임 */}
        <Grid width="77%" margin="0 auto">
          <Input
            value={nickname}
            padding="10px"
            width="100%"
            radius="15px"
            placeholder="닉네임을 입력하세요"
            _onChange={(e) => {
              setNickname(e.target.value);
            }}
          ></Input>
        </Grid>

        {/* 비밀번호 */}
        <Grid padding="25px 0px" width="77%" margin="0 auto">
          <Input
            value={password}
            padding="10px"
            width="100%"
            radius="15px"
            type="password"
            placeholder="비밀번호를 입력하세요"
            _onChange={(e) => {
              passwordChk(e);
              setPassword(e.target.value);
            }}
          ></Input>
          <Text margin="5px 0px 0px 10px" size="12px" color="#586165">
            영문과 숫자 조합의 8~15자의 비밀번호를 설정해주세요.
          </Text>
          <Text margin="0px 0px 0px 10px" size="12px" color="#586165">
            특수 문자도 사용가능합니다(!@#$%^&*).
          </Text>
        </Grid>

        {/* 비밀번호 체크 */}
        <Grid width="77%" margin="0 auto">
          <Input
            value={passwordCheck}
            padding="10px"
            width="100%"
            radius="15px"
            type="password"
            placeholder="비밀번호를 한번 더 입력하세요"
            _onChange={(e) => {
              passwordChk(e);
              setPasswordCheck(e.target.value);
            }}
          ></Input>

          {/* 비밀번호 도움문구 */}
          {password !== passwordCheck && (
            <Text margin="5px 0px 0px 10px" size="12px" color="red">
              비밀번호가 일치하지 않습니다.
            </Text>
          )}
        </Grid>

        {/* 핸드폰번호 */}
        <Grid padding="25px 0px 16px 0px" width="77%" margin="0 auto">
          <Input
            value={phoneNumber}
            padding="10px"
            width="100%"
            radius="15px"
            placeholder="핸드폰번호를 입력하세요"
            _onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          ></Input>
          <Text margin="5px 0px 0px 10px" size="12px" color="#586165">
            010-xxxx-xxxx 와 같이 입력해주세요.
          </Text>
        </Grid>

        {/* 버튼 */}
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
