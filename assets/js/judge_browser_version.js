function judge_browser_version() {
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

        var limitObj = {
            'IE': 9,
            'Edge': 12,
            'Firefox': 52,
            'Opera': 42,
            'Chrome': 56,
            'Safari': 11
        }
        var browserVersionStr = judge_browser_version().split(':');
        var name = browserVersionStr[0];
        var version = browserVersionStr[1];
        var flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
        if (!flag) {
            if (!limitObj[name] || limitObj[name] && version < limitObj[name] && name === 'IE') {
                var str = "您的浏览器版本低，";
                var str2 = "请升级您的浏览器。";
                document.write("<pre style='-moz-osx-font-smoothing: grayscale;\n" +
                    "  -webkit-font-smoothing: antialiased;\n" +
                    "  text-rendering: optimizeLegibility;\n" +
                    "  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;" +
                    "margin: 0; background: #ed3313; text-align:center;color:#fff; height:100%;border:0;position:fixed;top:0;left:0;width:100%;z-index:1234; font-size: 32px; font-weight: 700'>" +
                    "<h2 style='padding-top:200px;margin:0;'><strong>" + str + "<br/></strong></h2><h2 style=''>" + str2 + "</h2></pre>");
                window.stop ? window.stop() : document.execCommand("Stop")
            }
        }
        (function(){
            var bp = document.createElement('script');
            var curProtocol = window.location.protocol.split(':')[0];
            if (curProtocol === 'https'){
                bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
            }
            else{
                bp.src = 'http://push.zhanzhang.baidu.com/push.js';
            }
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(bp, s);
        })();