import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";
import { apis } from "../../lib/apis";

// import moment from "moment";

// actions
const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";

// action creators
const setComment = createAction(SET_COMMENT, (post_id, comment_list) => ({
  post_id,
  comment_list,
}));
const addComment = createAction(ADD_COMMENT, (post_id, comment) => ({
  post_id,
  comment,
}));

const initialState = {
  list: [],
};

const initialComment = {
  commentUid: "68f58f40",
  userUid: "Jay",
  commentDesc: "오늘 하루는 좋은 일들로만 가득했으면 좋겠",
  commentDate: "21.10.11",
};

const getCommentDB = (post_id) => {
  return (dispatch, getState, { history }) => {
    // if (!post_id) {
    //   return;
    // }
    apis
      .getComment()
      .then((res) => {
        console.log(res.data);
        const comment_list = res.data;
        dispatch(setComment(comment_list));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//middelware actions
// const getCommentFB = (post_id) => {
//   return function (dispatch, getState, { history }) {};
// };

//reducer
export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.postUid] = action.payload.list;
      }),
    // [SET_COMMENT]: (state, action) =>
    //   produce(state, (draft) => {
    //     // console.log(action.payload);
    //     // draft.list = action.payload.list;
    //   }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        // draft.list[action.payload.postUid].unshift(action.payload.comment);
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  getCommentDB,
  setComment,
  addComment,
};

export { actionCreators };
