<?php
header('Content-Type:text/plain;charset=UTF8');
$uname=$_REQUEST['uname'];
$conn = mysqli_connect('127.0.0.1','root','', 'huimaiche', 3306);
$sql="set names UTF8";
mysqli_query($conn,$sql);
$sql="select * from user where uname='$uname'";
$result=mysqli_query($conn,$sql);

if(mysqli_fetch_assoc($result)){
  echo '该用户名已存在';
}
else{
  echo 'OK';
}
