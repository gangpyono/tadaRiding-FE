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
        <Grid isFlex width="100%" height="12vh" padding="0px 10%" bg="#afc2cb">
          <Text
            _onClick={() => {
              history.push("/");
            }}
            size="3rem"
            bold
            color="#ffffee"
            cursor
          >
            Tada Riding
          </Text>
          <Grid isFlex>
            <Button
              isShadow
              margin="0px 30px"
              padding="20px 10px"
              backgroundColor="#ffffee"
              _onClick={() => {
                history.push("/mypage");
              }}
            >
              <Text size="1.2rem">마이페이지</Text>
            </Button>
            <Button
              isShadow
              padding="20px 10px"
              backgroundColor="#ffffee"
              _onClick={() => {
                dispatch(userActions.LogOut());
              }}
            >
              <Text size="1.2rem">로그아웃</Text>
            </Button>
          </Grid>
        </Grid>
      </>
    );
  }

  return (
    // 로그인 안 했을 때 헤더
    <>
      <Grid isFlex width="100%" height="12vh" padding="0px 10%" bg="#afc2cb">
        <Text
          _onClick={() => {
            history.push("/");
          }}
          size="3rem"
          bold
          color="#ffffee"
          cursor
        >
          Tada Riding
        </Text>
        <Grid isFlex>
          <Button
            isShadow
            margin="0px 30px"
            padding="20px 10px"
            backgroundColor="#ffffee"
            _onClick={() => {
              history.push("/login");
            }}
          >
            <Text size="1.2rem">로그인</Text>
          </Button>

          {/* </Button> */}
          <Button
            isShadow
            margin="0px 30px"
            padding="20px 10px"
            backgroundColor="#ffffee"
            _onClick={() => {
              history.push("/signup");
            }}
          >
            <Text size="1.2rem">회원가입</Text>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
// 로그인 했을 때 헤더

export default Header;
