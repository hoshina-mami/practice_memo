// src/components/memo_list.jsx
// memo_listの要素
var React = require('react');

var MemoRow = require('./memo_row.jsx');

var MemoList = React.createClass({
    render: function () {
        var listNodes = this.props.data.map(function (memo, i,) {
            return (
                // <li key={i} onClick={selectList}>
                //     <span className="created_date">{memo.modified}</span>
                //     <p className="title">{memo.title}</p>
                //     <div className="btn_like"></div>
                //     <div className="content hide">
                //         <p className="text">{memo.body}</p>
                //         <div className="content_buttons">
                //             <button className="btn_delete">削 除</button>
                //             <button className="btn_edit">編 集</button>
                //         </div>
                //     </div>
                // </li>
                <MemoRow data={memo} key={i} />
            )
        });
        return (
            <ul className="memo_list">
                {listNodes}
            </ul>
        );
    }
});

module.exports = MemoList;
