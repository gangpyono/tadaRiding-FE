import React from "react";
import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux";

import Permit from "../shared/Permit";
import { Grid, Button } from "../elements/index.js";
import { actionCreators as postActions } from "../redux/modules/post";
import { apis } from "../lib/apis";

const PostList = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  // const [pressedPosts, setPressedPosts] = React.useState([]);
  const userInfo = useSelector((state) => state.user.userInfo);

  React.useEffect(() => {
    //백엔드에서 리스트 받아오기
    async function fetchData() {
      const res = await apis.getPost();
      dispatch(postActions.loadPost(res.data.posts));
      // setPressedPosts(res.data.pressedPosts);
    }
    fetchData();
  }, []);

  const list = useSelector((state) => (state.post.list ? state.post.list : ""));
  console.log(list);
  const userUid = useSelector((state) => state.user.userInfo.userUid);

  // if (list.length === 0) return null;
  console.log(list);
  return (
    <>
      <Grid mainFlex width="1300px" margin=" 100px auto 0px" wrap>
        {list.map((p) => {
          if (p.postRegister === userInfo.userNickname) {
            return <Post key={p.postUid} {...p} basis="30%" isMe />;
          } else {
            return <Post key={p.postUid} {...p} basis="30%" />;
          }
          // return <Post key={p.postUid} {...p} basis="30%" isMe />;
        })}

        <Button
          isFloat="fixed"
          size="30px"
          backgroundColor="#4ba3c7"
          _onClick={() => {
            history.push("/PostWrite");
          }}
        >
          +
        </Button>
      </Grid>
    </>
  );
  // console.log(pressedPosts);
  // apis
  //   .getPost()
  //   .then((res) => {
  //     pressedList = res.data.pressedPosts;
  //     const postList = res.data.posts;
  //     dispatch(postActions.loadPost(postList));
  //   })
  //   .catch(() => {
  //     window.alert("게시물불러오기에 실패하였습니다.");
  //   });
};

export default PostList;
