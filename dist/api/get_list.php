<?php
//getList

header('Content-Type: text/html; charset=UTF-8');
header('Access-Control-Allow-Origin: *');

$colums = ['memo_id', 'date', 'title', 'content', 'favorite'];

// MySQL に接続し、データベースを選択
$conn = mysql_connect('mysql520.heteml.jp', '_mamimemo', 'Susm9rbMSnrKcMKA') or die(mysql_error());
mysql_select_db('_mamimemo') or die(mysql_error());

// SQL クエリを実行
$res = mysql_query('SELECT * from `memo` order by `date` desc');

if (mysql_num_rows($res) == 0) {
    $error = 'クエリ失敗';
    echo json_encode(compact('error'));
} else {
    // 結果を出力
    while ($row = mysql_fetch_array($res, MYSQL_NUM)) {
        $oneData = array();

        for ($i = 0; $i < 5; $i++) {
            $oneData = array_merge($oneData, array( $colums[$i] => $row[$i]));
        }
        $response[] = $oneData;
    }
    echo json_encode($response);
}


// 結果セットを開放
mysql_free_result($res);

//明示せずとも、スクリプト終了時に自動的に接続が閉じる
//mysql_close($conn);

?>