// src/main.jsx
import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

import MemoList from './components/memo_list.jsx';

var memoListData = [
    {modified: '2017/04/15', title: 'たいとる1', body: '内容1', favorite: false},
    {modified: '2017/05/15', title: 'たいとる2', body: '内容2', favorite: true},
    {modified: '2017/05/15', title: 'たいとる2', body: '内容2', favorite: true},
    {modified: '2017/05/15', title: 'たいとる2', body: '内容2', favorite: true},
    {modified: '2017/05/15', title: 'たいとる2', body: '内容2', favorite: true},
    {modified: '2017/05/15', title: 'たいとる2', body: '内容2', favorite: true},    {modified: '2017/05/15', title: 'たいとる2', body: '内容2', favorite: true},
    {modified: '2017/05/15', title: 'たいとる2', body: '内容2', favorite: true},
    {modified: '2017/06/15', title: 'たいとる3', body: '内容3', favorite: false},
];

render(
  <MemoList data={memoListData} />,
  document.getElementById('memo_main')
);

