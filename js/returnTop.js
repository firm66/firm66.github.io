/*
此插件基于Jquery,加载此插件前请先加载Jquery
开发者：似懂非懂
Blog：www.haw86.com
*/
(function($){
	$.fn.returnTop = function(options){
        var opts = $.extend({}, $.fn.returnTop.defualts, options); 
		_this = $(this);
		
		$.fn.returnTop.scrollEffects(_this,opts);//滑动
		
		_this.click(function(){
			$("html,body").animate({scrollTop:0},"fast");
			});
		
	}
	//plugin defaults
	$.fn.returnTop.defualts ={
		right:20,//右侧距离
		bottom:30 //顶部距离
	}
	
	//滑动式效果
	$.fn.returnTop.scrollEffects = function(_this,opts){
		_this.css({position:"absolute",right:opts.right});
		var scrollTop = $(window).scrollTop();
		if(scrollTop > 0){_this.show();}else{_this.hide();}
		$(window).scroll(function(){
			var topValue = opts.bottom; //获取设置的距离
			var showHeight = $(window).height();
			var scrollTop = $(window).scrollTop();
			var thisHeight = _this.height();
			if(scrollTop > 0){_this.show();}else{_this.hide();}
			var topNum = (scrollTop+showHeight)-(topValue+thisHeight);
			//alert(topNum);
			_this.stop(true,false).delay(300).animate({top:topNum},"slow");
		});
	}
	
	
	
	
})(jQuery);    


 