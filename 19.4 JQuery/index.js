$(document).ready(function(){
    // jQuery functions go here
    // 开始动画
    $(".OpenJQuery").click(function(){
        $(".spanFirst").hide(10000,function(){
            console.log("span 已经隐藏了");
        });
        $(".thirdSpan").slideToggle(10000,function(){
            console.log("span 开始滑动");
        });

        $(".secondSpan").animate({
            left:'250px',
            opacity:'0.5',
            height:'150px',
            width:'150px'
        },5000,function(){
            console.log("span 开始执行动画了");
        })
    });

    // 停止动画
    $(".CloseJQuery").click(function(){
        console.log("停止动画按钮被点击");
        // 返回关闭 JQuery
        console.log($(this).text());
        console.log($(this).html());
        $(".thirdSpan").stop();
        $(".thirdSpan").append("我是插入的元素");
        $(".thirdSpan").after("我是插入的元素");
    })
  });