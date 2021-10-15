import axios from "axios";

const USER_TOKEN = sessionStorage.getItem("USER_TOKEN");
const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: "http://localhost:5000/",
  headers: {
    Authorization: `Bearer ${USER_TOKEN}`,
    // "content-type": "application/json;charset=UTF-8",
    // accept: "application/json",
  },
});

export const apis = {
  // 회원가입 요청
  signUp: (userInfo) => instance.post("/api/users/register", userInfo),
  // 로그인
  login: (userInfo) => instance.post("/api/users/auth", userInfo),
  // 로그인 체크
  loginCheck: () => instance.get("/api/users/:userUid/validation"),
  // 게시물 불러오기
  getPost: () => instance.get("/"),
  // 게시물 작성하기
  addPost: (contents) => instance.post("/api/posts", contents),
  // 게시물 수정하기
  editPost: (id, content) => instance.put(`/api/posts/${id}`, content),
  // 게시물 삭제하기
  deletePost: (id) => instance.delete(`/api/posts/${id}`),
  // 좋아요 토글
  toggleLike: (id) => instance.post(`/api/likes/${id}`),
  // 상세 페이지 불러오기
  getDetail: (id) => instance.get(`/posts/${id}`),
  // 댓글 추가
  addComment: (comment, id) =>
    instance.post(`/api/posts/${id}/comments/`, comment),
  deleteComment: (postUid, commentUid) =>
    instance.delete(`/api/posts/${postUid}/comments/${commentUid}`),
};

instance.defaults.headers.common["Authorization"] = USER_TOKEN;

export default apis;
