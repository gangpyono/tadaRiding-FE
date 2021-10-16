import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { ArrowForwardTwoTone, CollectionsBookmarkOutlined } from "@mui/icons-material";
import moment from "moment";

import { apis } from "../../lib/apis";
import { appendOwnerState } from "@mui/core";

// actions
const LOAD_POST = "LOAD_POST";
const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";
const DELETE_POST = "DELETE_POST";
const TOGGLE_LIKE = "UPDATE_LIKE";

// action creators
const loadPost = createAction(LOAD_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const updatePost = createAction(UPDATE_POST, (post) => ({ post }));
const deletePost = createAction(DELETE_POST, (postUid) => ({ postUid }));
const toggleLike = createAction(TOGGLE_LIKE, (postUid, likeState) => ({ postUid, likeState }));

// initialState
const initialState = {
  list: [
    {
      postUid: "9d773f60-2b87-11ec-84a6-a5190298305d",
      postTitle: "테스트 해보자",
      postDesc: "테스트 설명!!",
      postDate: "21.10.12",
      postRegister: "jongwan",
      origin: "부산",
      destination: "서울 강남구",
      likeState: false,
      postState: false,
      postImage: "aasdasdd/asd.png",
      limitedUserNum: 4,
      postLikeCnt: 0,
      startTime: "09:00",
      attendUserNicknames: ["asdasdsad", "jongwan", "gangpyo"],
    },
  ],
};

//middelware actions
const loadPostMiddleware = () => {
  return function (dispatch, getState, { history }) {
    // try {
    //   const res = await apis.getPost();
    //   const [posts, pressedPosts] = res.data;
    //   dispatch(loadPost(posts));
    //   return pressedPosts;
    // } catch (error) {
    //   window.alert(error, "게시물을 받아오는데 실패하였습니다.");
    // }

    apis
      .getPost()
      .then((res) => {
        console.log(res.data);
        const postList = res.data.posts;
        dispatch(loadPost(postList));
      })
      .catch(() => {
        window.alert("게시물불러오기에 실패하였습니다.");
      });
  };
};

const addPostMiddleware = (post) => {
  return function (dispatch, getState, { history }) {
    apis
      .addPost(post)
      .then((res) => {
        dispatch(addPost(post));
        window.alert(res.data.msg);
        history.replace("/");
      })
      .catch(() => {
        window.alert("게시물작성에 실패하였습니다.");
      });
  };
};

const updatePostMiddleware = (postUid, post) => {
  return function (dispatch, getState, { history }) {
    apis
      .editPost(postUid, post)
      .then((res) => {
        dispatch(updatePost(post));
        window.alert(res.data.msg);
      })
      .then(() => {
        history.replace("/");
      })
      .catch(() => {
        window.alert("게시물 수정에 실패하였습니다.");
      });
  };
};

const deletePostMiddleware = (postUid) => {
  return function (dispatch, getState, { history }) {
    apis
      .deletePost(postUid)
      .then((res) => {
        window.alert(res.data.msg);
        dispatch(deletePost(postUid));
      })
      .catch(() => {
        window.alert("게시물 삭제에 실패하였습니다.");
      });
  };
};

const toggleLikeMiddleware = (postUid, likeState) => {
  return function (dispatch, getState, { history }) {
    if (likeState) {
      apis
        .addLike(postUid)
        .then((res) => {
          window.alert(res.data.msg);
          dispatch(toggleLike(postUid, likeState));
        })
        .catch(() => {
          window.alert("좋아요 실패");
        });
    } else {
      apis
        .deleteLike(postUid)
        .then((res) => {
          window.alert(res.data.msg);
          dispatch(toggleLike(postUid, likeState));
        })
        .catch(() => {
          window.alert("좋아요 실패");
        });
    }
  };
};

//reducer
export default handleActions(
  {
    [LOAD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.post);
      }),

    [UPDATE_POST]: (state, action) =>
      produce(state, (draft) => {
        const idx = draft.list.findIndex((p) => p.postUid === action.payload.post.postUid);
        draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
      }),

    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        const idx = draft.list.findIndex((p) => p.postUid === action.payload.postUid);
        draft.list.splice(idx, 1);
      }),

    [TOGGLE_LIKE]: (state, action) =>
      produce(state, (draft) => {
        const idx = draft.list.findIndex((p) => p.postUid === action.payload.postUid);
        if (action.payload.likeState) {
          draft.list[idx].postLikeCnt = draft.list[idx].postLikeCnt + 1;
          draft.list[idx].likeState = true;
        } else {
          draft.list[idx].postLikeCnt = draft.list[idx].postLikeCnt - 1;
          draft.list[idx].likeState = false;
        }
      }),
  },
  initialState
);

//action creator export
const actionCreators = {
  loadPost,
  loadPostMiddleware,
  addPostMiddleware,
  updatePostMiddleware,
  deletePostMiddleware,
  toggleLikeMiddleware,
};

export { actionCreators };
