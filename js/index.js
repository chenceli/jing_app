/**
 * Created by chen on 2018/3/9.
 */
$(function () {

    //banner
    let div=$('.banner');
    let banner=$('.banner_img li',div);
    let circles=$('.lunbodian li',div);
    let n=0;
    $(banner).eq(0).addClass('bannerActive').siblings(banner).removeClass('bannerActive');
    function move() {
        if (n>=banner.length) {
            n=0;
        }
        $(banner).eq(n).addClass('bannerActive').siblings(banner).removeClass('bannerActive');
        $(circles).eq(n).addClass('bannerActive').siblings(circles).removeClass('bannerActive');
        n++;
    }
    let t=setInterval(move,2000);
    $(div).mouseenter(function () {
        clearInterval(t);
    });
    $(div).mouseleave(function () {
        t=setInterval(move,2000);
    });
    $(circles).click(function(){
        n=$(this).index();
        move();
    });
    $(arrowLeft).click(function(){
        clearInterval(t);
        if (n<0) {
            n=banner.length-1;
        }
        $(banner).eq(n).addClass('bannerActive').siblings(banner).removeClass('bannerActive');
        $(circles).eq(n).addClass('bannerActive').siblings(circles).removeClass('bannerActive');
        n--;
    });
    $(arrowRight).click(function(){
        move();
    });

})