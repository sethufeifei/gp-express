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
$("#pick").mousedown(function (){
	window.location.href="Pick-Up.html";
})
$("#my").mousedown(function (){
	window.location.href="My-Pwd.html";
})

//提交简历时请求ajax


$("#submit").mousedown(function (){
	$.ajax({
		type:"post",
		url:"http://180.76.244.76:8000/submitResume",
		async:true,
		data:{
				"name":$("#Name").val().toString(),
				"college":$("#dep").val().toString(),
				"classes":$("#No").val().toString(),
				"schoolNumber":$("#Phm").val().toString(),
				"phoneNumber":$("#Maj").val().toString(),
				"emptyLesson":$("#Time").val().toString(),
				"info":$("#season").val().toString(),
				"userId":$.cookie("userId")
			},
		success:function (data){
			if(data.code==1){
				alert("提交成功");
			}else {
				alert("信息填写有误，请修改后再试！");
			}
		}
	});
})
