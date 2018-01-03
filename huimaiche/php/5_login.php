<?php
header('Content-Type:text/plain;charset=UTF8');
$uname=$_REQUEST['uname'];
$upwd=$_REQUEST['upwd'];
$conn = mysqli_connect('127.0.0.1','root','', 'huimaiche', 3306);
$sql="set names UTF8";
mysqli_query($conn,$sql);
$sql="select * from user where uname='$uname' and upwd='$upwd'";
$result=mysqli_query($conn,$sql);

if(mysqli_fetch_assoc($result)){
	echo "success";
}else{
	echo "用户名或密码错误";
}