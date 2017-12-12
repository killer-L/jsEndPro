/*
* @Author: killer
* @Date:   2017-12-09 17:51:37
* @Last Modified by:   killer
* @Last Modified time: 2017-12-12 23:36:06
*/
window.onload=function(){shownext();init();}
	var arr=["images/01.jpg","images/02.jpg","images/03.jpg","images/04.jpg","images/05.jpg","images/06.jpg","images/07.jpg","images/08.jpg"];
	var index=0;
	var time=null;
	function shownext(){
		var img1=document.getElementById("img1");
		var title2=document.getElementById("title2");
		img1.src=arr[index];
		index++;
		if(index==arr.length){
			index=0;
			title2.innerHTML="机电夜景风光";

		}
		if(index>4){
			title2.innerHTML="机电日常风光";
		}
		time=window.setTimeout("shownext()", 2000);
	}

	function init(){
		var lis = document.getElementsByTagName("li");
		for (var i = 0; i < lis.length; i++) {
			lis[i].onmouseover=function(){
				this.className="over";
		}
			lis[i].onmouseout=function(){
				this.className="out";
		}
		};
	}

	$(function(){
		$("#dayImg").hide();
		$("#nightImg").hide()
		$("#btn1").click(function(event) {
			if($("#dayImg").show()){
				$("#dayImg").hide()
			}
			if ($("#nightImg").is(":hidden")) {
				$("#nightImg").show();
			}else{
				$("#nightImg").hide();
			}
		});
		$("#btn2").click(function(event) {
			if($("#nightImg").show()){
				$("#nightImg").hide()
			}if ($("#dayImg").is(":hidden")) {
				$("#dayImg").show();
			}else{
				$("#dayImg").hide();
			}
		});

		$("ul li img").mouseover(function(event) {
			var path=$(this).attr("src");
    		$("body").append("<div id='bigimg'><img src='"+path+"' alt='' id='img2'/></div>");
    		$("#bigimg").show();
    		$("#bigimg").css("left",event.pageX+10+"px");
    		$("#bigimg").css("top",event.pageY+10+"px");
    	}).mouseout(function(event) {
    		$("#bigimg").remove();
    	}).mousemove(function(event) {
			$("#bigimg").css("left",event.pageX+10+"px");
    		$("#bigimg").css("top",event.pageY+10+"px");  
    	}).click(function(event) {
    		return false;
    	});
	})