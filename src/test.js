finalResult.sort( function (a, b) {
	var val1 = a.name.split("/")[3];
	var val2 = b.name.split("/")[3];
	if (val1 < val2) {
		return -1;
	} else if (val1 > val2) {
		return 1;
	} else {
		return 0;
	}
});
//配置组名
if (finalResult.length != 0) {
	var index = finalResult[0].name.split("/")[3];
} else {
	index = "空";
}
var arr = [];
//二维数组 start
function twoArr() {
	var newarr = [];
	var cj = 0;
	console.table(finalResult);
	for (var i in finalResult) {     //遍历当前数组
		newarr[i] = [];                //生成N个子数组
		for (var j in finalResult) {            //将所有的数组进行遍历的
			if (cj < finalResult.length) {
				if (finalResult[cj].name.split("/")[3] == index) {       //判断数组中是否相同,相同的进行添加

					newarr[i].push(finalResult[cj]);
					cj++;
				} else {
					index = finalResult[cj].name.split("/")[3];
					break;
				}
			}
		}
	}
	/*对新数组进行去空*/
	console.log(newarr);
	var Newarr = [];
	newarr.map(function (val, key) {
		if (val.length != 0) {
			Newarr.push(val);
		}
	});
	newarr = Newarr; //[[{}],[{}],[],[]]
	var newarr2 = [];
	for (var keyA in newarr) {
		newarr2[keyA] = [];
		var AB = 0;
		newarr2[keyA][AB] = [];
		for (var keyB in newarr[keyA]) {   //第一个数组 :[{},{},{},{}]  =>{}
			var indexB = newarr[keyA][0].name.split("/")[0];  //配置组名
			if (AB < (newarr[keyA].length)) {
				if (newarr[keyA][keyB].name.split('/')[0] == indexB) {
					newarr2[keyA][AB].push(newarr[keyA][keyB]);
				} else {
					indexB = newarr[keyA][keyB].name.split('/')[2];  //配置组名
					AB = AB + 1;
					newarr2[keyA][AB] = [];
					newarr2[keyA][AB].push(newarr[keyA][keyB]);
				}
			}
		}
	}
	for (var A in newarr2) {
		for (var B in newarr2[A]) {
			newarr2[A][B].sort(function (a, b) {
				var val1 = a.name.split("/")[2];
				var val2 = b.name.split("/")[2];
				if (val1 < val2) {
					return -1;
				} else if (val1 > val2) {
					return 1;
				} else {
					return 0;
				}
			});
			arr = arr.concat(newarr2[A][B]);
		}
	}
	return arr;
}