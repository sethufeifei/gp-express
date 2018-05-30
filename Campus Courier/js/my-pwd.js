
//点击设置密码请求ajax
$("#rew").mousedown(function (){
		$.ajax({
			type:"post",
			url:"http://180.76.244.76:8000/modifyPassword",
			async:true,
			data:{
					"passwordOld":$("#OldWord").val().toString(),
					"passwordNew1":$("#NewWord").val().toString(),
					"passwordNew2":$("#AfmWord").val().toString(),
					"id":$.cookie("userId")
				},
			success:function (data){
				if(data.code==1){
					alert("修改成功!");
				}
				if(data.code==3){
					alert("两次输入密码不一样!");
				}
			},
			error:function (){
				alert("请求失败");
			}
		});
})


//点击右上角退出则退出到登录页面
$("#cancel").mousedown(function (){
	
	window.location.href="Login.html";	
})


//取cookie右上角获取账户电话号码
var phnum = $.cookie("userPhoneNumber");
$("#ph").html(phnum);


//首页、在线寄取、学生兼职、我的订单页面跳转
$("#home").mousedown(function (){
	window.location.href="HomePage.html";
})
$("#job").mousedown(function (){
	window.location.href="Stu-job.html";
})
$("#send").mousedown(function (){
	window.location.href= "SendTake.html";
})
$("#pick").mousedown(function (){
	window.location.href= "Pick-Up.html";
})
$("#myform").mousedown(function (){
	window.location.href= "My-form.html";
})