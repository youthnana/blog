window.onload=function(){
	var page1=document.getElementById('page1');
	var page2=document.getElementById('page2');
	var page3=document.getElementById('page3');

	var music=document.getElementById('music');
	var audio=document.getElementsByTagName('audio')[0];
	// 音乐播放完，停止旋转
	audio.addEventListener("ended",function(event){
		music.setAttribute("class","");
		// music.style.animationPlayState="paused";
	},false)
	// 点击音乐图标，音乐停止，停止旋转
	// music.onclick=function(){
	// 	if(audio.paused){
	// 		audio.play();
	// 		this.setAttribute("class","play");
	// 		// this.style.animationPlayState="running";兼容性问题
	// 		// this.style.webkitanimationPlayState="running";安卓兼容性问题

	// 	}
	// 	else{
	// 		audio.pause();
	// 		this.setAttribute("class","");
	// 		// this.style.animationPlayState="paused";兼容性问题
	// 		// this.style.webkitanimationPlayState="running";安卓兼容性问题

	// 	}
	// };
// 点击音乐图标，音乐停止，停止旋转
	music.addEventListener("touchstart",function(event){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","play");
		}
		else{
			audio.pause();
			this.setAttribute("class","");
		}

	},false)

	page1.addEventListener("touchstart",function(event){
		page1.style.display="none";
		page2.style.display="block";
		page3.style.display="block";
		page3.style.top="100%";

		setTimeout(function(){
			page2.setAttribute("class","page fadeOut");//增加一个class
			page3.setAttribute("class","page fadeIn");

		},5500);
	},false);
}