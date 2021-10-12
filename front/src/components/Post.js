import React from 'react';

import { Grid, Button, Text, Image } from '../elements/index.js';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Post = (props) => {
  return (
    <Grid bg="Yellow" center margin="5px" flexBasis="30%">
      <Text align="center" margin="20px">
        동료 모집합니다.
      </Text>
      <Grid margin="0px 20px 20px 20px">
        <Image></Image>
      </Grid>

      <Text>강남 → 강북</Text>

      <Grid padding="14px">
        <Grid isFlex padding="10px">
          <Text>작성자 : 아무개</Text>
          <Grid isFlex padding="10px">
            <Text size="4px">좋아요 : 1개</Text>
            <Button
              width="12px"
              backgroundColor="transparent"
              borderRadius="0px"
              padding="0px"
            >
              <FavoriteBorderIcon />
            </Button>
          </Grid>
        </Grid>

        <Grid isFlex padding="10px">
          <Text>작성일 : 2021.10.12</Text>
          <Text>인원수 : 5/10</Text>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Post;
