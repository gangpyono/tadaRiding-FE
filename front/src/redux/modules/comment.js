import { apis } from "../../lib/apis";

const addCommentDB = (comment, id) => {
  apis
    .addComment(comment, id)
    .then((res) => {
      if (res.data.msg === "성공적으로 댓글이 등록되었습니다.") {
        console.log("댓글이 추가되었습니다.");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteCommentDB = (postUid, commentUid) => {
  apis
    .deleteComment(postUid, commentUid)
    .then(() => {
      window.alert("댓글이 삭제되었습니다.");
    })
    .catch((err) => console.log(err));
};

export { addCommentDB, deleteCommentDB };
