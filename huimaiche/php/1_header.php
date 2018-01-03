<?php
header('Content-Type:text/html; charset=UTF-8');
?>
<div class="header_box">
<div class="header_nav">
			<a href="index.html" target="_blank" class="inx"><i></i>首页</a>
			<a href="#">买车指南</a>
			<a href="#">认证商家</a>
			<a href="#">网站导航</a>		
			<a href="#" class="down" id="down_app">惠买车APP<i></i></a>
			<a href="#" class="down" id="down_weixin">关注惠买车<i></i></a>
			<div class="user">
				<a href="#" id="btn-regist">注册</a>
				<span>/</span>
				<a href="#" id="btn-login">登陆</a>
			</div>
			<div class="nav_huimaiche" id="app">
			<b></b>
			<p>下载APP极速获取报价&gt;</p>
			<img src="img_png/top-huimaiche-qr.png-v=20160713.png">
		</div>
		<div class="nav_huimaiche" id="weixin">
			<b></b>
			<p>关注获取优惠信息</p>
			<img src="img_png/top-weixin-qr.png">
		</div>
</div>
		</div>
		<!-- todo 注册 -->
		<div class="regist-modal">
			<div class="regist">
			  <h3>
				  注册
				  <a href="#"></a>
			  </h3>
			  <div class="regist-box-username">
			  	<label for="#regist-username">用户名：</label><input id="regist-username"  required pattern="^[a-zA-Z0-9]{6,16}$" autofocus>
			  	<span>由6-16数字或字母组成</span>
			  </div>
			  <div class="regist-box-userpwd">
			  	<label for="#regist-userpwd">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label><input id="regist-userpwd" type="password" required pattern="^[a-zA-Z0-9]{6,12}$" >
			  	<span>由6-12数字或字母组成</span>
			  </div>
			  <div class="regist-box-userEmail">
			  	<label for="#regist-userEmail">&nbsp;&nbsp;Email：</label><input id="regist-userEmail" type="email" required >
			  	<span>Email格式</span>
			  </div>
			  <div class="regist-box-btn">
			  	<button type="button" id="regist-btn">立即注册</button>
			  </div>
			  <p class="regist-msg"></p>
			</div>
		</div>
		<!-- todo 登录 -->
		<div class="login-modal">
			<div class="login">
			  <h3>
				  登陆
				  <a href="#"></a>
			  </h3>
			  <div class="login-box-username">
			  	<label for="#login-username">用户名：</label><input id="login-username"  required pattern="^[a-zA-Z0-9]{6,16}$" autofocus
			  	value="zhangle">
			  </div>
			  <div class="login-box-userpwd">
			  	<label for="#login-userpwd">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label><input id="login-userpwd" type="password" required pattern="^[a-zA-Z0-9]{6,12}$" value="123456">
			  </div>
			  <p class="alert"></p>
			  <div class="login-box-btn">
			  	<button type="button" id="login-btn">立即登陆</button>
			  </div>
			</div>
		</div>
		
		<div class="localtion-search">
			<a href="#"><img src="img_png/index-logo.png"></a>
			<input type="text" placeholder="输入品牌或者车型" class="search_content"><a href="#" class="search"><i></i></a>
			<a href="#" class="banner_car"><img src="img_png/5a0a25ca-d57c-4f68-a775-4d3416434bd2.png"></a>
			<div class="search_result">
			</div>
		</div>
		<div class="allcar_nav">
			<p>
				全部车型
				<i></i>
			</p>
			<ul>
				<li><a target="_blank" href="adviser.html">团购</a></li>
				<li class="buycar-adviser"><a target="_blank" href="adviser.html">买车顾问</a></li>
				<li><a target="_blank" href="adviser.html">导购</a></li>
				<li><a target="_blank" href="adviser.html">手机APP</a></li>
			</ul>
			<div class="down_list">
				<div class="pinpai">
					<p>品牌</p>
					<ul>
						<li><a href="#">大众</a></li>
						<li><a href="#">本田</a></li>
						<li><a href="#">吉利汽车</a></li>
						<li><a href="#">丰田</a></li>
						<li><a href="#">现代</a></li>
						<li><a href="#">别克</a></li>
						<li><a href="#">福特</a></li>
						<li><a href="#">日产</a></li>
						<li><a href="#">哈佛</a></li>
						<li><a href="#">长安轿车</a></li>
						<li><a href="#">起亚</a></li>
						<li><a href="#">雪佛兰</a></li>	
					</ul>
				</div>
				<div>
					<p>价格</p>
					<ul>
						<li><a href="#">8万以下</a></li>
						<li><a href="#">8-12万</a></li>
						<li><a href="#">12-18万</a></li>
						<li><a href="#">18-25万</a></li>
						<li><a href="#">25-40万</a></li>
						<li><a href="#">40-80万</a></li>
						<li><a href="#">80万以上</a></li>
					</ul>
				</div>
				<div>
					<p>车型</p>
					<ul>
						<li><a href="#">微型</a></li>
						<li><a href="#">小型</a></li>
						<li><a href="#">紧凑型</a></li>
						<li><a href="#">中型</a></li>
						<li><a href="#">中大型</a></li>
						<li><a href="#">豪华型</a></li>
						<li><a href="#">MPV</a></li>
						<li><a href="#">SUV</a></li>	
					</ul>
				</div>
			</div>
			<div class="list_details">
				<div class="details_d1">
					<div>
						<b>B</b>
						<ul>
							<li><a href="#">本田</a></li>
							<li><a href="#">别克</a></li>
							<li><a href="#">奔驰</a></li>
							<li><a href="#">比亚迪</a></li>
							<li><a href="#">标志</a></li>
							<li><a href="#">北汽幻速</a></li>
							<li><a href="#">奔腾</a></li>
							<li><a href="#">北汽绅宝</a></li>
							<li><a href="#">北京</a></li>
							<li><a href="#">北汽威旺</a></li>	
						</ul>
					</div>
					<div>
						<b>C</b>
						<ul>
							<li><a href="#">长安轿车</a></li>
							<li><a href="#">长安商用</a></li>
							<li><a href="#">昌河</a></li>
						</ul>
					</div>
					<div>
						<b>D</b>
						<ul>
							<li><a href="#">大众</a></li>
							<li><a href="#">东风风行</a></li>
							<li><a href="#">东风风神</a></li>
							<li><a href="#">东风小康</a></li>
							<li><a href="#">道奇</a></li>
							<li><a href="#">东风御风</a></li>
						</ul>
					</div>
					<div>
						<b>F</b>
						<ul>
							<li><a href="#">丰田</a></li>
							<li><a href="#">福特</a></li>
							<li><a href="#">菲亚特</a></li>
						</ul>
					</div>
					<div>
						<b>G</b>
						<ul>
							<li><a href="#">广汽传祺</a></li>
							<li><a href="#">观致汽车</a></li>
						</ul>
					</div>
					<div>
						<b>H</b>
						<ul>
							<li><a href="#">哈佛</a></li>
							<li><a href="#">海马</a></li>
							<li><a href="#">红旗</a></li>	
						</ul>
					</div>
					<div>
						<b>J</b>
						<ul>
							<li><a href="#">吉利汽车</a></li>
							<li><a href="#">江淮</a></li>
							<li><a href="#">Jeep</a></li>
							<li><a href="#">金杯</a></li>
						</ul>
					</div>
				</div>
				<div class="details_d2">
					<div>
						<b>K</b>
						<ul>
							<li><a href="#">开端</a></li>
							<li><a href="#">克莱斯勒</a></li>
						</ul>
					</div>
					<div>
						<b>L</b>
						<ul>
							<li><a href="#">铃木</a></li>
							<li><a href="#">雷克萨斯</a></li>
							<li><a href="#">陆风</a></li>
							<li><a href="#">雷诺</a></li>
							<li><a href="#">林肯</a></li>
						</ul>
					</div>
					<div>
						<b>M</b>
						<ul>
							<li><a href="#">马自达</a></li>
							<li><a href="#">MG</a></li>
						</ul>
					</div>
					<div>
						<b>N</b>
						<ul>
							<li><a href="#">纳智捷</a></li>
						</ul>
					</div>
					<div>
						<b>Q</b>
						<ul>
							<li><a href="#">起亚</a></li>
							<li><a href="#">奇瑞</a></li>
							<li><a href="#">启辰</a></li>
						</ul>
					</div>
					<div>
						<b>R</b>
						<ul>
							<li><a href="#">日产</a></li>
							<li><a href="#">荣威</a></li>
						</ul>
					</div>
					<div>
						<b>S</b>
						<ul>
							<li><a href="#">斯柯达</a></li>
							<li><a href="#">三菱</a></li>
							<li><a href="#">斯巴鲁</a></li>
						</ul>
					</div>
				</div>
				<div class="details_d3">
					<div>
						<b>W</b>
						<ul>
							<li><a href="#">沃尔沃</a></li>
						</ul>
					</div>
					<div>
						<b>X</b>
						<ul>
							<li><a href="#">现代</a></li>
							<li><a href="#">雪佛兰</a></li>
							<li><a href="#">雷铁龙</a></li>
						</ul>
					</div>
					<div>
						<b>Y</b>
						<ul>
							<li><a href="#">一汽</a></li>
						</ul>
					</div>
					<div>
						<b>Z</b>
						<ul>
							<li><a href="#">众泰</a></li>
							<li><a href="#">中华</a></li>
							<li><a href="#">中欧奔驰房车</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>