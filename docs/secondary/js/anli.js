var banner=document.getElementById('banner');
var pic=banner.getElementsByTagName('img');
var mid_num=parseInt(pic.length/2);
var mid_left=parseInt((banner.offsetWidth-pic[mid_num].offsetWidth)/2);

// console.log(mid_left);
// pic[3].style.left=mid_left+"px";
render(mid_num);
function render(mid_num){
	for(var i=0;i<pic.length;i++){
		pic[i].style.left=mid_left-(mid_num-i)*100+"px";//找到每张图片的位置；
		pic[i].index=i;//保存一下i的值，赋值给pic[i]对象的属性index；
		if(i<mid_num){
			pic[i].setAttribute("class","left");
		}
		if(i>mid_num){
			pic[i].setAttribute("class","right");
		}
		if(i==mid_num){
			pic[i].setAttribute("class","middle");
		}
		pic[i].onclick=function(){
			render(this.index);//this指向调用函数的对象本身,即pic[0],pic[1]……
		}
	}
}
