var str=window.location.search.substr(1);
$.getJSON('php/9_details.php',str,function(data){
		var obj=data[0];
		var html="";
		$('title').html(obj.car_name+'最新报价');
		html+=`<p class="details-nav">
			<a href="index.html">惠买车首页</a>
			<span>&gt;</span>
			<a href="#">全部品牌</a>
			<span>&gt;</span>
			<a href="#">${obj.brand}</a>
			<span>&gt;</span>
			<a href="#">${obj.car_name}</a>
		</p>`;
		$('.container').before(html);
		$('.car-details').before(`<img src=${obj.car_pic}>`);
		$('.price-content').before(`<h2>${obj.car_name} <span class="car-content">2016款 25周年纪念版</span></h2>`);
		$('#price').html(obj.price+'万');
		$('#buy-num').html(obj.buy_num);
		$.getJSON('php/8_cars.php',function(d){
			var n=parseInt(Math.random()*d.length);
			$('.bottom-box').append(`<a href="#">
						<img src=${d[n].car_pic}><br>
						${d[n].car_name}
					</a>`);
		})
});

$(document).on('click','body',function(e){
	var e=e.target;
	if($('.citys').css('display')=="block"&&e.className!="chk-city"){
		if(e.className!="citys"){
			$('.citys').hide();
		}
	}
	var p=e.parentNode;
	if($('.styles').css('display')=="block"&&e.className!="chk-style"){
		if(p.className!="year-style"&&p.className!="style-box"&&e.className!="styles"&&e.className!="style-box"){
			$('.styles').hide();
		}
	}
})
$('#main').on('click','.chk-city',function(e){
			e.preventDefault();
			if($('.citys').css('display')=="none")
				$('.citys').show();
			else
				$('.citys').hide();
})
$('#main').on('click','.citys>a',function(e){
			e.preventDefault();
			$('.chk-city').html(this.innerHTML+"<i></i>");
			$('.citys').hide();
})

$('#main').on('click','.chk-style',function(e){
			e.preventDefault();
			if($('.styles').css('display')=="none"){
				$('.styles').show();
				var height=$('.year-style').css('height');
				$('.style-box').css('min-height',height);
			}
			else
				$('.styles').hide();
})
$('#main').on('click','.year-style>li',function(){
	$(this).addClass('year-active').siblings('.year-active').removeClass('year-active');
	var str=this.innerHTML.substr(0,4);
	$('.style'+str).show();
	$('.style'+str).siblings('.style-com').hide();
})
$('#main').on('click','.style-box li',function(){
	$(".li-active").removeClass('li-active');
	$(this).addClass('li-active');
	var txt=$(this).text();
	$('.car-content').html(txt);
	$('.chk-style').html(txt+"<i></i>");

})
$('#main').on('click','.bottom-box a',function(){
	this.href="car_details.html?car_name="+$(this).text();
})