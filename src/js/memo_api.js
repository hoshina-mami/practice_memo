import request from 'superagent';

//メモ一覧を取得
const URL_GET_LIST = 'http://mamimomo.com/memo/api/get_list.php';

export default class MemoApi {

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
};