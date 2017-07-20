/**
 * Created by Administrator on 2017/7/20.
 */
$(function () {
    $('#car').hover(
        function () {
            console.log(444)
            $(this).css({
                "background": "white",
                "color": "red"
            });
            $(".car").css({
                "color": "black"
            })
            $(".car").slideDown()
        }, function () {
            $(this).css({
                "background": "#343434",
                "color": "#9c9c9c"
            });
            $(".car").slideUp()
        })
    var oLi = $(".nav_1 nav ul .hoverList");
    var oUl = $(".nav_1 nav ul");

// oLi.children(".navIntroduction").hide();
    $("#box_position ul").mouseenter(function () {
        $("#list_ul").stop().slideDown();
    });

    $("#box_position ul").mouseleave(function () {
        $("#list_ul").stop().slideUp();
    });
    $("#list_ul").mouseenter(function () {
        $("#list_ul").stop().show();
    });



    $("#box_position #nav_ul li").mouseenter(function () {
        $("#list_ul>ul").hide();
        $(this).children("a").css({"color":"red"})
        var index = $(this).index();
        console.log(index)
        $("#list_ul>ul").eq(index).show();
    });
    $("#box_position #nav_ul li").mouseleave(function () {
        $(this).children("a").css({"color":"black"})
    });


    $('#left li').hover(
        function () {
            $(this).children("div").stop().animate({width:"toggle"},500)
        }, function () {
            $(this).children("div").stop().animate({width:"toggle"},500)
        }
    )
    $('.shadow li').hover(
        function () {
            $(this).css({
                "box-shadow": "0 15px 30px rgba(0,0,0,0.1)",
                "transform": "translate3d(0, -2px, 0",
                "transition": "1s"
            })
        }, function () {
            $(this).css({"transform": "translateY(0)", "box-shadow": "none", "transition": "1s"})
        }
    )

    /* 轮播的移动 */

    event("#carousel1","1","1");
    event("#carousel2","2","2");

    /* 轮播的封装 */
    function event(element1,element2,element3) {
        var index = 0;
        var timer = null;
        $("#left_"+element2).click(function () {
            clearInterval(timer);
            timer = setInterval(leftMove,2000);
        });
        $("#right_"+element3).click(function () {
            clearInterval(timer);
            timer = setInterval(rightMove,2000);
        });
        timer = setInterval(leftMove,2000);
        function leftMove() {
            if(index>3){
                clearInterval(timer);
            }
            index++;
            console.log(3423)
            console.log($(element1+" .carouse_ul"))
            $(element1+" .carouse_ul").animate({"marginLeft":((-index+1)*245)+"px"},1000)
        }
        function rightMove() {
            if(index<2){
                clearInterval(timer);
            }
            index--;
            $(element1+" .carouse_ul").animate({"marginLeft":((-index+1)*245)+"px"},1000)
        }

    };
})