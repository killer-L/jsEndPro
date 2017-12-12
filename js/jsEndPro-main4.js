/*
* @Author: killer
* @Date:   2017-12-09 17:51:37
* @Last Modified by:   killer
* @Last Modified time: 2017-12-12 23:37:13
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
		$("#gr_img1").click(function(event) {
			$(".gr_btn1").animate({width:"150px",height:"50px"}, 1000,function(){
				$(".gr_btn2").animate({width:"150px",height:"50px"}, 1000,function(){
					$(".gr_btn3").animate({width:"150px",height:"50px"}, 1000);
				})
			})
		});
			$(".grhd").hide();
			$(".gr_btn1").click(function(event) {
				if ($(".grhd").is(":hidden")) {
				$(".grhd").show();
			}else{
				$(".grhd").hide();
			}
			});
			$(".bjhd").hide();
			$(".gr_btn2").click(function(event) {
				if ($(".bjhd").is(":hidden")) {
				$(".bjhd").show();
			}else{
				$(".bjhd").hide();
			}
			});
			$(".jxhd").hide();
			$(".gr_btn3").click(function(event) {
				if ($(".jxhd").is(":hidden")) {
				$(".jxhd").show();
			}else{
				$(".jxhd").hide();
			}
			});


			$(".bjhd_img").mouseover(function(event) {
				var path=$(this).attr("src");
	    		$("body").append("<div id='bigimg2'><img src='"+path+"' alt='' id='bjhd_img2'/></div>");
	    		$("#bigimg2").show();
	    		$("#bigimg2").css("left",event.pageX+10+"px");
	    		$("#bigimg2").css("top",event.pageY+10+"px");
	    	}).mouseout(function(event) {
	    		$("#bigimg2").remove();
	    	}).mousemove(function(event) {
				$("#bigimg2").css("left",event.pageX+10+"px");
	    		$("#bigimg2").css("top",event.pageY+10+"px");  
	    	}).click(function(event) {
	    		return false;
	    	});

	    	$(".jxhd_img").mouseover(function(event) {
				var path=$(this).attr("src");
	    		$("body").append("<div id='bigimg2'><img src='"+path+"' alt='' id='jxhd_img2'/></div>");
	    		$("#bigimg2").show();
	    		$("#bigimg2").css("left",event.pageX+10+"px");
	    		$("#bigimg2").css("top",event.pageY+10+"px");
	    	}).mouseout(function(event) {
	    		$("#bigimg2").remove();
	    	}).mousemove(function(event) {
				$("#bigimg2").css("left",event.pageX+10+"px");
	    		$("#bigimg2").css("top",event.pageY+10+"px");  
	    	}).click(function(event) {
	    		return false;
	    	});

	})

		var arr=["images/gr1.jpg","images/gr2.jpg","images/gr3.jpg","images/gr4.jpg"];
		var index=0;
		var time=null;
		function shownext2(){
			var img1=document.getElementById("gr_img2");
			img1.src=arr[index];
			index++;
			if(index==arr.length){
				index=0;
			}
			time=window.setTimeout("shownext2()", 1000);
		}

