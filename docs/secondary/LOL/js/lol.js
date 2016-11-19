
var oHead=$("#header")
var oNav=$("#nav")
oHead.on("mouseover",function(){
	oNav.css({display:"block"})
})
oNav.on("mouseover",function(){
	oNav.css({display:"block"})
})
oNav.on("mouseout",function(){
	oNav.css({display:"none"})
})
// -------------------原计划js------------------------------
var mycont=$('.cbtn');
	mycont.myfocus({
		eclassname:"acte",
		econt:".cont"
	});
// ----------------视频中心js------------------------------

var vbtn=$("#cards");
vbtn.mytab({
	 etarget:".videocont",
	 eclassname:"vact"
})
// -----------------比赛中心js-----------------------------

var vbtn=$("#match");
vbtn.mytab({
	 etarget:".mcont",
	 eclassname:"mact"
})
// -------------------客服专区js-----------------------------
var vbtn=$(".se-list");
vbtn.mytab({
	 etarget:".servicecont",
	 eclassname:"seact"
})
// -----------------------新闻中心js--------------------------------------
var vbtn=$("#news_list");
vbtn.mytab({
	 etarget:".newcont",
	 eclassname:"nact"
})
// -------------------皮肤中心js------------------------------------------

var vbtn=$("#skin");
vbtn.mytab({
	 etarget:".skincont",
	 eclassname:"sact"
})
// -----------------下拉列表js---------------------------------
var oSec=$("#sec1");
$("#secbtn").on("click",function(){
	if(oSec.css('display')=="none"){
		oSec.css({display:"block"});
	}
	else{
		oSec.css({display:"none"});
	}
})