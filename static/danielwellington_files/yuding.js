
function check()
{
	var flag=false;
    var product = document.getElementsByName('product'); 
	for(var i=0;i<product.length;i++){ 
	if($(product[i]).attr("checked")=="checked")
	{flag=true;}
	}
	if(flag==false)
	{
        layer.msg('请选择款式！',1,-1);
		return false;
		exit;
	}
	
 try{
  var yanse = document.getElementsByName("yanse");
  if (yanse.length != 0){
     var numa=0;
     for (var i=0; i<yanse.length; i++){
      if(yanse[i].checked) {
      numa++;
      }
     }
     if(numa==0) {
      layer.msg('请选择要购买颜色！',1,-1);
      return false;
      }
   }
}catch(ex){}

try{
  var chicun = document.getElementsByName("chicun");
  if (chicun.length != 0){
     var numa=0;
     for (var i=0; i<chicun.length; i++){
      if(chicun[i].checked) {
      numa++;
      }
     }
     if(numa==0) {
      layer.msg('请选择要购买尺码！',1,-1);
      return false;
      }
   }
}catch(ex){}
	
	if(checkspace(document.myform.name.value)) {
	document.myform.name.focus();
	layer.msg('请填写真实姓名！',1,-1);
	return false;
	}
	
	reg = /^[\u4E00-\u9FA5]{2,4}$/;
	if(!reg.test(document.myform.name.value)){
	document.myform.name.focus();
	layer.msg('请填写真实姓名！',1,-1);
	return false;
	}
	
	var mob=document.myform.mob.value;
	if(!mob.match(/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/)){
		document.myform.mob.focus();
		layer.msg('请正确输入11位手机号码！',1,-1);
		return false;
		exit; 
	}

	if(document.myform.province.value=="所属省份") {
	document.myform.province.focus();
	layer.msg('请选择所属省份！',1,-1);
	return false;
	}
	if(document.myform.city.value=="所属地级市") {
	document.myform.city.focus();
	layer.msg('请选择所属地级市！',1,-1);
	return false;
	}
	if(document.myform.area.value=="所属市、县级市") {
	document.myform.area.focus();
	layer.msg('请选择所属市、县级市！',1,-1);
	return false;
	}
	if(checkspace(document.myform.address.value)) {
	document.myform.address.focus();
	layer.msg('请填写详细地址！',1,-1);
	return false;
	}
	//if(checkspace(document.myform.yzm.value)) {
	//document.myform.yzm.focus();
	//layer.msg('请输入右侧验证码！',1,-1);
	//return false;
	//}
    //myform.submit();
	$(document).ready(function () {
	    var params = $("#myform").serialize();
	    $.ajax({
	        type: "POST",
	        url: "/Third/danielwellingtonPost",
	        data: params,
	        success: function (e) {
	            _bxmPlatformFn(getUrlParam('bxm_id'));
	            alert(e.message);
	        }
	    });
	});

	return true;
}
//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}
function checkspace(checkstr) {
  var str = '';
  for(i = 0; i < checkstr.length; i++) {
    str = str + ' ';
  }
  return (str == checkstr);
}