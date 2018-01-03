angular.module('shuboabei',[]).
		controller('parentCtr',function($scope){
			$scope.jump=function(routPath){
				$.mobile.changePage(routPath,{'transition':'slide'})
			};
			$(document).on('pagecreate',function(event){
				/*监听page的创建*/
				console.log('page is creating');
				/*获取要加载的容器*/
				var page=event.target;
				/*获取作用域对象*/
				var scope=$(page).scope();
				/*获取注入器的对象*/
				var injector=$(page).injector();
				/*调入注入器，为程序提供$compile*/
				injector.invoke(function($compile){
					/*编译并连接dom节点*/
					$compile(page)(scope);
					scope.$digest()
				});
			})
}).controller('mainCtr',function($scope,$http){
	/*加载数据*/
	$scope.hasMore=true;
	$http.get('../data/book_getbypage.php?start=0').success(function(data){
		$scope.bookList=data;
	});
	$scope.loadMore=function(){
		$http.get('../data/book_getbypage.php?start='+$scope.bookList.length).success(function(data){
			if(data.length<5){
				$scope.hasMore=false;
			}
			$scope.bookList=$scope.bookList.concat(data);
		});
	}
	$scope.$watch('kw', function(){

			if( $scope.kw ){
				$http.get('../data/book_getbykw.php?kw='+$scope.kw).
				success(function(data){
					$scope.bookList = data;
				})
			}
		});
	$scope.showDetail= function (id) {
			localStorage.setItem('bookId',id);
			$.mobile.changePage('detail.html',{'transition':'slide'});
		}


}).controller('detailCtr',function($scope,$http){
	//读取路由URL中的参数
	//console.log($routeParams.dishid)
	$http.get('../data/book_getbyid.php?id='+localStorage.getItem('bookId')).
	success(function(data){
		//console.log(data);
		$scope.book = data[0];
	})
}).controller('orderCtr',function($scope,$http,$rootScope){
	$scope.order = {"did":localStorage.getItem('bookId')};
	$scope.submitOrder = function(){
		var str = jQuery.param($scope.order);
		$http.get('../data/order_add.php?'+str).
		success(function(data){
			//console.log(data[0].msg);

			if(data[0].msg == 'succ'){
				$scope.succMsg = '下单成功！您的订单编号为：'+data[0].did+'。您可以在用户中心查看订单状态。';
				//记载用户手机号，用于查询订单
				$rootScope.phone = $scope.order.phone;
			}else {
				$scope.errMsg = '下单失败！错误码为：'+data[0].reason;
			}
		})
	}
}).controller('myorderCtr',function($scope,$http,$rootScope){
	$http.get('../data/order_getbyphone.php?phone='+$rootScope.phone).success(function(data){
		$scope.orderList=data;
	})
});



























