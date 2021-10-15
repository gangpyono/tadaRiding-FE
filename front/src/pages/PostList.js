import React from "react";
import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux";

import Permit from "../shared/Permit";
import { Grid, Button } from "../elements/index.js";
//actions
import post, { actionCreators as postActions } from "../redux/modules/post";

const PostList = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postActions.loadPostMiddleware());
  }, []);

  const list = useSelector((state) => (state.post.list ? state.post.list : ""));
  console.log(list);
  const userUid = useSelector((state) => state.user.userInfo.userUid);

  return (
    <>
      <Grid mainFlex width="1300px" margin=" 100px auto 0px" wrap>
        {userUid && list.postRegister
          ? list.map((p) => {
              console.log(p.postRegister);
              if (p.postRegister === userUid) {
                return <Post key={p.postUid} {...p} basis="30%" isMe />;
              } else {
                return <Post key={p.postUid} {...p} basis="30%" />;
              }
              // return <Post key={p.postUid} {...p} basis="30%" isMe />;
            })
          : list.map((p) => {
              return <Post key={p.postUid} {...p} basis="30%" />;
            })}

        <Permit>
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
        </Permit>
      </Grid>
    </>
  );
};

export default PostList;
