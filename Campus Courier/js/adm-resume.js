//取cookie右上角获取账户电话号码
var phnum = $.cookie("userPhoneNumber");
$("#ph").html(phnum);

//点击右上角退出则退出到登录页面
$("#cancel").mousedown(function (){
	window.location.href="Login.html";	
})


//首页、简历、订单页面跳转
$("#home").mousedown(function (){
	window.location.href="Adm-HomePage.html";
})
$("#send").mousedown(function (){
	window.location.href="Adm-form.html";
})


//简历列表ajax
var str = "";
$(document).ready(function (){
	$.ajax({
		type:"get",
		url:"http://180.76.244.76:8000/getResume",
		async:true,
		success:function(data){
			console.log(data);
			for(var i=0;i<data.data.length;i++){
			//简历列表
			str += "<li><div class='form1'><div class='left'><div><label for='code'>编码：</label><input type='text'' id='code' value= '"+data.data[i].id+"'/></div><div><label for='name'>姓名：</label><input type='text' id='name' value= '"+data.data[i].name+"'/></div></div><div class='right'><div><label for='no'>学号：</label><input type='text' id='no' value= '"+data.data[i].schoolNumber+"'/></div><div><label for='phm'>电话：</label><input type='text' id='phm' value= '"+data.data[i].phoneNumber+"'/></div></div></div><div class='form2'><div><label for='info'>申请理由：</label><input type='text' id='info' value= '"+data.data[i].info+"'/></div></div></li>";
			}
			$(".resume").html(str);
		},
		error:function (){
			alert("请求失败");
		}
	});
})