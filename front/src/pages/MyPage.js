import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { Grid, Text } from "../elements/index.js";
import Post from "../components/Post";
import apis from "../lib/apis.js";

const MyPage = (props) => {
  const userUid = useSelector((state) =>
    state.user.userInfo ? state.user.userInfo.userUid : ""
  );

  const [myRiding, setMyRiding] = React.useState("");
  const [myPost, setMyPost] = React.useState("");

  React.useEffect(() => {
    async function fetchMyData() {
      const res = await apis.getMyPage(userUid);
      setMyRiding(res.data.user.participatedPost);
      setMyPost(res.data.writingPosts);
    }
    fetchMyData();
  }, []);

  return (
    <Grid margin="40px">
      {/* 내가 참여한 게시물 */}
      <Text align="center" size="30px" bold>
        내가참여한 라이딩
      </Text>
      <Grid mainFlex width="1350px" margin=" 0px auto 40px" wrap>
        {myRiding.map((r) => {
          return <Post {...r} key={r.postUid} basis="30%" isMe />;
        })}
      </Grid>

      {/* 내가 작성한 게시물 */}
      <Line />
      <Grid margin="50px 0px 0px">
        <Text align="center" size="30px" bold>
          내가 작성한 게시물
        </Text>
        <Grid mainFlex width="1350px" margin="0px auto 40px" wrap>
          {myPost.map((p) => {
            return <Post {...p} key={p.postUid} basis="30%" isMe />;
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

const Line = styled.hr`
  border-top: 1px solid #bbb;
`;

export default MyPage;
