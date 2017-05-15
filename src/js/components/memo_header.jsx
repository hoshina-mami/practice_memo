// src/components/memo_list.jsx
import React from 'react';
import { Component } from 'react';

export default class MemoHeader extends Component {
    render() {
        return (
            <header className="memo_header">
            <button className="btn_reload">リロード</button>
                <button className="btn_new">新規登録</button>
            </header>
        );
    }
}