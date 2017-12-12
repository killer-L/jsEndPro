/*
* @Author: killer
* @Date:   2017-12-09 17:51:37
* @Last Modified by:   killer
* @Last Modified time: 2017-12-12 23:37:15
*/
/*main*/
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
