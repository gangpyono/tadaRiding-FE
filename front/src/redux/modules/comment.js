import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import moment from "moment";

// actions
const SET_COMMENT = "SET_COMMENT";
const LOADING = "LOADING";

// action creators
const setComment = createAction(SET_COMMENT, (post_id, comment_list) => ({
  post_id,
  comment_list,
}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

// initialState
const initialState = {
  list: {},
  is_loading: false,
};
//middelware actions
const getCommentFB = (post_id) => {
  return function (dispatch, getState, { history }) {};
};

//reducer
export default handleActions(
  {
    [SET_COMMENT]: (state, action) => produce(state, (draft) => {}),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  getCommentFB,
  setComment,
};

export { actionCreators };
