//html方法,类似innerHTML
//获取
console.log($("body").html());
//设置
$("body").html("<p><a>666</a></p>");

//text方法,类似innerText
//获取
console.log($("body").text());
//设置
$("body").text("<p>66623</p>");

//append方法,向子集的最后添加文本或标签或dom对象
$("body").append("<a>哈哈</a>").append("<a>哈哈</a>");

//appendTo方法,append方法的被动形式
$("<b>777</b>").appendTo("html > body");

//prepend方法，向子集的最前添加文本或标签或dom对象
$("body").prepend("<cf>233</cf>").prepend("&lt;cf&gt;哈哈&lt;/cf&gt;");

//prependTo方法，prepend方法的被动形式
$("<cf>666</cf>").prependTo("html body");

//after,为被选中的每一个标签后添加一个文本或标签或dom对象
$("cf").after("after");

//bofore,为被选中的每一个标签前添加一个文本或标签或dom对象
$("cf").before("before");

//如果第二个参数传入整个jq选择器,则会剪切这个标签,粘贴到每一个目标标签中
$("cf").append($("b"));

$("a").append($("cf"));

$("body").append(document.createElement("p"));

$("body").append(document.createElement("ul")).append("<li>2333</li>");

//remove方法,删除标签内部及自身
// $("a b").remove();

//empty方法,清空标签内部所有标签
// $("body").empty();

//clone方法,创建一份拷贝
$("body").append($("ul").clone());

//包装
// $("p").wrap($("a"));