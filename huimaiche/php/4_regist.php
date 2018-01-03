<?php
header('Content-Type:application/json;charset=UTF8');
$uname=$_REQUEST['uname'];
$upwd=$_REQUEST['upwd'];
$uEmail=$_REQUEST['uEmail'];
$conn = mysqli_connect('127.0.0.1','root','', 'huimaiche', 3306);
$sql="set names UTF8";
mysqli_query($conn,$sql);
$sql="insert into user values(null,'$uname','$upwd','$uEmail')";
$result=mysqli_query($conn,$sql);
