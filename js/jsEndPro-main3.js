/*
* @Author: killer
* @Date:   2017-12-09 17:51:37
* @Last Modified by:   killer
* @Last Modified time: 2017-12-12 23:37:15
*/
window.onload=function(){init();}

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
		$("#kmjs").hide();
		$("#btn3").click(function(event) {
			if ($("#kmjs").is(":hidden")) {
				$("#kmjs").show();
			}else{
				$("#kmjs").hide();
			}
		});

		$("#xqah").hide();
		$("#btn4").click(function(event) {
			if ($("#xqah").is(":hidden")) {
				$("#xqah").show();
				init2();
			}else{
				$("#xqah").hide();
			}
		});

		$(".td2").mouseover(function(event) {

			var path=$(this).text();
			
    		$("body").append("<div id='bigimg'><img src='images/"+path+".jpg' alt='' id='img2'/></div>");
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
	/*兴趣爱好*/
    	var arr1=["images/music.jpg","images/sport.jpg","images/talk.jpg",
    				"images/trip.jpg","images/computer.jpg"];
	   	var arr2=["听音乐","做运动","聚会聊天","旅游","敲代码"];
	   	var index=0;
	    var oldindex=-1;
	   	var time=null;
	   	function init2(){
	   		var div2=document.getElementById("xqah_div2");
	   		var numberdiv=div2.getElementsByTagName("div");
		   	for (var i = 0; i < numberdiv.length; i++) {
	   			numberdiv[i].onclick=fun1;
	   	};
	   	update();
	   }
	   function fun1(){
	      if(this.className=="xqah_over"){
	         return;
	      }
	   	window.clearTimeout(time);
	      index=Number(this.innerHTML)-1;
	      update();
	   }
	   function update(){
	   	var img1=document.getElementById("xqah_img1");
	   	img1.src=arr1[index];
	   	var div2=document.getElementById("xqah_div2");
	   	var numberdiv = div2.getElementsByTagName("div");
	   	numberdiv[index].innerHTML=arr2[index];
	   	numberdiv[index].className="xqah_over";
	      if (oldindex!=-1) {
	         numberdiv[oldindex].innerHTML=oldindex+1;
	         numberdiv[oldindex].className="number";
	      };
	      oldindex=index;
	   	index++;
	   	if (index==arr1.length) {
	   		index=0;
	   	}
	   	time=window.setTimeout("update()",1000);
	   }