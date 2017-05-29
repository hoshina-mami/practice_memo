// src/components/memo_row.jsx
// memo_listの要素
import React from 'react';
import { Component } from 'react';
import BtnFavorite from './btn_favorite.jsx';
import MemoApi from '../memo_api.js';

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

        this.setState({titleValue: nextProps.memo != null ? nextProps.memo.title : ''});
        this.setState({contentValue: nextProps.memo != null ? nextProps.memo.content : ''});
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
                      <button className="btn_post" onClick={this.selectSave}>save</button>
                </div>
            </section>
        )
    }

    selectSave() {
        //TODO:入力値のチェック、エンコード
        var data = {
            memoid : this.props.memo != null ? this.props.memo.memo_id : 0,
            title : this.state.titleValue,
            content : this.state.contentValue,
            favorite : this.props.memo != null ? this.props.memo.favorite : 0
        }

        var memoApi = new MemoApi();
        memoApi
            .postMemo(data)
            .then(
                (res) => {
                    console.log(res);
                }
            );
    }

    selectCancel() {
        this.setState({isShownEdit: false});
    }

    handleTitleChange(e) {
        this.setState({titleValue: e.target.value});
    }

    handleContentChange(e) {
        this.setState({contentValue: e.target.value});
    }
};