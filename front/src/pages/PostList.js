import React from "react";
import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux";

import { Grid, Button } from "../elements/index.js";
//actions
import { actionCreators as postActions } from "../redux/modules/post";

const PostList = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postActions.loadPostMiddleware());
  }, []);

  const list = useSelector((state) => state.post.list);
  const userUid = useSelector((state) => state.user.userInfo.userUid);

  return (
    <>
      <Grid mainFlex width="1300px" margin=" 100px auto 0px" wrap>
        {list.map((p) => {
          if (p.postRegister === userUid) {
            return <Post key={p.postUid} {...p} basis="30%" isMe />;
          } else {
            return <Post key={p.postUid} {...p} basis="30%" />;
          }
          // return <Post key={p.postUid} {...p} basis="30%" isMe />;
        })}

        {/* permit */}
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
        {/* permit */}
      </Grid>
    </>
  );
};

export default PostList;
