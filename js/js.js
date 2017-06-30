/*** Created by 刘晨 on 2017/6/9.*/
    $("body>span").tap(
        function(){
            $(this).toggleClass("xuanzhuan");
            if($("#yy").get(0).paused){
                $("#yy").get(0).play();
            }
            else{
                $("#yy").get(0).pause();
            }
        }
    );

var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
})
