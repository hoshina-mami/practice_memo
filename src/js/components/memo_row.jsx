// src/components/memo_row.jsx
// memo_listの要素
import React from 'react';
import { Component } from 'react';

export default class MemoRow extends Component {

    constructor(props) {
        super(props);

        //bind
        this.selectList = this.selectList.bind(this);

        //init state
        this.state = {
            isShownContent: false,
            isFavorited: false
        }; 
    }

    render() {
        var memo = this.props.data;
        var contentClass = this.state.isShownContent ? '' : 'hide';
        var favoriteClass = this.state.isFavorited ? 'btn_like_active' : 'btn_like';
        return (
            <li key={this.props.i} onClick={this.selectList}>
                <span className="created_date">{memo.modified}</span>
                <p className="title">{memo.title}</p>
                <div className={favoriteClass}></div>
                <div className={contentClass}>
                    <p className="text">{memo.body}</p>
                    <div className="content_buttons">
                        <button className="btn_delete">削 除</button>
                        <button className="btn_edit">編 集</button>
                    </div>
                </div>
            </li>
        )
    }

    selectList() {
        // console.log(this.state.isShownContent);
        this.setState({isShownContent: this.state.isShownContent ? false : true });
    }
};