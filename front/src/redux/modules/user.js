import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
// axios module
import apis from "../../lib/apis";

// actions
const SET_USER = "SET_USER";
const GET_USER = "GET_USER";
const LOG_OUT = "LOG_OUT";
const LOAD_MY_RIDING = "LOAD_MY_RIDING";
const LOAD_MY_POST = "LOAD_MY_POST";

// action creators
const setUser = createAction(SET_USER, (user) => ({ user })); // 유저정보를 리덕스에 저장하는 액션
const getUser = createAction(GET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, () => ({}));
const loadMyRiding = createAction(LOAD_MY_RIDING, () => ({}));
const loadMyPost = createAction(LOAD_MY_POST, () => ({}));

// initialState
const initialState = {
  userInfo: {},
  isLogin: false,
  // myRidingList: [],
  // myPostList: [],
};

//middelware actions

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
      })
      .then(() => {
        dispatch(setUser(userInfo));
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
    history.replace("/");
  };
};

const LoginCheckDB = () => {
  return function (dispatch) {
    apis.loginCheck().then((res) => {
      // console.log(res);

      if (res.data.success === true) {
        // console.log(res);
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
        draft.userInfo = null;
        draft.isLogin = false;
      }),
  },
  initialState
);

//action creator export
const actionCreators = {
  SignUpDB,
  LoginDB,
  LogOut,
  LoginCheckDB,
};

export { actionCreators };
