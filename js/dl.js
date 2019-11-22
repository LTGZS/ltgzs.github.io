	function checkLogon(){
	var name = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	//判断非空
	if((name==null || name=="") || (pass==null || pass=="")){
	alert("用户名或密码不能为空！！");
	}
	else{
	if(name=="2814063673" && pass=="lt.1997.108"){
	alert("登录成功！");
	//这里写你页面跳转的语句
	window.location.href="index2.html";
	}
	else if(name=="demo1" && pass=="demo321"){
		alert("登录成功！");
		//这里写你页面跳转的语句
		window.location.href="https://zhidao.baidu.com/question/304281524985227924.html";
	}
	else if(name=="demo2" && pass=="demo321"){
		alert("登录成功！");
		//这里写你页面跳转的语句
		window.location.href="https://zhidao.baidu.com/question/304281524985227924.html";
	}
	else{
	alert("用户名或密码错误！！");
	}
	}
	}