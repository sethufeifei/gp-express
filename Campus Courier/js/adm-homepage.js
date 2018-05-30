//轮播图动画
var iNum = 0;
var arr = ["img/lunbo1.png","img/lunbo2.png","img/lunbo3.png"];
	for(var i=0;i<arr.length;i++){
		$(".point").append($("<li>"));
	}
	$(".point li").eq(0).addClass("active");
	$(".banner div").eq(0).on("click",function (){
		toPre();
		toPoint();
		changePic();
	})
	$(".banner div").eq(1).on("click",function (){
		toNext();
		toPoint();
		changePic();
	})
	$(".point li").on("click",function (){
		iNum = $(this).index();
		toPoint();
		changePic();
	})
	function changePic(){
		$(".banner img").velocity("stop").velocity({"opacity":0},{duration :150,easing:"linear",complete:function (){
			$(".banner img")[0].src = arr[iNum];
		}}).velocity({"opacity":1},{duration :150,easing:"linear"})
	}
	function toPre(){
		iNum == 0 ? iNum=arr.length-1 : iNum--;
	}
	function toNext(){
		iNum == arr.length-1 ? iNum=0 : iNum++;
	}
	function toPoint(){
		$(".point li").eq(iNum).addClass("active").siblings().removeClass("active");
	}
	timer3 = setInterval(function (){
		toNext();
		toPoint();
		changePic();
	},2000);
	$(".banner").on("mouseover",function (){
		clearInterval(timer3);
	})
	$(".banner").on("mouseout",function (){
		clearInterval(timer3);
		timer3 = setInterval(function (){
			toNext();
			toPoint();
			changePic();
		},2000);
	})

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
$("#send").mousedown(function (){
	window.location.href="Adm-form.html";
})