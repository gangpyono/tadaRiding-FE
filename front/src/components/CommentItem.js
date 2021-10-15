import React from "react";
import styled from "styled-components";
// elements
import { Grid, Text, Button } from "../elements";
// icon
import DeleteIcon from "@mui/icons-material/Delete";
// hooks
import { useDispatch } from "react-redux";

const CommentItem = (props) => {
  const dispatch = useDispatch();

  return (
    <Grid margin="0px 0px 50px 0px">
      <Grid isFlex>
        <Text size="1em">
          {props.userUid}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {props.commentDate}
        </Text>
        <Button borderRadius="15px" backgroundColor="transparent" width="30px">
          <DeleteIcon
            onclick={() => {
              dispatch();
            }}
          />
        </Button>
      </Grid>
      <Text size="1em" width="100%" padding="20px 0px 10px 0px">
        {props.commentDesc}
      </Text>
      <Line />
    </Grid>
  );
};

const Line = styled.hr`
  border-top: 1px solid #bbb;
`;

export default CommentItem;
