$(function(){  /*工具提示*/
    $("[data-toggle='tooltip']").tooltip();  
});
$(function () { 
    $('p.example').bumpyText(); /*文字跳动*/
    $(".thumbnail:eq(0),.thumbnail:eq(1),.thumbnail:eq(2)")
        .effect("pulsate",{times:2},1000); //闪动效果 
    $(".thumbnail:eq(0),.thumbnail:eq(1),.thumbnail:eq(2)")
        .effect("explode",{mode:'hide',pieces:'36'},1000); //爆炸效果
    $(".thumbnail:eq(0),.thumbnail:eq(1),.thumbnail:eq(2)")
        .effect("bounce",{mode:'show',times:3},1000);  //反弹效果
    
      $(".thumbnail:eq(3),.thumbnail:eq(5)").delay(4000)
          .effect("scale",{mode:'hide'},1000); //缩放效果 
      $(".thumbnail:eq(4)").delay(3000)
          .effect("shake",{times:3,direction:'right'},1000); //震动效果
	  $(".thumbnail:eq(3)")
          .effect("drop",{mode:'show',direction:'right'},1000);  //降落效果
      $(".thumbnail:eq(5)")
          .effect("drop",{mode:'show',direction:'left'},1000);
				
});


