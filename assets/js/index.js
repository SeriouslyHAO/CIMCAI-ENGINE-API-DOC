$(function(){
    var flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    var mobile = document.getElementById("mobile");
    var web = document.getElementById("web");
    var mobileSwiper = document.getElementById("mobile-swiper");
    var webTree = document.getElementById("web-tree");
    var mobileTree = document.getElementById("mobile-tree");
    var webSwiper = document.getElementById("web-swiper");
    var english = document.getElementById("en");
    var apiPage = document.getElementById("api-web");
    var innerVideo = document.getElementById("inner-video");

    var videoName = document.getElementById('inner-video');
    if (videoName) {
        //点击图片的时候暂停，并且使图片隐藏，再次点击视频或者图片的时候播放
        videoName.onclick = function() {
            if (videoName.paused) {
                videoName.play();
                $(".play").each(function (i, n) {
                    n.style.display = 'none'
                });
            } else {
                videoName.pause();
                $(".play").each(function (i, n) {
                    n.style.display = 'inline-block'
                });
            }
        };
    }

    if (!apiPage) {
        var video = document.getElementById('dash');
        var counter = document.getElementById('counter');
        if (counter && video) {
            autoPlay(video);
            var status = true;
            DiGui = function (param) {
                $.ajax({
                    url: 'http://service.cimcai.com/count',
                    method: 'get',
                    success: function(data){
                        $('#counter').text(formatNum(String(data.data.count)));
                        if (status) {
                            $('.counter').countUp();
                            status= false;
                            window.setInterval("DiGui()", 60000);
                        }
                    }
                });
            };
            DiGui();
            $('.video-js').bind('contextmenu',function() { return false; });
        }
        window.onscroll = function() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > 0) {
                $('header').addClass('is-show')
            } else {
                $('header').removeClass('is-show')
            }

            if (!flag) {
                var video_list = [];
                video_list.push(document.getElementById('dash'));
                video_list.push(document.getElementById('video1'));
                video_list.push(document.getElementById('video2'));
                video_list.push(document.getElementById('video3'));
                video_list.push(document.getElementById('video4'));
                video_list.push(document.getElementById('video5'));
                video_list.push(document.getElementById('video6'));
                video_list.push(document.getElementById('video7'));
                video_list.push(document.getElementById('video10'));
                video_list.push(document.getElementById('video11'));
                video_list.push(document.getElementById('engine'));
                video_list.push(document.getElementById('tally'));
                video_list.push(document.getElementById('ship'));

                video_list.forEach(function(value,index,array){
                    autoPlay(value)
                })
            }
        };

        $(document).ready(function(){
            $('.video-js').bind('contextmenu',function() { return false; });
            $(".jump").bind("click touch",function(){
                $('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top -50 )},1000);
            });
        });
    } else {
        // gundong1(flag)
        if (flag) {
            $(".target").each(function (i, n) {
                n.style.display = 'block'
            });

            $(".side-nav").each(function (i, n) {
                n.style.display = 'none'
            });
            $(".box-nav").each(function (i, n) {
                n.style.display = 'none'
            });
        }
    }


    if (innerVideo) {
        $(".play").each(function (i, n) {
            n.style.display = 'inline-block'
        });
    }

    if (flag) {

        if (mobile) {
            mobile.style.display = 'block';
        }
        if (web) {
            web.style.display = 'none';
        }
        if (mobileSwiper) {
            mobileSwiper.style.display = 'block';
        }
        if (webSwiper) {
            webSwiper.style.display = 'none';
        }

        if (mobileTree) {
            mobileTree.style.display = 'block';
        }
        if (webTree) {
            webTree.style.display = 'none';
        }

        $(".tooltiptext").each(function (i, n) {
            n.className = "tooltiptext mobile-tip"
        });

        document.addEventListener("WeixinJSBridgeReady",function() {
            document.getElementById('dash').play();
        }, false);

        $(".play").each(function (i, n) {
            n.style.display = 'inline-block'
        });

        var ua = navigator.userAgent.toLowerCase();
        var content = "";
        if (ua.match(/MicroMessenger/i)) {
            if (english) {
                content = "Long click to consult us";
            } else {
                content = "请长按关注联系我们";
            }

        } else {
            if (english) {
                content = "Please save the above picture, scan the code on WeChat, follow us and consult us"
            } else {
                content = "请保存图片，微信扫码关注联系我们"
            }
        }

        $(".wechat-pop").popover({
            html: true,
            trigger: "click",
            animation: false,
            placement: "bottom",
            container: "body",
            toggle: "popover",
            popperOptions: { boundariesElement: 'viewport', gpuAcceleration: true },
            content: '<a href="tel:400-880-5717" type="button" class="popover-btn">电话：400-880-5717</a><a href="javascript:void(0);" type="button" class="popover-btn">邮箱：cooperate@cimcai.com</a><div class="popover-img"><img src="http://www.cimcai.com/assets/img/order.jpg" alt="集装箱智能化,集装箱自动化,集装箱码头智能化,集装箱码头自动化,集装箱智能识别,集装箱残缺识别,智能化集装箱" /><h4 class="wechat-font">' + content +'</h4></div>'
        }).on("click", function (e) {
            $(".wechat-pop").popover('destory');
            $(this).popover("show");
        }).on("mouseleave", function () {
            if (!$(".popover:hover").length) {
                $(this).popover("hide");
            }
        });
    } else {

        if (mobile) {
            mobile.style.display = 'none';
        }
        if (web) {
            web.style.display = 'block';
        }

        if (mobileTree) {
            mobileTree.style.display = 'none';
        }
        if (webTree) {
            webTree.style.display = 'block';
        }

        if (mobileSwiper) {
            mobileSwiper.style.display = 'none';
        }
        if (webSwiper) {
            webSwiper.style.display = 'block';
            $('#web-swiper .content-contaner').on('mouseenter', function (e) {
                $(this).find("img").css("transform","scale(1.1)");
                $(this).find("img").css("transition", "all 2s");
            });

            $('#web-swiper .content-contaner').on('mouseleave', function (e) {
                $(this).find("img").css("transform","scale(1)");
                $(this).find("img").css("transition", "all 2s");
            });

            effect = 0;
            var swiper = new Swiper('.swiper-container', {
                loop: true,
                speed: 500,
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50,
                watchSlidesProgress : true,
                on: {
                    setTranslate: function(){
                        slides = this.slides;
                        for(i=0; i< slides.length; i++){
                            slide = slides.eq(i);
                            progress = slides[i].progress;
                            slide.css({'opacity': '','background': ''});slide.transform('');//清除样式
                            if(effect == 1){
                                slide.transform('scale('+(1 - Math.abs(progress)/8)+')');
                            }else if(effect == 2){
                                slide.css('opacity',(1-Math.abs(progress)/6));
                                slide.transform('translate3d(0,'+ Math.abs(progress)*20+'px, 0)');
                            }
                            else if(effect == 3){
                                slide.transform('rotate('+ progress*30+'deg)');
                            }else if(effect == 4){
                                slide.css('background','rgba('+ (255 - Math.abs(progress)*20) +','+ (127 + progress*32) +',' + Math.abs(progress)*64 + ')');
                            }

                        }
                    },
                    setTransition: function(transition) {
                        for (var i = 0; i < this.slides.length; i++) {
                            var slide = this.slides.eq(i);
                            slide.transition(transition);
                        }
                    }
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            });
        }

        $(".tooltiptext").each(function (i, n) {
            n.className = "tooltiptext web-tip"
        });

        var html = '';
        if (english) {
            html = '<a href="http://ccash.cimcai.com/" target="_blank" type="button" class="popover-btn">Container Condition HouseKeeper</a><a href="http://sgs.cimcai.com/" target="_blank" type="button" class="popover-btn">Intelligent Gate System</a><div class="popover-img"><img src="http://www.cimcai.com/assets/img/wechat.jpg" alt="集装箱智能化,集装箱自动化,集装箱码头智能化,集装箱码头自动化,集装箱智能识别,集装箱残缺识别,智能化集装箱" /><h4>Tick Container Inspector</h4></div>'
       } else {
            html = '<a href="http://ccash.cimcai.com/" target="_blank" type="button" class="popover-btn">箱况管家</a><a href="http://sgs.cimcai.com/" target="_blank" type="button" class="popover-btn">智能闸口系统</a><div class="popover-img"><img src="http://www.cimcai.com/assets/img/wechat.jpg" alt="集装箱智能化,集装箱自动化,集装箱码头智能化,集装箱码头自动化,集装箱智能识别,集装箱残缺识别,智能化集装箱" /><h4>滴答验箱 快速验箱</h4></div>'
        }

        $(".pop").popover({
            html: true,
            trigger: "manual",
            animation: false,
            placement: "bottom",
            container: "body",
            toggle: "popover",
            popperOptions: { boundariesElement: 'viewport', gpuAcceleration: true },
            content: html
        }).on("mouseenter", function () {
            var _this = this;   // 这里的this触发的dom,需要存起来 否则在下面 .popover的逻辑中this会变为弹出的dom
            $(_this).popover("show");
            $(".popover").on("mouseleave", function () {
                $(_this).popover('hide');
            });
        }).on("mouseleave", function () {
            var _this = this;
            setTimeout(function () {
                if (!$(".popover:hover").length) {
                    $(_this).popover("hide");
                }
            }, 200);
        });

        var html_wechat = '';
        if (english) {
            html_wechat = '<a href="javascript:void(0);" type="button" class="popover-btn">Tel:400-880-5717</a><a href="javascript:void(0);" type="button" class="popover-btn">Email:cooperate@cimcai.com</a><div class="popover-img"><img src="http://www.cimcai.com/assets/img/order.jpg" alt="集装箱智能化,集装箱自动化,集装箱码头智能化,集装箱码头自动化,集装箱智能识别,集装箱残缺识别,智能化集装箱" /><h4 class="wechat-font">Please scan the QR code on WeChat to follow and consult us</h4></div>'
        } else {
            html_wechat = '<a href="javascript:void(0);" type="button" class="popover-btn">电话：400-880-5717</a><a href="javascript:void(0);" type="button" class="popover-btn">邮箱：cooperate@cimcai.com</a><div class="popover-img"><img src="http://www.cimcai.com/assets/img/order.jpg" alt="集装箱智能化,集装箱自动化,集装箱码头智能化,集装箱码头自动化,集装箱智能识别,集装箱残缺识别,智能化集装箱" /><h4 class="wechat-font">微信扫码关注咨询我们</h4></div>'
        }

        $(".wechat-bottom-pop").popover({
            html: true,
            trigger: "manual",
            animation: false,
            placement: "bottom",
            container: "body",
            toggle: "popover",
            popperOptions: { boundariesElement: 'viewport', gpuAcceleration: true },
            content: html_wechat
        }).on("mouseenter", function () {
            var _this = this;   // 这里的this触发的dom,需要存起来 否则在下面 .popover的逻辑中this会变为弹出的dom
            $(_this).popover("show");
            $(".popover").on("mouseleave", function () {
                $(_this).popover('hide');
            });
        }).on("mouseleave", function () {
            var _this = this;
            setTimeout(function () {
                if (!$(".popover:hover").length) {
                    $(_this).popover("hide");
                }
            }, 200);
        });

        $(".wechat-pop").popover({
            html: true,
            trigger: "manual",
            animation: false,
            placement: "bottom",
            container: "body",
            toggle: "popover",
            popperOptions: { boundariesElement: 'viewport', gpuAcceleration: true },
            content: html_wechat
        }).on("mouseenter", function () {
            var _this = this;   // 这里的this触发的dom,需要存起来 否则在下面 .popover的逻辑中this会变为弹出的dom
            $(_this).popover("show");
            $(".popover").on("mouseleave", function () {
                $(_this).popover('hide');
            });
        }).on("mouseleave", function () {
            var _this = this;
            setTimeout(function () {
                if (!$(".popover:hover").length) {
                    $(_this).popover("hide");
                }
            }, 200);
        });
    }

});




var isVisible = function(dom) {
    var top = dom.getBoundingClientRect().top //元素顶端到可见区域顶端的距离
    var se = document.documentElement.clientHeight //浏览器可见区域高度。
    return top > 0 && se > top
    // var scrTop = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(dom, scrTop, dom.offsetTop. dom.offsetHeight)
    // return !(scrTop > (dom.offsetTop + dom.offsetHeight) || (scrTop + window.innerHeight) < dom.offsetTop);
};

function autoPlay(video) {
    if (video && isVisible(video)) {
        video.play();
        if (video.currentTime === 0) {
            $(".load").show();
        }
        video.addEventListener('timeupdate', function (e) {
            if(video.currentTime>0){// 当前播放的进度
                $(".load").hide();
            }else{
                $(".load").show();
            }
        })
    }
}

function playVideo(e) {
    var videoId = e.target.previousElementSibling.id;
    var videoName = document.getElementById(videoId);
    if (videoName.paused) {
        $(".load").show();//loading层显示
        videoName.play();
        e.target.style.display = "none";   //播放的时候图标隐藏
        videoName.addEventListener('timeupdate', function (e) {
            if(videoName.currentTime>0){// 当前播放的进度
                $(".load").hide();
            }else{
                $(".load").show();
            }
        })
    } else {
        videoName.pause();
        e.target.style.display = "block";   //暂停的时候图标显示
    }
}

function toNext_ccash() {
    window.open("http://ccash.cimcai.com/");
}

function toNext_sgs() {
    window.open("http://sgs.cimcai.com/");
}

function gundong1(flag){
    if (flag) {
        if (window.location.hash.indexOf('#') >= 0) {
            $('html,body').animate({
                    scrollTop: ($(window.location.hash).offset().top - 80) + "px"
                },
                0);
        };
    } else {
        $('.side-item').on("click",function (e) {
            e.preventDefault();
            $('html,body').animate({scrollTop: ($('.content').eq($(this).index()).offset().top - 90 )},1000);
        })
    }

    //滚动事件
    $(window).scroll(function() {
        var con_scroll = $(this).scrollTop();
        $('.content').each(function(index, domEle){
            var md_index = $(this).offset().top-50;
            if(con_scroll>md_index-50){
                console.log($('.side-item').eq(index))
                $('.side-item').eq(index).addClass("active").siblings().removeClass('active')
            }
        })
    });
}

function formatNum(str) {
    var newStr = "";
    var count = 0;
    if (str.indexOf(".") == -1) {
        for (var i = str.length - 1; i >= 0; i--) {
            if (count % 3 == 0 && count != 0) {
                newStr = str.charAt(i) + "," + newStr;
            } else {
                newStr = str.charAt(i) + newStr;
            }
            count++;
        }
        str = newStr ; //自动补小数点后两位
        return str;
    }
    // 当数字带有小数
    else {
        for (var i = str.indexOf(".") - 1; i >= 0; i--) {
            if (count % 3 == 0 && count != 0) {
                newStr = str.charAt(i) + "," + newStr;
            } else {
                newStr = str.charAt(i) + newStr; //逐个字符相接起来
            }
            count++;
        }
        str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
        return str;
    }
}

function browserVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //Edge浏览器
    var isFirefox = userAgent.indexOf("Firefox") > -1; //Firefox浏览器
    var isOpera = userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1; //Opera浏览器
    var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Edge") == -1 && userAgent.indexOf("OPR") == -1; //Chrome浏览器
    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1 && userAgent.indexOf("Edge") == -1 && userAgent.indexOf("OPR") == -1; //Safari浏览器
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 'IE:7';
        } else if (fIEVersion == 8) {
            return 'IE:8';
        } else if (fIEVersion == 9) {
            return 'IE:9';
        } else if (fIEVersion == 10) {
            return 'IE:10';
        } else {
            return 'IE:6'; //IE版本<7
        }
    } else if (isIE11) {
        return 'IE:11';
    } else if (isEdge) {
        return 'Edge:' + userAgent.split('Edge/')[1].split('.')[0];
    } else if (isFirefox) {
        return 'Firefox:' + userAgent.split('Firefox/')[1].split('.')[0];
    } else if (isOpera) {
        return 'Opera:' + userAgent.split('OPR/')[1].split('.')[0];
    } else if (isChrome) {
        return 'Chrome:' + userAgent.split('Chrome/')[1].split('.')[0];
    } else if (isSafari) {
        return 'Safari:'; + userAgent.split('Safari/')[1].split('.')[0];
    } else {
        return -1; //不是ie浏览器
    }
}


