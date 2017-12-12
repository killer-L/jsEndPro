function register(){
	var checkbox=document.getElementById("checkbox");
        if(ck1()&&ck2()&&ck3()&&ck4()&&ck5()&&ck6()){
        	if(checkbox.checked == true){
        		alert("完成注册，请登录!");
        		return true;
        	}
            else{
            	alert("请勾选我同意遵守会员协议！");
            	return false;
            }
        }else{
            alert("请把所有信息完善正确！！！");
            return false;
        }

    }

    function ck1(){
    	var name=document.form1.username.value;
    	var g=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
    	var sp1=document.getElementById("sp1");
    	if(!g.test(name)){
    		sp1.innerHTML="用户名必须是4-16位，且第一位必须是字母";
            return false;
    	}
        else{
    		sp1.innerHTML="";
            return true;
    	}
    }
    function ck2(){
    	var password=document.form1.psw.value;
        var password2=document.form1.psw2.value;
    	var g1=/^[0][0-9]{7}$/;
    	var sp2=document.getElementById("sp2");
    	if(!g1.test(password)){
    		sp2.innerHTML="学号必须0开头的8位数字";
            return false;
    	}else{
    		sp2.innerHTML="";
            return true;
    	}
    }
    function ck3(){
        var password=document.form1.psw.value;
    	var password2=document.form1.psw2.value;
    	var g3=/^[0][0-9]{7}$/;
    	var sp3=document.getElementById("sp3");
    	if(!g3.test(password2)){
    		sp3.innerHTML="重复学号必须0开头的8位数字";
            return false;
    	}else if(password!=password2){
            sp3.innerHTML="两次学号不相同";
            return false;
        }else{
    		sp3.innerHTML="";
            return true;
    	}
    }
    function ck4(){
    	var email=document.form1.email.value;
    	var g4=/^[a-zA-Z0-9]+[a-zA-Z0-9_]*@([a-zA-Z0-9]+\.)+(com|cn|COM|CN)$/;
    	var sp4=document.getElementById("sp4");
    	if(!g4.test(email)){
    		sp4.innerHTML="email地址必须是字母开始并且***@***.***.com或***@***.***.cn这种格式";
            return false;
    	}else{
    		sp4.innerHTML="";
            return true;
    	}
    }

    function ck5(){
    	var tel=document.form1.tel.value;
    	var g5=/^[1][0-9]{10}$/;
    	var sp5=document.getElementById("sp5");
    	if(!g5.test(tel)){
    		sp5.innerHTML="电话号码必须是1开始的11位数字";
            return false;
    	}else{
    		sp5.innerHTML="";
            return true;
    	}
    }

    function ck6(){
    	var birthday=document.form1.birthday.value;
    	var g6=/^(\d{4})-(\d{2})-(\d{2})$/;
    	var span6=document.getElementById("sp6");
        var arr=null;
    	if((arr=g6.exec(birthday))==null){
    		sp6.innerHTML="生日格式为1980-05-12或1988-05-04的形式";
            return false;
    	}else if(arr[1]<1980||arr[1]>2014){
            sp6.innerHTML="年份只能是1980-2014";
            return false;
        }else if(arr[2]<1||arr[2]>12){
            sp6.innerHTML="请输入正确的月份";
            return false;
        }else if(arr[3]<1||arr[3]>31){
            sp6.innerHTML="请输入正确的日期";
            return false;
        }else{
    		sp6.innerHTML="";
            return true;
    	}
    }