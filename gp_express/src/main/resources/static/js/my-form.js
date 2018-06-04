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
$("#myword").mousedown(function (){
	window.location.href= "My-Pwd.html";
})

$("#btn2").mousedown(function (){
	window.location.href= "My-form1.html";
})



//所有订单ajax
var str1 = "";
$(document).ready(function (){
	$.ajax({
		type:"get",
		url:"http://180.76.244.76:8000/findOrderList/wei",
		async:true,
		data:{
			"id":$.cookie("userId")
		},
		success:function (json){
			for(var i=0;i<json.data.length;i++){
			//动态创建订单
			str1 += "<li><div class='div1'><p id='id'>"+json.data[i].id+"</p><p id='ads'>"+json.data[i].place+"</p><p id='tim'>"+json.data[i].createDate+"</p></div><div class='div2'><div class='a clearfix'><input type='button' value='确认收货' id='goods' /><p>"+json.data[i].flag+"</p></div><div class='aps'><span>评价：</span><div class='star'><img src='img/评价(4).png'/><img src='img/评价(4).png'/><img src='img/评价(4).png'/><img src='img/评价(4).png'/><img src='img/评价(4).png'/></div></div></div></li>";
			}
			$(".dingdan").html(str1);
		}
	});
})

//确认收货付款
$(".dingdan").delegate("#goods","mousedown",function(){
	//获取当前订单id
   var Index = $(this).parent().parent().prev().children(0).html();
   
	$.ajax({
		type:"get",
		url:"http://180.76.244.76:8000/confirm",
		async:true,
		data:{"orderId":Index},
		success:function (data){
			 console.log(Index);
				if(data.code==1){
					alert("收货成功");
				}else if(data.code==3){
					alert("订单号不能为空");
				}else if(data.code==4){
					alert("此订单不存在");
				}
		},
		error:function (){
			alert("请求失败");
		}
	});
})


//评价
$(".dingdan").delegate(".star img","mousedown",function (){
	$(this).attr('src','img/评价(5).png').prevAll().attr('src','img/评价(5).png');
	$(this).nextAll("img").attr('src','img/评价(4).png');
	var a = $(this).parent().parent().parent().prev().children(0).html();
	var b = $(this).index()+1;
	$.ajax({
		type:"get",
		url:"http://180.76.244.76:8000/evaluate",
		async:true,
		data:{"orderId":a,
					"evaluate":b},
		success:function (Data1){
			if(Data1.code==1){
				alert("评价成功");
			}else if(Data1.code==4){
				alert("此订单不存在");
			}else if(Data1.code==5){
				alert("评价不能为空");
			}
		},
		error:function (){
			alert("请求失败");
		}
	});
	
})
