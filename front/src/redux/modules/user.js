import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// actions
const LOG_IN = "LOG_IN";

// action creators
const logIn = createAction(LOG_IN, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

//middelware actions
const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {};
};

//reducer
export default handleActions(
  {
    [LOG_IN]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//action creator export
const actionCreators = {
  logIn,
  loginFB,
};

export { actionCreators };
