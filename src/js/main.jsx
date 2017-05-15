// src/main.jsx
import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

import MemoHeader from './components/memo_header.jsx';
import MemoList from './components/memo_list.jsx';
import MemoEdit from './components/memo_edit.jsx';
import MemoConfirm from './components/memo_confirm.jsx';

var memoListData = [
    {modified: '2017/04/15', title: 'たいとる1', body: '内容1', favorite: false},
    {modified: '2017/05/15', title: 'たいとる2', body: '内容2', favorite: true},
    {modified: '2017/05/15', title: 'たいとる2', body: '内容2', favorite: true},
    {modified: '2017/05/15', title: 'たいとる2', body: '内容2', favorite: true},
    {modified: '2017/05/15', title: 'たいとる2', body: '内容2', favorite: true},
    {modified: '2017/05/15', title: 'たいとる2', body: '内容2', favorite: true},
    {modified: '2017/05/15', title: 'たいとる2', body: '内容2', favorite: true},
    {modified: '2017/05/15', title: 'たいとる2', body: '内容2', favorite: true},
    {modified: '2017/06/15', title: 'たいとる3', body: '内容3', favorite: false},
    {modified: '2017/06/15', title: 'たいとる3', body: '内容3', favorite: false},
    {modified: '2017/06/15', title: 'たいとる3', body: '内容3', favorite: false},
    {modified: '2017/06/15', title: 'たいとる3', body: '内容3', favorite: false},
    {modified: '2017/06/15', title: 'たいとる3', body: '内容3', favorite: false},
    {modified: '2017/06/15', title: 'たいとる3', body: '内容3', favorite: false},
    {modified: '2017/06/15', title: 'たいとる3', body: '内容3', favorite: false},
];

class MemoBook extends Component {

    constructor(props) {
        super(props);

        //init state
        this.state = {
            memoListData: memoListData,
            isShownEdit: false,
            isShownConfirm: false,
            memoObj: {}
        };

        this.handleMemoFuncs = {
            showEdit: (obj) => this.showEdit(obj),
            closeEdit: () => this.closeEdit(),
            showConfirm: () => this.showConfirm()
        }
    }

    render () {
        return (
            <div>
                <MemoHeader funcs={this.handleMemoFuncs} />
                <MemoList data={this.state.memoListData} funcs={this.handleMemoFuncs} />
                <MemoEdit isShown={this.state.isShownEdit} memo={this.state.memoObj} />
            </div>
        )
    }

    showEdit(obj) {
        this.setState({isShownEdit: true, memoObj: obj });
    }

    closeEdit() {
        this.setState({isShownEdit: false });
    }

    showConfirm() {
        this.setState({isShownConfirm: true});
    }
}

render(
    <MemoBook />,
    document.getElementById('memo_wrapper')
);

//debug
window.Perf = require('react-addons-perf');