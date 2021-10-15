import React from "react";
import { Grid } from "../elements/index.js";
// redux
//moment

const CommentList = (props) => {
  // const createAt = moment().format("YYYY-MM-DD"); //작성된 시점의 시간을 보냄

  // const listAddComment = () => {
  //   if (!is_login) {
  //     if (window.confirm("로그인창으로 이동합니다")) {
  //       history.push("/login");
  //     }
  //   }
  // };
  console.log(props);
  return (
    <React.Fragment>
      <Grid width="100%" padding="55px" margin="20px 0px">
        {/* {props.map((c) => {
          return <CommentItem key={c.id} {...c} />;
        })} */}
      </Grid>
    </React.Fragment>
  );
};

export default CommentList;
