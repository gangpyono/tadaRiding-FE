import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
// axios module
import apis from "../../lib/apis";

// actions
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// action creators
const setUser = createAction(SET_USER, (user) => ({ user })); // 유저정보를 리덕스에 저장하는 액션
const logOut = createAction(LOG_OUT, () => ({}));
const getUser = createAction(GET_USER, () => ({}));

// initialState
const initialState = {
  userInfo: {
    userUid: "",
    userNickname: "",
  },
  isLogin: false,
  myRidingList: [],
  myPostList: [],
};

// 회원가입 요청
const SignUpDB = (userInfo) => {
  return function (dispatch, getState, { history }) {
    apis
      .signUp(userInfo)
      .then((res) => {
        if (res.data.msg === "성공적으로 회원 가입이 완료 되었습니다.") {
          window.alert(res.data.msg);
          history.push("/");
          return;
        }
        window.alert(res.data.msg);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// 로그인
const LoginDB = (userInfo) => {
  return function (dispatch, getState, { history }) {
    apis
      .login(userInfo)
      .then((res) => {
        const USER_TOKEN = res.data.token;

        sessionStorage.setItem("USER_TOKEN", USER_TOKEN);
        dispatch(
          setUser({
            userUid: res.data.userUid,
            userNickname: res.data.userNickname,
          })
        );
      })
      .then(() => {
        window.alert("성공적으로 로그인되었습니다. 😆");
        history.push("/");
      })
      .catch(() => window.alert("로그인 정보가 존재하지 않습니다!"));
  };
};

const LogOut = () => {
  return function (dispatch, getState, { history }) {
    sessionStorage.removeItem("USER_TOKEN");
    dispatch(logOut());
    window.alert("로그아웃 되었습니다!");
    history.push("/");
  };
};

const LoginCheckDB = () => {
  return function (dispatch) {
    apis.loginCheck().then((res) => {
      if (res.data.success === true) {
        dispatch(
          setUser({
            userNickname: res.data.userNickname,
            userUid: res.data.userUid,
          })
        );
      } else {
        dispatch(logOut());
      }
    });
  };
};

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.userInfo = action.payload.user;
        draft.isLogin = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.userInfo = {
          userNickname: "",
          userUid: "",
        };
        draft.isLogin = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//action creator export
const actionCreators = {
  getUser,
  SignUpDB,
  LoginDB,
  LogOut,
  LoginCheckDB,
};

export { actionCreators };
