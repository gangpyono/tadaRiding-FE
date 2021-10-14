import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// actions
const SET_POST = "SET_POST";

// action creators
const setPost = createAction(SET_POST, (post_list, paging) => ({
  post_list,
  paging,
}));

// initialState
const initialState = {
  list: [],
};

//middelware actions
const getPostFB = () => {
  return function (dispatch, getState, { history }) {};
};

//reducer
export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//action creator export
const actionCreators = {
  setPost,
};

export { actionCreators };
