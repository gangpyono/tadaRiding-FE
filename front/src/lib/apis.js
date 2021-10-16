import axios from "axios";

const USER_TOKEN = sessionStorage.getItem("USER_TOKEN");
const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: "http://52.79.249.178/",
});

instance.interceptors.request.use(
  function (config) {
    // 1. 요청 보내기 전에 실행
    // store의 토큰 값 설정
    config.headers.Authorization = `Bearer ${USER_TOKEN}`;
    return config;
  },
  function (error) {
    // Do something with request error
    console.log("err");
    return Promise.reject(error);
  }
);

export const apis = {
  // 회원가입 요청
  signUp: (userInfo) => instance.post("/api/users/register", userInfo),
  // 로그인
  login: (userInfo) => instance.post("/api/users/auth", userInfo),
  // 로그인 체크
  loginCheck: () => instance.get("/api/users/:userUid/validation"),
  // 게시물 불러오기
  getPost: () => instance.get("/", {}),
  // 게시물 작성하기
  addPost: (contents) => instance.post("/api/posts", contents),
  // 게시물 수정하기
  editPost: (id, content) => instance.put(`/api/posts/${id}`, content),
  // 게시물 삭제하기
  deletePost: (id) => instance.delete(`/api/posts/${id}`),

  // 댓글 추가
  addComment: (comment, id) => instance.post(`/api/posts/${id}/comments/`, comment),
  deleteComment: (postUid, commentUid) =>
    instance.delete(`/api/posts/${postUid}/comments/${commentUid}`),
  // 좋아요 추가
  addLike: (id) => instance.post(`/api/likes/${id}`),
  // 좋아요 취소
  deleteLike: (id) => instance.delete(`/api/likes/${id}`),

  getPostDetail: (id) => instance.get(`/posts/${id}`),
};

export default apis;
