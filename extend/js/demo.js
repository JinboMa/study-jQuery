//trim方法，清除前后空格
console.log($.trim("      asfasfs  a      "));

//map方法，遍历
console.log($.map([4,2,0,9],function(item,index){
	console.log(item,index);
	return Math.pow(item,2);
}));

//isArray方法，判断是否是数组
console.log($.isArray("哈哈"),$.isArray([1,undefined,2]),$.isArray(document.body.childNodes));

//contains方法,判断参数二的dom节点是否是参数一dom节点内
console.log($.contains(document.body,$("p")[0]));

//编写工具
$.extend({
	max : function(a,b){
		return Math.max(a,b);
	},
	toStarryTel : function(tel){
		tel += "";
		var len = tel.length;
		return tel.substring(0,3) + function(){
			var str = "";
			for(var i=0;i<len-6;i++){
				str += "*";
			}
			return str;
		}() + tel.substring(len - 3);
	}
});
console.log($.max);
console.log($.toStarryTel(12345678901));
function checkString(str){
		str = str + "";
		var check = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		var len = str.length,
			len1 = check.length,
			temp = [],
			k = 0;
		while(k < len1) check.push(check[k++].toUpperCase());
		check = check.concat(["1","2","3","4","5","6","7","8","9","0"]);
		len1 = check.length;
		for(var i=0 ; i<len ;i++){
			for(var j=0; j<len1 ;j++){
				if(str[i] == check[j]){
					temp.push(1);
					break;
				}
			}
			if(j == len1){
					temp.push(0);
					break;
				}
		}
		return temp;
	}
$.fn.extend({
	validateUser : function(){
		//对象的validate属性被调用,下一行的this自然指向的是调用属性的对象
		this.keyup(function(){
				var index = "请输入：",
				    inp = $(this);
		//因为这是在事件的处理方法中，所以这里的this指向的是事件的触发者
				checkString($(this).val()).forEach(function(item){
					if(item == 0){
						index = "输入错误";
						inp.css("outlineColor","red");
					}
					if(item == 1){
						index = "输入正确";
						inp.css("outlineColor","green");
					}
				});
		$("p.c").text(index);
	});
	}
});

$("input").validateUser();

//扩展对象字面量
console.log($.extend({
	a : 1
},{
	b : 2,
	c : 3
}));

console.log(Object.assign({
	a : 1
},{
	b : 2,
	c : 3
}));

//同名工具(属性)会覆盖,甚至会重写jq自带的工具
$.extend({
	max : function(a,b){
		return Math.min(a,b);
	},
	trim : 1
});
console.log($.max(1,2));
console.log($.trim);

$.abc = function(){
	console.log(this);
};
$.abc();

//补充fill方法
console.log(new Array(5).fill("*").join(""));

//补充repeat方法
console.log("*".repeat(5));

function People(){
	this.name = "人";
}
People.prototype.age = 20;
var man = new People();
console.log(man.name,man.age);

//$.fn.extend方法
$.fn.extend({
	getHTML : function(){
		return this.html();
	},
	setHTML : function(html){
		this.html(html);
	}
});

// $("body").setHTML("<p>哈哈哈</p>");
// console.log($("body").getHTML());