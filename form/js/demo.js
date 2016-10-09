//表单一ajax提交
$(".one input[type='submit']").click(function(){
	$.ajax({
		type : "post",
		url : "http://www.ikindness.cn/api/test/post",
		data : {
			input : $("input[name='input']").val(),
			text : $("input[name='text']").val()
		},
		success : function(data){
			console.log(data);
		}
	});
})
//表单二提交
$(".two input[type='button']:first").click(function(){
	$(".two").submit();
});
$(".two input[type='button']:last").click(function(){
	$(".two")[0].reset();
});
//表单三提交
$(".three input[type='button']").click(function(){
	$.ajax({
		type : "post",
		url : "http://www.ikindness.cn/api/test/post",
		data : {
			input : $(".input").val(),
			text : $(".text").val()
		},
		success : function(data){
			console.log(data);
		}
	});
})
//表单四提交
$(".four input[type='button']").click(function(){
	//jq包装后的表单对象的serializeArray方法,把键值对组合到数组中
	console.log($(".four").serializeArray());
	//get提交
	$.ajax({
		url : "http://www.ikindness.cn/api/test/get?" + $(".four").serialize(),
		success : function(data){
			console.log(data);
		}
	});
});
$("button:first").click(function(){
	$("form .submit").click();
});
$("button:last").click(function(){
	var len = $("form").length,
		i=0;
	while( i < len){
		$("form")[i].reset();
		i++;
	}
});