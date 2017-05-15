// src/components/memo_confirm.jsx
import React from 'react';
import { Component } from 'react';


export default class MemoConfirm extends Component {
    constructor(props) {
        super(props);

        //bind
        this.selectCancel = this.selectCancel.bind(this);
        this.selectOk = this.selectOk.bind(this);

        //init state
        this.state = {
            isShownConfirm: false,
        };
        this.funcs = this.props.funcs;
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.isShownConfirm !== nextProps.isShown) {
            this.setState({isShownConfirm: nextProps.isShown});
        }
    }

    render() {
        var contentClass = this.state.isShownConfirm ? 'memo_confirm' : 'memo_confirm hide';
        return (
            <section className={contentClass}>
                <div className="confirm_box">
                      <p>この記事を削除してもいいですか？</p>
                      <div className="confirm_buttons">
                              <button className="btn_deletCancel" onClick={this.selectCancel}>Calcel</button>
                              <button className="btn_doDelet" onClick={this.selectOk}>OK</button>
                      </div>
                </div>
          </section>
        );
    }

    selectCancel() {
        this.setState({isShownConfirm: false});
    }

    selectOk() {
        //TODO:API書いたら削除
        console.log('do delete');
    }
}