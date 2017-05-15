// src/components/memo_row.jsx
// memo_listの要素
import React from 'react';
import { Component } from 'react';
import BtnFavorite from './btn_favorite.jsx';
import MemoEdit from './memo_edit.jsx';

export default class MemoRow extends Component {

    constructor(props) {
        super(props);

        //bind
        this.selectList = this.selectList.bind(this);
        this.selectEdit = this.selectEdit.bind(this);
        this.selectDelete = this.selectDelete.bind(this);

        //init state
        this.state = {
            isShownContent: false,
        };

        this.funcs = this.props.funcs;
    }

    render() {
        // console.log('MemoRow render');
        const TEXT_DELETE = 'Delete';
        const TEXT_EDIT = 'Edit';
        var memo = this.props.data;
        var contentClass = this.state.isShownContent ? '' : 'hide';
        return (
            <li className='memo_row' key={this.props.i} onClick={this.selectList}>
                <span className="created_date">{memo.modified}</span>
                <p className="title">{memo.title}</p>
                <BtnFavorite data={memo.favorite} />
                <div className={contentClass}>
                    <p className="text">{memo.body}</p>
                    <div className="content_buttons">
                        <button className="btn_delete" onClick={this.selectDelete}>{TEXT_DELETE}</button>
                        <button className="btn_edit" onClick={this.selectEdit}>{TEXT_EDIT}</button>
                    </div>
                </div>
            </li>
        )
    }

    selectList(e) {
        if (e.target.className !== 'btn_like_active' && e.target.className !== 'btn_like') {
            this.setState({isShownContent: this.state.isShownContent ? false : true });
        } else {
            e.preventDefault();
        }
    }

    selectEdit(e) {
        console.log(this.funcs);
        const memoObj = this.props.data;
        this.funcs.showEdit(memoObj);
    }

    selectDelete(e) {

    }
};