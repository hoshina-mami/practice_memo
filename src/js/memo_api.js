// @flow

import request from 'superagent';

//メモ一覧を取得
const URL_GET_LIST = 'http://mamimomo.com/memo/api/get_list.php';
const URL_POST_MEMO = 'http://mamimomo.com/memo/api/post_memo.php';

export default class MemoApi {
    /**
     * メモ一覧を取得
     * @return {Promise}
     */
    getMemoList() {
        return new Promise(function (resolve, reject) {
            request
                .get(URL_GET_LIST)
                .end(
                    (err, res) => {
                        if(err) {
                            reject(err);
                        } else {
                            resolve(JSON.parse(res.text));
                        }
                    }
                );
        });
    }

    /**
     * メモ情報をpost
     * @param  {Object}  data
     * @return {Promise}
     */
    postMemo(data: Object) {
        return new Promise(function(resolve, reject) {
            request
                .post(URL_POST_MEMO)
                .type('form')
                .send(data)
                .end(
                    (err, res) => {
                        if(err) {
                            reject(err);
                        } else {
                            resolve(JSON.parse(res.text));
                        }
                    }
                );
        });
    }
};