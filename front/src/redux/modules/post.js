import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { ArrowForwardTwoTone } from "@mui/icons-material";
import moment from "moment";

import { apis } from "../../lib/apis";

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
const toggleLike = createAction(TOGGLE_LIKE, (postUid, likeCnt) => ({
  postUid,
  likeCnt,
}));

// initialState
const initialState = {
  list: [
    {
      postState: true,
      postUid: "9d773f60-2b87-11ec-84a6-a5190298305d",
      postTitle: "오늘 춘천 어때?",
      postDesc: "강원도 춘천이 굉장히 공기가 좋고 자전거 도로가...",
      postImage:
        "https://www.dailysecu.com/news/photo/202104/123449_145665_1147.png",
      postRegister: "c7592940-2b75-11ec-a5f6-d11c3508bb61",
      postDate: "21.10.12",

      origin: "경기도 용인시 기흥구 구갈로",
      destination: "경원도 춘천시",

      limitedUserNum: 4,

      postLikeCnt: 1,
      startTime: "08:00",

      participants: [
        "c7592940-2b75-11ec-a5f6-d11c3508bb61",
        "c7592940-2b75-11ec-a5f6-d11c3508bb61",
        "c7592940-2b75-11ec-a5f6-d11c3508bb61",
      ],

      comments: [
        {
          commentUid: "68409720-2cbc-11ec-b031-0bdc728474da",
          userUid: "c7592940-2b75-11ec-a5f6-d11c3508bb61",
          commentDesc: "오늘 하루는 좋은 일들로만 가득했 좋겠네여 ㅎㅎ.",
          commentDate: "21.10.11",
        },
      ],
    },
  ],
};

//middelware actions
const loadPostMiddleware = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getPost()
      .then((res) => {
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
        const post = res.data.post;
        dispatch(addPost(post));
        window.alert(res.data.msg);
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
        window.alert(res.msg);
        dispatch(deletePost(postUid));
      })
      .catch(() => {
        window.alert("게시물 삭제에 실패하였습니다.");
      });
  };
};

const toggleLikeMiddleware = (postUid) => {
  return function (dispatch, getState, { history }) {
    // const user = getState.user.user;

    apis.toggleLike(postUid).then((res) => {
      const likeCnt = res.data.postLikeCnt;
      if (res.data.likeState) {
        dispatch(toggleLike(postUid, likeCnt));
      } else {
        dispatch(toggleLike(postUid, likeCnt));
      }
    });
  };
};

const getOnePostMiddleware = (postUid) => {
  return function (dispatch, getState, { history }) {};
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
        const idx = draft.list.findIndex(
          (p) => p.postUid === action.payload.post.postUid
        );
        draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
      }),

    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        const idx = draft.list.findIndex(
          (p) => p.postUid === action.payload.postUid
        );
        draft.list.splice(idx, 1);
      }),

    [TOGGLE_LIKE]: (state, action) =>
      produce(state, (draft) => {
        const idx = draft.list.findIndex(
          (p) => p.postUid === action.payload.postUid
        );
        draft.list[idx].postLikeCnt = action.payload.likeCnt;
      }),
  },
  initialState
);

//action creator export
const actionCreators = {
  toggleLike,
  loadPostMiddleware,
  addPostMiddleware,
  updatePostMiddleware,
  deletePostMiddleware,
  toggleLikeMiddleware,
};

export { actionCreators };
