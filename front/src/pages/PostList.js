import React from "react";
import Post from "../components/Post";
import { useSelector } from "react-redux";

import { Grid, Button } from "../elements/index.js";

const PostList = (props) => {
  const { history } = props;
  const list = useSelector((state) => state.post.list);

  return (
    <>
      <Grid mainFlex width="1300px" margin=" 100px auto 0px" wrap>
        {list.map((p) => {
          // if (p.postRegister === userUid) {
          //   return <Post key={p.postUid} {...p} basis="30%" isMe />;
          // } else {
          //   return <Post key={p.postUid} {...p} basis="30%" />;
          // }
          return <Post key={p.postUid} {...p} basis="30%" isMe />;
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
