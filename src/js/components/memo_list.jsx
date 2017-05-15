// src/components/memo_list.jsx
import React from 'react';
import { Component } from 'react';
import MemoRow from './memo_row.jsx';

export default class MemoList extends Component {
    constructor() {
        super();
    }

    render() {
        // console.log('MemoList render');
        const funcs = this.props.funcs;
        var listNodes = this.props.data.map(function (memo, i,) {
            return (
                <MemoRow data={memo} funcs={funcs} key={i} />
            )
        });
        return (
            <section className="memo_main" id="memo_main">
                <ul className="memo_list">
                    {listNodes}
                </ul>
            </section>
        );
    }
}