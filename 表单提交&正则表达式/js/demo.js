// $(".project").keyup(function(){
// 	var str = $(this).val(),
// 		len = str.length,
// 		i = 0,
// 		check = 1;
// 	if(len == 0)check = 0;
// 	while(i < len){
// 		if(str[i++] == " " || str[i++] == "\t"){
// 			check = 0;
// 			break;
// 		}
// 	}
// 	if(check == 0)$(this).css("outlineColor","red");
// 	else $(this).css("outlineColor","green");
// });
$(".empty").keyup(function(){
	var str = $(this).val();
	//非正则表达式
	// ~str.indexOf(" ") || ~str.indexOf("\t") ? $(this).css("outlineColor","red") : $(this).css("outlineColor","green");
	//正则表达式
	/\s/.test(str) ? $(this).css("outlineColor","red") : $(this).css("outlineColor","green");
});
$(".number").keyup(function(){
	var str = $(this).val();
	/[^\d]/.test(str) ? $(this).css("outlineColor","red") : $(this).css("outlineColor","green");
})
//正则表达式
// Regular Expression
// RegExp
// 正则表达式的字面量
var reg1 = /a/;

//实例化正则对象
var reg2 = new RegExp("a");

//字符串正则匹配方法search
console.log("a".search(reg1));

//类似indexOf,但是参数可接收正则表达式,返回值是正则表达式匹配到的下标
console.log("	cat".search(reg1));

//字符串的replace方法第一个参数也能接收正则表达式,替换被正则表达式匹配到的内容
console.log("cat".replace(reg2,"A"));

//字符串的split方法参数也能接收正则表达式，根据正则表达式的规则进行字符串切割
console.log("\tcat".split(reg2));

//字符串的match方法,返回匹配到的字符串部分的集合
console.log("\tcat".match(reg1));


//正则对象的匹配方法


//test方法去检测字符串是否有匹配到正则表达式,返回值为boolean
console.log(reg1.test("\tcat"));

//正则表达式规则

console.log(/asdf/.test("asdasdfasd"));

//标识符

//i
//ignore case 不区分大小写
console.log(/asdf/i.test("Asdf"));

//g
//即global匹配所有
console.log("asdasdfasdf".match(/asdf/g));

console.log("asdaSdFasdAsdfasdasdf".match(/asdf/ig));

//特殊元字符

//\t即制表符
console.log("asdasdf	asdf".match(/\t/));

//\r匹配换行符
//即return
console.log("asdas\rdfas".match(/\r/));

//\s匹配空格及制表符,//大写取反
//即space
console.log("asdasdasdasdf\rsafsaasd".match(/\s/g));
console.log("asdasdasdasdf\rsafsaasd".match(/\S/g));

//\d匹配0到9的数字,//大写取反
//即digit
console.log("12345asdf-=afaf123".match(/\d/g));
console.log("12345asdf-=afaf123".match(/\D/g));

//\w,//大写取反
//即word匹配0到9的数字及大小写英文字母及下划线
console.log("owqers(%safaf1232_123".match(/\w/g));
console.log("owqers(%safaf1232_123".match(/\W/g));

//\b,//大写取反
//即block匹配单词边界
console.log("internationalization"/*i18n网站国际化*/.match(/ion\b/));
console.log("internationalization"/*i18n网站国际化*/.match(/ion\B/));

//.
//匹配所有
console.log("myhsoirasfgga24142fvsjhn\r\d\w)%^&".match(/./g));

//\转义
//()[].\/?+*
console.log("()".match(/\(\)/g));
console.log("\\b".match(/\\b/));


//中括号
//匹配0或1或2或3
console.log("07346934524".match(/[0123]/g));
//0-5匹配0到5
console.log("07346934524".match(/[0-5]/g));

//a-z匹配a到z
console.log("0734daag6934fshs52sdhs4".match(/[a-z]/g));

//a-zA-Z匹配a到z和A到Z
console.log("0ASDFFg6934fshs5SFdhs4".match(/[a-zA-Z]/g));

//匹配到a或s或d或f
console.log("asff%&^$$asdf&()1241512".match(/[asdf]/g));


console.log("12415".match(/\d[\s\r]/g));

//^对中括号内规则取反
console.log((/[^\w]/g).test("123*1asdf23"));

//数量级
//单独使用时表示数量级尽量多得去匹配,贪婪(表示次数以最多为准)
//在数量级后添加?一同使用时,知足(表示次数以最少为准)

//*匹配前一个规则任意次(可能为0次)
console.log("123".match(/\d*/g));
console.log("sad21341)(s*^(".match(/\w*/g));
console.log("sad21341)(s*^(".match(/\d*/g));
console.log("sad21341)(s*^(".match(/\d*?/g));
console.log("sad21341)(s*^(".match(/\d*/));
console.log("sad21341)(s*^(".match(/[\d*]/g));

//?匹配前一个规则0次或1次
console.log("123".match(/\d?/g));

//+匹配前一个规则至少1次
console.log("123".match(/\d+/g));

//{m,n}自定义匹配前一个规则次数,匹配前一个规则m次至n次
console.log("1230128518791asdff214".match(/\d{1,2}/g));

//{m,}自定义匹配前一个规则次数,匹配前一个规则至少m次
console.log("1230128518791asdff214".match(/\d{3,}/g));

//{0,m}自定义匹配前一个规则次数,匹配前一个规则最多m次
console.log("1230128518791asdff214".match(/\d{0,3}/g));

//{m}自定义匹配前一个规则次数,匹配前一个规则m次
console.log("1230128518791asdff214".match(/\d{3}/g));

//非中括号^以后面的规则开始,从字符串第一个开始
console.log("123456".match(/^\d/));
console.log("asdf123".match(/^\d/));
console.log("123asd123".match(/^\d/));

//$以前面的规则结束
console.log("123213".match(/\d$/));
console.log("123asdf".match(/\d$/));
console.log("123asdf123".match(/\d$/));

//手机号,11位,第一位1,第二位不为012469
console.log(/^1[^0-2469]\d{9}$/.test("13091719000"));

//()表示分组
console.log("asd1d2d3080agadgasd8d0".match(/as(d\d)+/g));

//|表示或者
console.log("asd1d2d3080agadgasd8d0".match(/[a-c]|\d/g));

//身份证验证，前6为地区
console.log("230102199501161331".match(/^(((1[1-5]|2[1-3]|3[1-7]|4[1-6]|5[0-4]|6[1-5]|71|8[12])\d|886|852|853)\d{3})(19\d{2}|200\d|201[0-6])((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[469]|11)(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8]))\d{3}[\dXx]$/));
