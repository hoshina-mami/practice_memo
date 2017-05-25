<?php
header('Content-Type: text/html; charset=UTF-8');

// MySQL に接続し、データベースを選択します。
$conn = mysql_connect('mysql520.heteml.jp', '_mamimemo', 'dears722') or die(mysql_error());
mysql_select_db('_mamimemo') or die(mysql_error());

// SQL クエリを実行します。
$res = mysql_query('SELECT * from `memo`') or die(mysql_error());

// 結果を出力します。
while ($row = mysql_fetch_array($res, MYSQL_NUM)) {
for ($i = 0; $i < 5; $i++) {
    echo $row[$i] . "\n";
}
}

// 結果セットを開放し、接続を閉じます。
mysql_free_result($res);
mysql_close($conn);

?>