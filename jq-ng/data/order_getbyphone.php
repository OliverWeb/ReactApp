<?php
/**根据手机号查询订单数据**/
header('Content-Type:application/json');

$output = [];

@$phone = $_REQUEST['phone'];
if(empty($phone)){
    echo "[]"; //若客户端未提交电话号码，则返回一个空数组，
    return;    //并退出当前页面的执行
}

//访问数据库
$conn = mysqli_connect('127.0.0.1','root','','shubaobei', 3306);
$sql = 'SET NAMES utf8';
mysqli_query($conn, $sql);
$sql = "SELECT book_order.oid,book_order.user_name,book_order.order_time,book_dish.img_sm,book_dish.did FROM book_order,book_dish WHERE book_order.did=book_dish.did AND book_order.phone='$phone'";
$result = mysqli_query($conn, $sql);
//根据编号查询，结果集最多只有一行记录
while( ($row=mysqli_fetch_assoc($result))!==NULL ){
    $output[] = $row;
}
echo json_encode($output);
?>