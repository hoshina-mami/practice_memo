<?php
//postMemo

include './ChromePhp.php';

header('Access-Control-Allow-Origin: *');

$colums = ['memo_id', 'date', 'title', 'content', 'favorite'];
$memoId = -1;

//memo_id：あれば更新、なければ新規追加
//titleもしくはcontentに変更あればdateも更新
//favoriteはあれば単品で更新

//削除は別api

//クエリパラメータをチェック
ChromePhp::log(isset($_POST['memoid']));
if (isset($_POST['memoid'])) {
    $memoId = $_POST['memoid'];
}

// MySQL に接続し、データベースを選択
$conn = mysql_connect('mysql520.heteml.jp', '_mamimemo', 'Susm9rbMSnrKcMKA') or die(mysql_error());
mysql_select_db('_mamimemo') or die(mysql_error());

//titleかcontentが入力されていたら、DBを更新
if (!empty($_POST['title']) || !empty($_POST['content']) ) {

    $title = $_POST['title'] != '' ? $_POST['title'] : 'no title';
    $content = $_POST['content'] != '' ? $_POST['content'] : 'no content';
    $updatedate = new DateTime();
    $dateString = $updatedate->format('Y-m-d H:i:s');

    if ($memoId == 0) {
        $maxId = mysql_query('SELECT MAX(`memo_id`) FROM `memo`') or die(mysql_error());
        $idRow = mysql_fetch_row($maxId);
        $memoId = $idRow[0] + 1;

        // SQL クエリを実行
        $res = mysql_query("INSERT INTO `_mamimemo`.`memo` (`memo_id`, `date`, `title`, `content`, `favorite`) VALUES ($memoId, '$dateString', '$title', '$content', 0)");
        if(!$res) {
            print_r('失敗');
        }
    } else {
        //存在するmemo_idであれば更新

    }

    //書き込んだものを取得
    $result = mysql_query("SELECT * FROM `memo` WHERE `memo_id` = '$memoId'");
    if (!$result) {
        while ($row = mysql_fetch_array($result, MYSQL_NUM)) {
            for ($i = 0; $i < 5; $i++) {
                $oneData = array_merge($oneData, array( $colums[$i] => $row[$i]));
            }
        }

        //結果を返す
        header('Content-type:text/plain; charset=utf8');
        echo json_encode($oneData);
    }

} else {
    $memoId = -1;
    //変更なしで返す
    print_r ('変化なし');
    // echo json_encode({'res': 'no_update'});
}

mysql_close($conn);

?>