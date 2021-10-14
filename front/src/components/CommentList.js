import React from "react";
import styled from "styled-components";
import { Grid, Text, Button } from "../elements/index.js";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";

//modules
import comment, {
  actionCreators as cmtActions,
} from "../redux/modules/comment";

//moment
import moment from "moment";

const CommentList = (props) => {
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.comment.list);
  console.log(comment_list);
  // const product_list = useSelector((state) => state.product.product_list);

  const { postUid } = props;

  const createAt = moment().format("YYYY-MM-DD"); //작성된 시점의 시간을 보냄

  // React.useEffect(() => {
  //   if (!comment_list[postUid]) {
  //     dispatch(cmtActions.getCommentDB(postUid));
  //   }
  // }, []);

  // if (!comment_list[postUid] || postUid) {
  //   return null;
  // }

  // const listAddComment = () => {
  //   if (!is_login) {
  //     if (window.confirm("로그인창으로 이동합니다")) {
  //       history.push("/login");
  //     }
  //   }
  // };
  // console.log(comment_list[postUid]);
  return (
    <React.Fragment>
      <Grid width="100%" padding="55px" margin="20px 0px">
        {comment_list.map((c) => {
          return <CommentItem key={c.id} {...c} />;
        })}
        <CommentItem />
      </Grid>
    </React.Fragment>
  );
};

const CommentItem = (props) => {
  return (
    <Grid margin="0px 0px 50px 0px">
      <Grid isFlex>
        <Text size="1em">
          {props.userUid}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {props.commentDate}
        </Text>
        <Button borderRadius="15px" backgroundColor="transparent" width="30px">
          <DeleteIcon />
        </Button>
      </Grid>
      <Text size="1em" width="100%" padding="20px 0px 10px 0px">
        {props.commentDesc}
      </Text>
      <Line />
    </Grid>
  );
};

CommentItem.defaultProps = {
  userUid: "Jay",
  commentDesc: "여기가 최고야",
  commentDate: "2021-10-13 18:39:12",
};

const Line = styled.hr`
  border-top: 1px solid #bbb;
`;

export default CommentList;
