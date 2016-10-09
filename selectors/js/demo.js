//同querySelectorAll
console.log($("li:not(:last-child) + li"));

//选择方法

//eq方法，索引
console.log($(".l").eq(2));
console.log($(".l:eq(2)"));
console.log($("ul .l:eq(2)"));

function People(){
	this.walk = function(){
		console.log("walk");
		return this;
	}
	this.run = function(){
		console.log("run");
		return this;
	}
	this.laugh = function(){
		console.log("laugh");
		return this;
	}
}
console.log(new People().walk().run().run().run().laugh());

//find方法，查找子集
console.log($("body").find("li"));

//children方法,查找直接子集
console.log($("ul").children("li"));
console.log($("ul").children(/*筛选条件*/));

//siblings方法,查找兄弟
console.log($(".l").siblings(/*筛选条件*/));
console.log($(".l").siblings(".c"));

//prev方法,查找前一个兄弟标签
console.log($(".b").prev(/*筛选条件*/));

//prevAll方法，查找前所有兄弟标签
console.log($(".c").prevAll(/*筛选条件*/));

//next方法，查找后一个兄弟标签
console.log($(".b").next(/*筛选条件*/));

//nextAll方法，查找后所有兄弟标签
console.log($(".b").nextAll(/*筛选条件*/));

//parent方法，查找当前标签的父级标签
console.log($(".b").parent(/*筛选条件*/));

//综合使用
console.log($("a").next().children().parent().nextAll().eq(2));