import React from "react";
import { Grid, Button, Text } from "../elements/index";
// store
import { history } from "../redux/configureStore";
// redux, actions
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Header = (props) => {
  const dispatch = useDispatch();

  const isSession = sessionStorage.getItem("USER_TOKEN") ? true : false;
  const isLogin = useSelector((state) => state.user.isLogin);

  if (isLogin && isSession) {
    return (
      <>
        <Grid isFlex height="80px" padding="0px 10%" bg="#afc2cb">
          <Button
            cursor
            size="2em"
            bold
            color="#ffffee"
            _onClick={() => {
              history.push("/");
            }}
          >
            Tada Riding
          </Button>
          <Grid isFlex>
            <Button
              isShadow
              margin="0px 20px"
              padding="10px"
              backgroundColor="#ffffee"
              _onClick={() => {
                history.push("/mypage");
              }}
            >
              마이페이지
            </Button>
            <Button
              isShadow
              padding="10px"
              backgroundColor="#ffffee"
              _onClick={() => {
                dispatch(userActions.LogOut());
              }}
            >
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </>
    );
  }

  return (
    // 로그인 안 했을 때 헤더
    <>
      <Grid isFlex height="80px" padding="0px 10%" bg="#afc2cb">
        <Text
          _onClick={() => {
            history.push("/");
          }}
          size="2em"
          bold
          color="#ffffee"
          cursor
        >
          Tada Riding
        </Text>
        <Grid isFlex>
          <Button
            isShadow
            margin="0px 20px"
            padding="10px"
            backgroundColor="#ffffee"
            _onClick={() => {
              history.push("/login");
            }}
          >
            로그인
          </Button>
          <Button
            isShadow
            padding="10px"
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
// 로그인 했을 때 헤더

export default Header;
