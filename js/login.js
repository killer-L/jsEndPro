/*
* @Author: killer
* @Date:   2017-12-09 17:51:37
* @Last Modified by:   killer
* @Last Modified time: 2017-12-13 00:36:18
*/
$(function(){
	$("#login").click(function(event){
		if($("#name").val()=="李梓豪" && $("#psw").val()=="07160626"){
			window.location.href="main.html";
		}
		else{
			alert("姓名学号错误");
			window.location.href="index.html";
		}
	});
	$("#register").click(function(event) {
		window.location.href="register.html";
	});
});
