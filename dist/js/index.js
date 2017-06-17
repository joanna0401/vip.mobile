$(function() {
    // 首页屏幕滚动至今日特卖,出现返回顶部按钮
    $(document).scroll(function() {
            // var top = $('.container4').offset().top;
            // console.log(top);
            if ($(document).scrollTop() >= 2500) {
                // $('#totop').css('display', 'block');
                $('#totop').show();
            } else {
                $('#totop').hide();
            }
        })
        // 选择城市
    $('#chose_city').click(function() {
        $('.chose_cities_bj').fadeIn();
        $('.chose_cities').fadeIn();
    })
    $('.close').bind('click', function() {
        $('.chose_cities_bj').fadeOut();
        $('.chose_cities').fadeOut();
    })

    //判断鼠标向上滑动, display:block,向下滑动 display:none
    var scrollFunc = function(e) {
            var direct = 0;
            e = e || window.event;
            if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件               
                if (e.wheelDelta > 0) { //当滑轮向上滚动时 
                    $('.search_list_top').css('display', 'block');
                }
                if (e.wheelDelta < 0 && $(document).scrollTop() > 320) {
                    $('.search_list_top').css('display', 'none');
                }
            } else if (e.detail) { //Firefox滑轮事件  
                if (e.detail > 0) { //当滑轮向上滚动时  
                    $('.search_list_top').css('display', 'block');
                }
                if (e.detail < 0 && $(document).scrollTop() > 320) {
                    $('.search_list_top').css('display', 'none');
                }
            }
        }
        //给页面绑定滑轮滚动事件  
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法  
    window.onmousewheel = document.onmousewheel = scrollFunc;

    // 详情页面倒计时
    // 倒计时函数
    function GetRTime() {
        var EndTime = new Date('2017/09/10 00:00:00');
        var NowTime = new Date();
        var t = EndTime.getTime() - NowTime.getTime();
        var d = 0;
        var h = 0;
        var m = 0;
        var s = 0;
        if (t >= 0) {
            d = Math.floor(t / 1000 / 60 / 60 / 24);
            h = Math.floor(t / 1000 / 60 / 60 % 24);
            m = Math.floor(t / 1000 / 60 % 60);
            s = Math.floor(t / 1000 % 60);
        }
        if (h < 10) {
            h = '0' + h;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }
        $('.days').html(d);
        $('.hours').html(h);
        // $('.minute').html(m);
        // $('.seconed').html(s);
    }
    setInterval(GetRTime, 0);
})
