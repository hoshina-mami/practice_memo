// src/components/memo_header.jsx
import React from 'react';
import { Component } from 'react';


export default class MemoHeader extends Component {
    constructor(props) {
        super(props);

        //bind
        this.selectNew = this.selectNew.bind(this);
        this.selectUpdate = this.selectUpdate.bind(this);

        //init state
        this.state = {
            isShownContent: false,
        };
        this.funcs = this.props.funcs;
    }

    render() {
        return (
            <header className="memo_header">
            <button className="btn_reload" onClick={this.selectUpdate}>Update</button>
                <button className="btn_new" onClick={this.selectNew}>New</button>
            </header>
            /* TODO: isShownContentでヘッダーのUI変える*/
        );
    }

    selectNew() {
        this.funcs.showEdit(null);
    }

    selectUpdate() {
        //TODO:API書いたら同期処理
        console.log('TODO:do update');
    }
}