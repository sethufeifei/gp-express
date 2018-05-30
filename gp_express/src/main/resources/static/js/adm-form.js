//取cookie右上角获取账户电话号码
var phnum = $.cookie("userPhoneNumber");
$("#ph").html(phnum);

//点击右上角退出则退出到登录页面
$("#cancel").mousedown(function (){
	window.location.href="Login.html";	
})

//首页、简历、订单页面跳转
$("#job").mousedown(function (){
	window.location.href="Adm-resume.html";
})
$("#home").mousedown(function (){
	window.location.href="Adm-HomePage.html";
})

//查看订单
var str1 = "";
$(document).ready(function (){
	$.ajax({
		type:"get",
		url:"http://180.76.244.76:8000/findOrderAllList",
		async:true,
		data:{},
		success:function (data1){
			for(var i=0;i<data1.data.length;i++){
			//动态创建订单
			str1 += "<li><div class='div1'><p id='id'>"+data1.data[i].name+"</p><p id='ads'>"+data1.data[i].place+"</p><p id='tim'>"+data1.data[i].createDate+"</p></div><div class='div2'><input id='goods' type='button' value='"+data1.data[i].bool+"'/><div class='aps'><span>评价：</span><div class='star clearfix'><p>"+data1.data[i].evaluate+"</p><p>星</p></div></div></div></li>";
			}
			$(".dingdan").html(str1);
		}
	});
})

