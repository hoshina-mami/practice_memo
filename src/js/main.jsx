// src/main.jsx
import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import request from 'superagent';

import MemoHeader from './components/memo_header.jsx';
import MemoList from './components/memo_list.jsx';
import MemoEdit from './components/memo_edit.jsx';
import MemoConfirm from './components/memo_confirm.jsx';
import MemoApi from './memo_api.js';


var memoListData = [];

var memoApi = null;

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


//init
document.addEventListener('DOMContentLoaded', function() {
    //メモ一覧を取得
    memoApi = memoApi || new MemoApi();

    memoApi
        .getMemoList()
        .then(
            (data) => {
                render(
                    <MemoBook data={data}/>,
                    document.getElementById('memo_wrapper')
                )
            }
        );
});


//debug
window.Perf = require('react-addons-perf');
