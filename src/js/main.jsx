// src/main.jsx
import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

import MemoHeader from './components/memo_header.jsx';
import MemoList from './components/memo_list.jsx';
import MemoEdit from './components/memo_edit.jsx';
import MemoConfirm from './components/memo_confirm.jsx';
import MemoApi from './memo_api.js';

var memoApi;

class MemoBook extends Component {

    constructor(props) {
        super(props);

        //init state
        this.state = {
            memoListData: this.props.data,
            isShownEdit: false,
            isShownConfirm: false,
            memoObj: {}
        };

        this.handleMemoFuncs = {
            showEdit: (obj) => this.showEdit(obj),
            closeEdit: () => this.closeEdit(),
            showConfirm: () => this.showConfirm(),
            updateMemoList: () => this.updateMemoList()
        }
    }

    render () {
        return (
            <div>
                <MemoHeader funcs={this.handleMemoFuncs} />
                <MemoList data={this.state.memoListData} funcs={this.handleMemoFuncs} />
                <MemoEdit isShown={this.state.isShownEdit} memo={this.state.memoObj} funcs={this.handleMemoFuncs} />
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

    updateMemoList() {
        memoApi
        .getMemoList()
        .then(
            (data) => {
                this.setState({memoListData: data});
                this.setState({isShownEdit: false });
            }
        );
    }
}


//init
document.addEventListener('DOMContentLoaded', function() {
    //メモ一覧を取得
    memoApi = new MemoApi();

    memoApi
        .getMemoList()
        .then(
            (data) => {
                render(
                    <MemoBook data={data['error'] ? null : data}/>,
                    document.getElementById('memo_wrapper')
                )
            }
        );
});


//debug
window.Perf = require('react-addons-perf');
