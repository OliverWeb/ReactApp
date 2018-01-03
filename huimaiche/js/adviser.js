$.getJSON('php/7_carsign.php',function(d){
	$.getJSON('php/6_adviser.php',function(data){
		var total=data.length;
		var n=3;
		var allPage=Math.ceil(total/n);
		var page=1;
		$('.page span').html('共'+allPage+'页');
		//分页页码实现
		function updata(){
			var p="";
			if(page-2>0){
				p+=`<button>${page-2}</button>`
			}
			if(page-1>0){
				p+=`<button>${page-1}</button>`
			}
			p+=`<button>${page}</button>`;
			if(page+1<=allPage){
				p+=`<button>${page+1}</button>`
			}
			if(page+2<=allPage){
				p+=`<button>${page+2}</button>`
			}
			$('.btn-group').html(p);
		}
		updata();
		$('.btn-group>button:first-child').addClass('btn-active');
		change();
		$('#main').on('click','.btn-group>button',function(){
			page=parseInt(this.innerHTML);
			updata();
			$('.btn-group>button:nth-child('+page+')').addClass('btn-active').siblings('.btn-active').removeClass('btn-active');
			change();
		});
		$('#main').on('click','.page>button',function(){
			var txt=this.innerHTML;
			if(txt=="上一页"&&page>1){
				page--;
			}
			if(txt=="下一页"&&page<allPage){
				page++;
			}
			updata();
			$('.btn-group>button:nth-child('+page+')').addClass('btn-active').siblings('.btn-active').removeClass('btn-active');
			change();
		});
		//随着页码变化，页面发生变化
		function change(){
			var html='';
			var i=(page-1)*n;
			var k=(page-1)*n+(total-i>=n?n:total-i);
			for(;i<k;i++){
				var obj=data[i];
				var h="";
				for(var j=0;j<obj.star;j++){
					h+='<i></i>';
				}
				var arr=obj.adviser_carsign.split('-');
				var H="";
				for(var z=0;z<arr.length;z++){
					H+="<img src="+d[parseInt(arr[z])-1].position+">"
				}
				html+=`<li>
							<a href="#">
								<img src=${obj.adviser_pic}>
								<span>预约TA</span>
								<div class="adviser-details">
									<h3>
										<b>${obj.aname}</b>
										${obj.location}
										<span><i></i>${obj.title}</span>
									</h3>
									<p>
										<b>`+h+`</b>
										<span class="number">${obj.service_num}</span>人&nbsp;
										<span class="border">服务客户数</span>
										<span class="number">${obj.satisfaction}</span>&nbsp;
										<span class="border">满意好评度</span>
										<span class="number">${obj.save}</span>万&nbsp;
										平均节省（元）
									</p>
									<span>${obj.msg}</span>
									<span class="adviser-sign">`+H+`</span>
								</div>
							</a>
						</li>`;
				$('.adviser-list').html(html);
			}
		}
	})
});