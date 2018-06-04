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
// var str1 = "";
// $(document).ready(function (){
// 	$.ajax({
// 		type:"get",
// 		url:"http://180.76.244.76:8000/findOrderAllList",
// 		async:true,
// 		data:{},
// 		success:function (data1){
// 			for(var i=0;i<data1.data.length;i++){
// 			//动态创建订单
// 			str1 += "<li><div class='div1'><p id='id'>"+data1.data[i].name+"</p><p id='ads'>"+data1.data[i].place+"</p><p id='tim'>"+data1.data[i].createDate+"</p></div><div class='div2'><input id='goods' type='button' value='"+data1.data[i].bool+"'/><div class='aps'><span>评价：</span><div class='star clearfix'><p>"+data1.data[i].evaluate+"</p><p>星</p></div></div></div></li>";
// 			}
// 			$(".dingdan").html(str1);
// 		}
// 	});
// })

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
			str1 += "<li><div class='div1'><p id='id'>"+data1.data[i].id+"</p><p id='ads'>"+data1.data[i].place+"</p><p id='tim'>"+data1.data[i].createDate+"</p></div><div class='div2'><input id='goods' type='button' value='"+data1.data[i].bool+"' /><div class='aps'><span>评价：</span><div class='star clearfix'><p>"+data1.data[i].evaluate+"</p><p>星</p><p id='detail'>详情</p></div></div></div><div class='div3 clearfix'><div class='l-text'><div class='l-text1'><label for='name'>姓名：</label><input type='text' id='name' value = '"+data1.data[i].name+"'/></div><div class='l-text2'><label for='maj'>专业班级：</label><input type='text' id='maj' value = '"+data1.data[i].classes+"'/></div><div class='l-text3'><label for='ph'>电话：</label><input type='text' id='ph' value = '"+data1.data[i].phoneNumber+"'/></div><div class='l-text4'><label for='num'>件数：</label><input type='text' id='num' value = '"+data1.data[i].number+"'/></div></div><div class='r-text'><div class='r-text1'><label for='pie'>预计价格：</label><input type='text' id='pie' value = '"+data1.data[i].price+"'/></div><div class='r-text2'><label for='message'>寄件信息：</label><input type='text' id='message' value = '"+data1.data[i].info+"'/></div><div class='r-text3'><label for='tim'>预计时间：</label><input type='text' id='time' value = '"+data1.data[i].date+"'/></div></div></div></li>";
			}
			$(".dingdan").html(str1);
			for(var i=0;i<data1.data.length;i++){
				if($(".dingdan").children(i).children(1).children(0).val() == 1){
					$(".dingdan").children(i).children(1).children(0).val("已付款");
				}else{
					$(".dingdan").children(i).children(1).children(0).val("未付款");
				}
				
			}
			
		}
	});
})


//单击查看订单详情
$(".dingdan").delegate("#detail","mousedown",function (){
	$(this).parent().parent().parent().next().css("display","block");
})

//双击关闭详情
$(".dingdan").delegate("#detail","dblclick",function (){
	$(this).parent().parent().parent().next().css("display","none");
})

