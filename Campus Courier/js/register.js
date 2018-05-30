//判断手机号跟密码格式是否正确，不正确时提示错误信息
var b=true;
new Vue({
	el:"#vue-form",
	data:{
	},
	methods:{
		phone:function(){
			 var str=$("#userPhoneNumber").val();
		     var re=/^[1][3,4,5,7,8][0-9]{9}$/;
			if(!re.test(str)){
	      		$(".phone").css("display","block");
	      		b=false;
	      		return false;
			}else{
			    $(".phone").css("display","none");
			    b=true;
			}
		},
		pwd:function(){
			var str=$("#password").val();
			var re=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,16}$/;
			if(!re.test(str)||$("#pwd").val().length==0){
					      		$(".pwd").css("display","block");
					      		b=false;
					      		return false;
					      	}else{
				      		    $(".pwd").css("display","none");
				      		    b=true;
					      	}
		}
		
	}
})
//获取输入框焦点时，错误提示信息隐藏
$("#userPhoneNumber").focus(function(){
	$(".phone").css("display","none");
	b=true;
});
$("#pwd").focus(function(){
	$(".pwd").css("display","none");
	b=true;
});

//点击注册按钮时请求ajax
$("#reg").mousedown(function (){
	if(b=true&&$("#check").is(":checked")==true){
		$.ajax({
			type:"post",
			url:"http://180.76.244.76:8000/register",
			async:true,
			data:{
					"userPhoneNumber":$("#userPhoneNumber").val().toString(),
					"password":$("#password").val().toString()
				},
			success:function (data){
				//登陆成功跳转到登录页面
				if(data.code==1){
					window.location.href="Login.html";
				}else{
					alert("注册失败，请重试！");
				}
			},
			error:function (){
				alert("请求失败");
			}
		});
	}
})