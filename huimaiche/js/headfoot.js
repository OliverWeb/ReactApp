(function(){
	$('#header').load('php/1_header.php');
	$('#footer').load('php/2_footer.php')
})();
$('#header').on('mouseover','#down_app',function(){
	$('#app').show();
	$('#down_app').mouseout(function(){
		$('#app').hide();
	});
})
$('#header').on('mouseover','#app',function(){
	$('#app').show();
	$(this).mouseout(function(){
		$(this).hide();
	});
})
$('#header').on('mouseover','#down_weixin',function(){
	$('#weixin').show();
	$('#down_weixin').mouseout(function(){
		$('#weixin').hide();
	});
})
$('#header').on('mouseover','#weixin',function(){
	$('#weixin').show();
	$(this).mouseout(function(){
		$(this).hide();
	});
})
$('#header').on('mouseover','.allcar_nav>p',function(){
	$('.down_list').show();
	$(this).mouseout(function(){
		$('.down_list').hide();
	})
});
$('#header').on('mouseover','.down_list',function(){
	$(this).show();
	$(this).mouseout(function(){
		$(this).hide();
	})
});
$('#header').on('mouseover','.pinpai',function(){
	$('.list_details').show();
	$(this).mouseout(function(){
		$('.list_details').hide();
	})
});
$('#header').on('mouseover','.list_details',function(){
	$(this).show();
	$('.down_list').show();
	$(this).mouseout(function(){
		$('.down_list').hide();
		$(this).hide();
	})
});
$("#header").on('click','#btn-regist',function(){
	$('.regist-modal').fadeIn(500);
  regist();
});
$("#header").on('click','.regist>h3>a',function(){
  $('.regist-modal').fadeOut(500);
});
$("#header").on('mouseover','.regist-modal input',function(){
  this.style.borderColor="#999";
  this.previousElementSibling.style.borderColor="#999";
});
$("#header").on('mouseout','.regist-modal input',function(){
  this.style.borderColor="#c0c0c0";
  this.previousElementSibling.style.borderColor="#c0c0c0";
});
/* 注册功能实现*/
function regist() {
  var uname = document.getElementById("regist-username");
  var unSpan = uname.nextElementSibling;
  var upwd = document.getElementById("regist-userpwd");
  var upSpan = upwd.nextElementSibling;
  var uEmail = document.getElementById("regist-userEmail");
  var uESpan = uEmail.nextElementSibling;
  uname.onblur = function () {
		if (uname.validity.valid) {
			$.get('php/3_userSelect.php',{uname:uname.value},function(data){
				if(data=="OK"){
					unSpan.className = "span-success";
					unSpan.innerHTML = "OK";
				}else{
					unSpan.className = "span-error";
					unSpan.innerHTML = data;
				}
			})
		} else if (uname.validity.valueMissing) {
			unSpan.className = "span-error";
			unSpan.innerHTML = "用户名不能为空";
		} else if (uname.validity.patternMismatch) {
			unSpan.className = "span-error";
			unSpan.innerHTML = "用户名输入有误."
		}
  };
  upwd.onblur = function () {
		if (upwd.validity.valid) {
			upSpan.className = "span-success";
			upSpan.innerHTML = "OK";
		} else if (upwd.validity.valueMissing) {
			upSpan.className = "span-error";
			upSpan.innerHTML = "密码不能为空";
		} else if (upwd.validity.patternMismatch) {
			upSpan.className = "span-error";
			upSpan.innerHTML = "密码格式错误"
		}
  };
  uEmail.onblur = function () {
		if (uEmail.validity.valid) {
			uESpan.className = "span-success";
			uESpan.innerHTML = "OK";
		} else if (uEmail.validity.valueMissing) {
			uESpan.className = "span-error";
			uESpan.innerHTML = "Email不能为空";
		} else if (uEmail.validity.typeMismatch) {
			uESpan.className = "span-error";
			uESpan.innerHTML = "Email格式错误"
		}
  };
	$("#header").on('click','#regist-btn',function(){
		if((unSpan.innerHTML == "OK")&&(upSpan.innerHTML == "OK")&&(uESpan.innerHTML == "OK")){
			console.log(1111);
			$.post("php/4_regist.php",{uname:uname.value,upwd:upwd.value,uEmail:uEmail.value});
			$(".regist-modal").fadeOut(500);
		}
	})
}
//登陆功能实现
$("#header").on('click','#btn-login',function(){
	$('.login-modal').fadeIn(500);
	login();
});
$("#header").on('click','.login>h3>a',function(){
  $('.login-modal').fadeOut(500);
});
$("#header").on('mouseover','.login input',function(){
  this.style.borderColor="#999";
  this.previousElementSibling.style.borderColor="#999";
});
$("#header").on('mouseout','.login input',function(){
  this.style.borderColor="#c0c0c0";
  this.previousElementSibling.style.borderColor="#c0c0c0";
});
function login() {
  var uname = document.getElementById("login-username");
  var upwd = document.getElementById("login-userpwd");
	$("#header").on('click','#login-btn',function(){
		$.post("php/5_login.php",{uname:uname.value,upwd:upwd.value},function(data){
				if(data=="success"){
					$(".login-modal").fadeOut(500);
					$('.user').html(`<a href="#">我的订单</a>
						<span>您好，${uname.value}</span>`)
				}else{
					$('.alert').html(data);
				}
		});
	})
}
$('#header').on('input','.search_content',function(){
	var txt=this.value;
	$.getJSON('php/8_cars.php',function(data){
		var html="";
		$.each(data,function(i,obj){
			if(txt){
				if(obj.car_name.indexOf(txt)!=-1){
					html+=`<li><b>${obj.car_name}</b><span>${obj.brand}</span></li>`;
				}else if(obj.brand.indexOf(txt)!=-1){
					html+=`<li><b>${obj.car_name}</b><span>${obj.brand}</span></li>`;
				}
			}
		});
		if(html){
			$('.search_result').html('<ul>'+html+'</ul>').show();
		}
		$('.search_result li').click(function(){
				window.location.href="car_details.html?car_name="+$(this).children(":first").text();
		});
		if($('.search_result>ul').html()){
			$('.search').click(function(){
				this.href="car_details.html?car_name="+$('.search_result>ul>li:first-child>b').html();
			});
		}
	})
});
$(document).on('click','body',function(e){
		var e=e.target;
		if(e.className!="search_content"&&e.className!="search_result"){
				$('.search_result').hide();
		}
});











