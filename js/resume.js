//当滚动条的位置处于距顶部200像素以下时，顶部导航出现，否则消失
$(function () {
$(window).scroll(function () {
if ($(window).scrollTop() > 10) {
$(".resumeheader1").fadeIn(100);
//    $(".resumeheader2").fadeOut(100);
}
else {
$(".resumeheader1").fadeOut(100);
    $(".resumeheader2").fadeIn(100);
}
});
});
/*echarts*/
var myChart = echarts.init(document.getElementById('section3_echarts'));  
      option = {
       title: {
        x: 'center',
        text: '专业技能',
        subtext: 'Professional skills',
        textStyle: {
        	color: 'darkgray'
        },
        subtextStyle: {
        	color: '#f0f0f0'
        }
      
    },
    tooltip: {
        trigger: 'item'
    },
    toolbox: {
        show: true,
         feature: {
            dataZoom: {   //数据区域缩放
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},   
            magicType: {type: ['line', 'bar']},  
            restore: {},  
            saveAsImage: {}   
        },
           iconStyle: {   //颜色
            	normal: {borderColor: '#bff'}
            }
    },
    calculable: true,
    grid: {
        borderWidth: 0,
        y: 80,
        y2: 60
    },
    xAxis: [
        {
            type: 'category',
            show: true,
            name: '技能',
            nameTextStyle: {
            	color: '#bff'
            },
            axisLine: {  //坐标轴颜色
            	lineStyle: {color: '#bbb'}
            },
            axisTick: {
            	show: false  //不显示x轴刻度
            },
            data: ['HTML5', 'CSS3', 'JS', 'JQuery', 'Ajax', 'Bootstrap', 'JQueryUI', 'AngularJs', 'Node.js', 'Git', 'Echarts']
        }
    ],
    yAxis: [
        {
            type: 'value',
            show: true,
            name: '掌握程度',
            nameTextStyle: {
            	color: '#bff'
            },
             axisLine: {  
            	lineStyle: {color: '#bbb'}
            }
        }
    ],
    series: [
        {
            name: '技能',
            type: 'bar',
            barWidth: '50%',
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'bottom',
                        formatter: '{b}\n{c}'
                    },
                  shadowColor: 'rgba(0, 0, 0, 0.5)',  //柱状图形的阴影
                  shadowBlur: 6,
                  shadowOffsetX: 4,
                  shadowOffsetY: 4,
                  barBorderRadius: 4,  //  
                }
            },
            data: [5,4,3,4,3,3,4,5,3,4,3],
            animationDuration: 3000, //初始动画时长
        }
    ]
};
			myChart.setOption(option); 
$(function(){
    if($(window).innerWidth()>993){ /*innerWidth包括滚动条*/
 document.getElementById("resume_left").style.height=document.getElementById("resume_right").scrollHeight+"px"; /*左边右边相等*/
    document.getElementById("resume_left").style.backgroundSize="cover"; 
    /*背景图片适应高度*/
    }
})
