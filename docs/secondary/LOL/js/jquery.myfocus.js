/*
*	@author yourname
*	@email 
*	@qq 
* @lastdate 
* 插件功能 描述，代码结构要求
*/

;(function ($) {
  var pluginName = 'myfocus',  //定义插件名
  	  //插件的参数默认值
      defaults = {
        eclassname:"act",
        etagname:"li",
        econt:".focus_content",
        etxt:".pictit",
        etimer:2000
      };

  //... 插件主体功能代码 ...
  $.fn[ pluginName ] = function (options) {
	  
	  var settings = $.extend({}, defaults, options);//将默认值,参数值合并到setting
	  
	  //主体代码开始

    var $img_list=$(settings.econt);
    var $pictxt=$(settings.etxt);
    var oldindex=0;//旧的图片索引值，默认为第一张图
    //添加图片说明
    var imga=$img_list.children().eq(0).children().first();
    // if(settings.etxt!=""){
      $pictxt.text(imga.attr('alt'));
    // }
    

    //自动轮播效果
    var timer=setInterval(autoplay,settings.etimer);//3-6s
    var timerout;
    function autoplay(){
      var nowindex;
      if(oldindex<$img_list.children().length-1){ 
        nowindex=oldindex+1;
      }
      else{
        nowindex=0;
      }
      fcsChange(oldindex,nowindex);
    }

    //定义二级DOM事件，使用事件代理
    $(this).on("mouseover",settings.etagname,fcsHandler);
    $(this).on("mouseout",settings.etagname,outHandler);
      var athis=this;
      function fcsHandler(){
        var _this=this;
          clearInterval(timer);
          timerout=setTimeout(function(){//防止用户的无意识操作带来的图片闪动的问题，延迟200ms执行
            fcsChange(oldindex,$(_this).index());
          },200);   
      }
      //函数outHandler():判断鼠标离开li时将计时器设置回来;
      function outHandler(){
          timer=setInterval(autoplay,settings.etimer);
          clearTimeout(timerout);//当用户无意识操作,鼠标离开清除延时执行,
          //即达到无意识操作不执行fcsChange()切换函数；
      }

    //函数fcsChange(old,now)实现切换
    function fcsChange(old,now){//无论是自动轮播还是onmouseover都只是涉及两张图片的操作
      if(old!=now){//当old=now时不执行操作；解决当鼠标移入与自动轮播是一张图片时出错的问题
        $img_list.children().eq(now).fadeIn();
        $img_list.children().eq(old).fadeOut();
        $(athis).children().eq(old).removeClass(settings.eclassname);//清除上一张图片的样式
        $(athis).children().eq(now).addClass(settings.eclassname);//设置新的图片的样式
        oldindex=now;//把now的值赋值给oldindex，当now的值改变时，oldindex变成之前now的值；
        //添加图片说明
        $pictxt.text($img_list.children().eq(now).children().first().attr('alt'));
      }
    }
  }

})(jQuery);


