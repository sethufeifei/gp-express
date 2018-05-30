//点击登录请求ajax、判断账户是否正确及其身份
$("#login").mousedown(function (){
	$.ajax({
		type:"post",
		url:"http://180.76.244.76:8000/login",
		async:true,
		data:{
				"userPhoneNumber":$("#userPhoneNumber").val().toString(),
				"password":$("#password").val().toString()
			},
		success:function (data){
			//保存账户信息
			$.cookie('userId',data.data[0].id);
			$.cookie('userPhoneNumber',data.data[0].userPhoneNumber);
			//0-跳转管理员页面，1-跳转普通用户页面，2-弹出出错信息
			if(data.code==0){
				alert("登陆成功！--管理员！");
				window.location.href="Adm-HomePage.html";
				}else {
					if(data.code==1){
						alert("登陆成功！--普通用户");
						window.location.href="HomePage.html";
					}else {
						alert("账号或密码错误,请重试！");
						$("#prompt").css("display","block");
					}
				}
			
			},
			error:function(){
				alert("请求失败");
			}
		})
});

//点击注册 跳转到注册页面
$("#register").mousedown(function (){
	window.location.href="Register.html";
})
