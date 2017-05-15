// src/components/memo_row.jsx
// memo_listの要素
var React = require('react');


var MemoRow = React.createClass({
    getDefaultProps: function () {
        return{
            modified: '--',
            title: 'NO TITLE',
            body: ''
        }
    },
    getInitialState: function() {
        return {
          isShownDetail: false
        };
    },
    render: function () {
        var memo = this.props.data;
        return (
            <li key={this.props.i} onClick={this.selectList}>
                <span className="created_date">{memo.modified}</span>
                <p className="title">{memo.title}</p>
                <div className="btn_like"></div>
                <div className="content hide">
                    <p className="text">{memo.body}</p>
                    <div className="content_buttons">
                        <button className="btn_delete">削 除</button>
                        <button className="btn_edit">編 集</button>
                    </div>
                </div>
            </li>
        )
    },
    selectList: function (e) {
        console.log(e.currentTarget);
    }
});

module.exports = MemoRow;
