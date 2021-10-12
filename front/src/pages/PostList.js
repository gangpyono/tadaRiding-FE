import React from 'react';
import Post from '../components/Post';

import { Grid } from '../elements/index.js';

const PostList = (props) => {
  const list = [
    {
      userID: 'gangpyo',
      title: '동료 모집합니다.',
      maxPeople: 10,
      start: '강남',
      arrive: '경북',
      photoURL: '',
      period: '',
      content: '',
      likeCnt: 10,
      likeState: false,
      date: '2021.10.11',
    },
    {
      userID: 'gangpyo',
      title: '동료 모집합니다.',
      maxPeople: 10,
      start: '강남',
      arrive: '경북',
      photoURL: '',
      period: '',
      content: '',
      likeCnt: 10,
      likeState: false,
      date: '2021.10.11',
    },
    {
      userID: 'gangpyo',
      title: '동료 모집합니다.',
      maxPeople: 10,
      start: '강남',
      arrive: '경북',
      photoURL: '',
      period: '',
      content: '',
      likeCnt: 10,
      likeState: false,
      date: '2021.10.11',
    },
    {
      userID: 'gangpyo',
      title: '동료 모집합니다.',
      maxPeople: 10,
      start: '강남',
      arrive: '경북',
      photoURL: '',
      period: '',
      content: '',
      likeCnt: 10,
      likeState: false,
      date: '2021.10.11',
    },
    {
      userID: 'gangpyo',
      title: '동료 모집합니다.',
      maxPeople: 10,
      start: '강남',
      arrive: '경북',
      photoURL: '',
      period: '',
      content: '',
      likeCnt: 10,
      likeState: false,
      date: '2021.10.11',
    },
    {
      userID: 'gangpyo',
      title: '동료 모집합니다.',
      maxPeople: 10,
      start: '강남',
      arrive: '경북',
      photoURL: '',
      period: '',
      content: '',
      likeCnt: 10,
      likeState: false,
      date: '2021.10.11',
    },
    {
      userID: 'gangpyo',
      title: '동료 모집합니다.',
      maxPeople: 10,
      start: '강남',
      arrive: '경북',
      photoURL: '',
      period: '',
      content: '',
      likeCnt: 10,
      likeState: false,
      date: '2021.10.11',
    },
    {
      userID: 'gangpyo',
      title: '동료 모집합니다.',
      maxPeople: 10,
      start: '강남',
      arrive: '경북',
      photoURL: '',
      period: '',
      content: '',
      likeCnt: 10,
      likeState: false,
      date: '2021.10.11',
    },
  ];

  return (
    <>
      <Grid isFlex width="1300px" margin="auto" wrap>
        {list.map((p) => {
          return <Post />;
        })}
      </Grid>
    </>
  );
};

export default PostList;
