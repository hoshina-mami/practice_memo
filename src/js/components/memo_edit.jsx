// @flow

import React from 'react';
import { Component } from 'react';
import BtnFavorite from './btn_favorite.jsx';
import MemoApi from '../memo_api.js';

type Props = {
    isShown: boolean,
    memo: Object,
    funcs: Object
};

type State = {
    isShownEdit: boolean,
    titleValue: string,
    contentValue: string
};

export default class MemoEdit extends Component {
    state: State;

    selectSave: Function;
    updateView: Function;
    selectCancel: Function;
    handleTitleChange: Function;
    handleContentChange: Function;

    constructor(props: Props) {
        super(props);

        //bind
        this.selectSave = this.selectSave.bind(this);
        this.updateView = this.updateView.bind(this);
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

    componentWillReceiveProps(nextProps: Props) {
        if (this.state.isShownEdit != nextProps.isShown) {
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
                      value={decodeURIComponent(this.state.titleValue)}
                      onChange={this.handleTitleChange}
                    />
                    <textarea
                        value={decodeURIComponent(this.state.contentValue)}
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
        var data = {
            memoid : this.props.memo != null ? this.props.memo.memo_id : 0,
            title : encodeURIComponent(this.state.titleValue),
            content : encodeURIComponent(this.state.contentValue),
            favorite : this.props.memo != null ? this.props.memo.favorite : 0
        }

        var memoApi = new MemoApi();
        memoApi
            .postMemo(data)
            .then(
                (res) => {
                    this.updateView(res);
                }
            );
    }

    updateView(data: Object) {
        if (data.memo_id == null || data.memo_id == undefined) { return; }

        const funcs = this.props.funcs;
        funcs.updateMemoList();
    }

    selectCancel() {
        this.setState({isShownEdit: false});
    }

    handleTitleChange(e: Event) {
        const target = e.target;
        if (target instanceof HTMLInputElement) {
            this.setState({titleValue: target.value});
          }
    }

    handleContentChange(e: Event) {
        const target = e.target;
        if (target instanceof HTMLInputElement) {
            this.setState({contentValue: target.value});
        }
    }
};