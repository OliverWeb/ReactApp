$('#header').on('mouseout','.down_list',function(){
	$(this).show();
});
$('#header').on('mouseout','.allcar_nav>p',function(){
	$('.down_list').show();

});
$('#header').on('mouseout','.list_details',function(){
	$('.down_list').show();

});
//轮播广告
function fade(){
	var t=setInterval(function(){
		if($('.show_pic').attr('class')!='img3 show_pic'){
			$('.show_pic').fadeOut(1000).removeClass('show_pic').next().addClass('show_pic').fadeIn(1000);
		}else{
			$('.show_pic').fadeOut(1000).removeClass('show_pic');
			$('.img1').addClass('show_pic').fadeIn(1000);
		}
		var str=$('.show_pic').attr('class');
		$('.page>li:nth-child('+str[3]+')').addClass('page_fill').siblings('.page_fill').removeClass('page_fill');
	},3000)
	$('#main').on('mouseover','.show_pic',function(){
		clearInterval(t);
	});
	$('#main').on('click','.page>li',function(){
		var n=this.className[1];
		$('.img'+n).addClass('show_pic').fadeIn(1000).siblings('.show_pic').fadeOut(1000).removeClass('show_pic');
		$(this).addClass('page_fill').siblings('.page_fill').removeClass('page_fill');
	});
}
fade();
$('#main').on('mouseout','.show_pic',function(){
	fade();
});
$('#main').on('mouseover','.chk-list>li',function(){
  $(this).addClass('chk-hover').siblings('.chk-hover').removeClass('chk-hover');
});
//汽车图片移入移出动态效果
$('#main').on('mouseover','.ul-com>li:not(.first)',function(e){
	var t=setInterval(function(){
		var img=$(this).children('a').children('img')[0];
		var left=parseInt(window.getComputedStyle(img).left.substring(0,2));
		if(left==10){
			clearInterval(t);
			t=null;
			return;
		}
		left=left-1+'px';
		img.style.left=left;
	}.bind(this),20);
	$(this).mouseleave(function(){
			clearInterval(t);
			t=null;
	})
})
$('#main').on('mouseleave','.ul-com>li:not(.first)',function(e){
	var t=setInterval(function(){
		var img=$(this).children('a').children('img')[0];
		var left=parseInt(window.getComputedStyle(img).left.substring(0,2));
		if(left==40){
			clearInterval(t);
			t=null;
			return;
		}
		left=left+1+'px';
		img.style.left=left;
	}.bind(this),20);
	$(this).mouseover(function(){
		clearInterval(t);
		t=null;
  })
});
//汽车标志
$.getJSON('php/7_carsign.php',function(data){
	var html="";
	$.each(data,function(i,obj){
		html+=`<li><a href="#"><img src=${obj.position}><br/>${obj.sign_name}</a></li>`;
	})
	$('.car_sign').html(html);
})
//加载热门汽车
$.getJSON('php/8_cars.php',function(data){
	//加载猜你喜欢
	var H=`<ul class="ul-com">
		  <li class="first">
			<a href="#"><img src="img_jpg/f9654724-62c5-4d9e-ab04-abf1467ec0e7.jpg" ></a>
			<p>
			  <a href="#">全民齐砍价，就要惠买车！</a><br/>
			  <a href="#">犹豫SUV和轿车？20款车帮您选定！</a><br/>
			  <a href="#">二胎首选,7座SUV、MPV热门车任您挑!</a>
			</p>
		  </li>`;
	var html="";
	html+=H;
	for(var j=0;j<6;j++){
		var h="";
		var n=parseInt(Math.random()*data.length+1);
		var N;
		if(n!=N){
			N=n;
			$.each(data,function(i,obj){
				if(n==obj.cid){
					h+=`<li>
					<a href="car_details.html" target="_blank">
					<h3>${obj.car_name}</h3>
					<p>有<b>${obj.buy_num}</b>人正在买</p>
					<img src=${obj.car_pic} >
					</a>
					</li>`;
				}
			})
			html+=h;
		}else{
			j--;
		}	
	}
	html+='</ul>';
	//加载热门车
	for(var i=0;i<data.length-1;i++){
		for(var j=0;j<data.length-1-i;j++){
			if(data[j].buy_num<data[j+1].buy_num){
				a=data[j];
				data[j]=data[j+1];
				data[j+1]=a;
			}
		}
	}
	var h="";
	$.each(data,function(i,obj){
		if(i<6){
			h+=`<li>
			<a href="car_details.html" target="_blank">
			<h3>${obj.car_name}</h3>
			<p>有<b>${obj.buy_num}</b>人正在买</p>
			<img src=${obj.car_pic} >
			</a>
			</li>`;
		}
	})
	html+=H+h+'</ul>';
	//加载8万以下，8-15万，15-30万，SUV，中型，紧凑型，小型
	var h1="";
	var arr1=[],arr2=[],arr3=[],arr4=[],arr5=[],arr6=[],arr7=[];
	var arr=[arr1,arr2,arr3,arr4,arr5,arr6,arr7];
	$.each(data,function(i,obj){
		if(obj.price<8){
			arr1.push(obj);
		}
		if(obj.price>=8&&obj.price<15){
			arr2.push(obj);
		}
		if(obj.price>=15&&obj.price<30){
			arr3.push(obj);
		}
		if(obj.style=="SUV"){
			arr4.push(obj);
		}
		if(obj.style=="中型"){
			arr5.push(obj);
		}
		if(obj.style=="紧凑型"){
			arr6.push(obj);
		}
		if(obj.style=="小型"){
			arr7.push(obj);
		}
	})
	for(var j=0;j<arr.length;j++){
		var h1="";
		for(var i=0;i<6;i++){
			h1+=`<li>
			<a href="car_details.html" target="_blank">
			<h3>${arr[j][i].car_name}</h3>
			<p>有<b>${arr[j][i].buy_num}</b>人正在买</p>
			<img src=${arr[j][i].car_pic} >
			</a>
			</li>`;
		}
		html+=H+h1+'</ul>';
	}
	$('.cars_box').html(html);
})
$('#main').on('mouseover','.chk-list>li',function(){
	var e=this;
	var i=0;
	while(e = e.previousElementSibling){ 
		i++; 
	}
	$($('.ul-com')[i]).show().siblings('.ul-com').hide();
});
$('#main').on('click','.ul-com>li:not(".first")>a',function(e){
	var car_name=this.firstElementChild.innerHTML;
	this.href='car_details.html?car_name='+car_name;
})
