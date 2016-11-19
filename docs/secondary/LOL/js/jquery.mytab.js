/*
*	@author yourname
*	@email 
*	@qq 
* @lastdate 
* 插件功能 描述，代码结构要求
*/

;(function ($) {
  var pluginName = 'mytab',  //定义插件名
  	  //插件的参数默认值
      defaults = {
        etype:"mouseover",
        etarget:".tab_content",
        eclassname:"act"
      };

  //... 插件主体功能代码 ...
  $.fn[ pluginName ] = function (options) {
	  
	  var settings = $.extend({}, defaults, options);//将默认值,参数值合并到setting
	  
	  //主体代码开始
    $(this).on(settings.etype,"li",tabHandler); 
    function tabHandler(e){
      var _this=this;
      var tabcont=$(settings.etarget).children();    
      mytab($(_this).index());
      function mytab(now){  
        tabcont.eq(now).siblings().css({'display':'none'});
        tabcont.eq(now).css({'display':'block'});
        $(_this).addClass(settings.eclassname);
        $(_this).siblings().removeClass(settings.eclassname);
      }
    }

  }

})(jQuery);


