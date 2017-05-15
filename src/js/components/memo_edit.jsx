// src/components/memo_row.jsx
// memo_listの要素
import React from 'react';
import { Component } from 'react';
import BtnFavorite from './btn_favorite.jsx';

export default class MemoEdit extends Component {

    constructor(props) {
        super(props);

        //bind
        this.selectSave = this.selectSave.bind(this);
        this.selectCancel = this.selectCancel.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);

        //init state
        this.state = {
            isShownEdit: false,
            titleValue: '',
            contentValue: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.isShownEdit !== nextProps.isShown) {
            this.setState({isShownEdit: nextProps.isShown});
        }
        if (nextProps.memo != undefined) {
            this.setState({titleValue: nextProps.memo.title});
            this.setState({contentValue: nextProps.memo.body});
        }
    }

    render() {
        var contentClass = this.state.isShownEdit ? 'memo_edit' : 'memo_edit hide';
        return (
            <section className={contentClass}>
                <div className="edit_box">
                    <input
                      type="text"
                      placeholder="Title"
                      value={this.state.titleValue}
                      onChange={this.handleTitleChange}
                    />
                    <textarea 
                        value={this.state.contentValue}
                        onChange={this.handleContentChange}
                    />
                </div>
                <div className="edit_buttons">
                      <button className="btn_editCancel" onClick={this.selectCancel}>cancel</button>
                      <button className="btn_post">save</button>
                </div>
            </section>
        )
    }

    selectSave(e) {
        //TODO: API書いたら保存処理
        console.log('TODO: do save');
    }

    selectCancel(e) {
        this.setState({memo: null, isShownEdit: false});
    }

    handleTitleChange(e) {
        this.setState({titleValue: e.target.value});
    }

    handleContentChange(e) {
        this.setState({contentValue: e.target.value});
    }
};