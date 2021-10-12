import React from 'react';

import { Grid, Button, Text, Image } from '../elements/index.js';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Post = (props) => {
  return (
    <Grid bg="Yellow" center width="300px" padding="10px">
      <Text align="center" margin="20px">
        동료 모집합니다
      </Text>
      <Grid margin="0px 20px 20px 20px">
        <Image></Image>
      </Grid>

      <Text>강남: 강북</Text>

      <Grid>
        <Grid border="solid 1px black" isFlex>
          <Text>작성자 : 아무개</Text>
          <Text size="13px">좋아요 : 1개</Text>
          <Button>
            <FavoriteBorderIcon />
          </Button>
        </Grid>

        <Grid border="solid 1px black">
          <Text>작성일 : 2021.10.12</Text>
          <Text>인원수 : 5/10</Text>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Post;
