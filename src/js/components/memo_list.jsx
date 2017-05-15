// src/components/memo_list.jsx
import React from 'react';
import { Component } from 'react';
import MemoRow from './memo_row.jsx';

export default class MemoList extends Component {
    constructor() {
        super();
    }

    render() {
        var listNodes = this.props.data.map(function (memo, i,) {
            return (
                <MemoRow data={memo} key={i} />
            )
        });
        return (
            <ul className="memo_list">
                {listNodes}
            </ul>
        );
    }
}