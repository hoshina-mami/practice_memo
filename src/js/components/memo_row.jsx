// @flow

// src/components/memo_row.jsx
// memo_listの要素
import React from 'react';
import { Component } from 'react';
import BtnFavorite from './btn_favorite.jsx';
import MemoEdit from './memo_edit.jsx';

type Props = {
    data: Object,
    funcs: Object
};

type State = {
    isShownContent: boolean,
    isShownConfirm: boolean
};

export default class MemoRow extends Component {
    state: State;
    funcs: Object;
    selectList: Function;
    selectEdit: Function;
    selectDelete: Function;
    selectCancel: Function;
    selectOk: Function;
    checkShowContent: Function;

    constructor(props: Props) {
        super(props);

        //bind
        this.selectList = this.selectList.bind(this);
        this.selectEdit = this.selectEdit.bind(this);
        this.selectDelete = this.selectDelete.bind(this);
        this.selectCancel = this.selectCancel.bind(this);
        this.selectOk = this.selectOk.bind(this);
        this.checkShowContent = this.checkShowContent.bind(this);

        //init state
        this.state = {
            isShownContent: false,
            isShownConfirm: false
        };

        this.funcs = this.props.funcs;
    }

    render() {
        const memo = this.props.data;
        const contentClass = this.state.isShownContent ? '' : 'hide';

        return (
            <li className='memo_row' key={memo.memoid} onClick={this.selectList}>
                <span className="created_date">{memo.date}</span>
                <p className="title">{decodeURIComponent(memo.title)}</p>
                <BtnFavorite data={memo.favorite} />
                <div className={contentClass}>
                    <p className="text">
                        {decodeURIComponent(memo.content).split('\n').map(function(line) {
                            return (<span className="d_block" key={line.toString()}>{line}</span>);
                        })}
                    </p>
                    <div className="content_buttons">
                        {(() => {
                            if (!this.state.isShownConfirm) {
                                return <div>
                                            <button className="btn_delete" onClick={this.selectDelete}>Delete</button>
                                            <button className="btn_edit" onClick={this.selectEdit}>Edit</button>
                                        </div>;
                            } else {
                                return <div>
                                            <p>この記事を削除してもいいですか？</p>
                                            <div className="confirm_buttons">
                                                <button className="btn_deletCancel" onClick={this.selectCancel}>Calcel</button>
                                                <button className="btn_doDelet" onClick={this.selectOk}>OK</button>
                                            </div>
                                        </div>;
                            }
                        })()}
                    </div>
                </div>
            </li>
        )
    }

    selectList(e: Event) {
        if (this.checkShowContent(e)) {
            this.setState({isShownContent: this.state.isShownContent ? false : true });
        } else {
            e.preventDefault();
        }
    }

    selectEdit(e: Event) {
        const memoObj = this.props.data;
        this.funcs.showEdit(memoObj);
    }

    selectDelete() {
        this.setState({isShownConfirm: true});
    }

    selectCancel() {
        this.setState({isShownConfirm: false});
    }

    selectOk() {
        //TODO:API書いたら削除
        console.log('TODO:do delete');
    }

    checkShowContent(e: Event) {
        return e.target.className !== 'btn_like_active'
            && e.target.className !== 'btn_like'
            && e.target.className !== 'btn_delete'
            && e.target.className !== 'btn_deletCancel';
    }
};