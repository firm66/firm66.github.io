$(function(){$(window).scroll(function(){$(window).scrollTop()>10?$(".resumeheader1").fadeIn(100):($(".resumeheader1").fadeOut(100),$(".resumeheader2").fadeIn(100))})});var myChart=echarts.init(document.getElementById("section3_echarts"));option={title:{x:"center",text:"专业技能",subtext:"Professional skills",textStyle:{color:"darkgray"},subtextStyle:{color:"#f0f0f0"}},tooltip:{trigger:"item"},toolbox:{show:!0,feature:{dataZoom:{yAxisIndex:"none"},dataView:{readOnly:!1},magicType:{type:["line","bar"]},restore:{},saveAsImage:{}},iconStyle:{normal:{borderColor:"#bff"}}},calculable:!0,grid:{borderWidth:0,y:80,y2:60},xAxis:[{type:"category",show:!0,name:"技能",nameTextStyle:{color:"#bff"},axisLine:{lineStyle:{color:"#bbb"}},axisTick:{show:!1},data:["HTML5","CSS3","JS","JQuery","Ajax","Bootstrap","JQueryUI","AngularJs","Node.js","Git","Echarts"]}],yAxis:[{type:"value",show:!0,name:"掌握程度",nameTextStyle:{color:"#bff"},axisLine:{lineStyle:{color:"#bbb"}}}],series:[{name:"技能",type:"bar",barWidth:"50%",itemStyle:{normal:{color:function(e){var t=["#C1232B","#B5C334","#FCCE10","#E87C25","#27727B","#FE8463","#9BCA63","#FAD860","#F3A43B","#60C0DD","#D7504B","#C6E579","#F4E001","#F0805A","#26C0C0"];return t[e.dataIndex]},label:{show:!0,position:"bottom",formatter:"{b}\n{c}"},shadowColor:"rgba(0, 0, 0, 0.5)",shadowBlur:6,shadowOffsetX:4,shadowOffsetY:4,barBorderRadius:4}},data:[5,4,2,4,3,4,4,4,2,4,4],animationDuration:3e3}]},myChart.setOption(option),$(function(){$(window).innerWidth()>993&&(document.getElementById("resume_left").style.height=document.getElementById("resume_right").scrollHeight+"px",document.getElementById("resume_left").style.backgroundSize="cover")});