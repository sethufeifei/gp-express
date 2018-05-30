//取cookie右上角获取账户电话号码
var phnum = $.cookie("userPhoneNumber");
$("#ph").html(phnum);


//点击右上角退出则退出到登录页面
$("#cancel").mousedown(function (){
	window.location.href="Login.html";	
})


//首页、在线寄取、学生兼职、我的页面跳转
$("#home").mousedown(function (){
	window.location.href="HomePage.html";
})
$("#send").mousedown(function (){
	window.location.href="SendTake.html";
})
$("#job").mousedown(function (){
	window.location.href="Stu-job.html";
})
$("#my").mousedown(function (){
	window.location.href="My-Pwd.html";
})


//取件ajax 
$("#j-sub").mousedown(function (){
	$.ajax({
		type:"post",
		url:"http://180.76.244.76:8000/sendPackage",
		async:true,
		data:{	
				"name":$("#name").val().toString(),
				"classes":$("#maj").val().toString(),
				"phoneNumber":$("#ph123").val().toString(),
				"number":$("#num").val(),
				"info":$("#message").val().toString(),
				"date":$("#time").val().toString(),
				"place":$("#adress").val().toString(),
				"price":$("#pie").val(),
				"flag":"取件",
				"userId":$.cookie("userId")
			},
		success:function(data){
			if(data.code==1){
				alert("提交成功");
			}
		},
		error:function(){
			alert("请求失败");
		}
	});
})

$("#cnt123").blur(function (){
	if($("#test").find($("#price1")).is(':checked')){
		var numbers = 2 * $("#cnt123").val();
		$("#Price123").val(numbers);
	}else{
		if($("#test").find($("#price2")).is(':checked')){
			var numbers = 3 * $("#cnt123").val();
			$("#Price123").val(numbers);
		}else{
			if($("#test").find($("#price2")).is(':checked')){
				var numbers = 4 * $("#cnt123").val();
				$("#Price123").val(numbers);
			}
		}
	}
})

$(document).ready(function(){
    $('#test').find('input[type=checkbox]').bind('click', function(){
        $('#test').find('input[type=checkbox]').not(this).attr("checked", false);
    });
});