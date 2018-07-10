!function(){
	var ua = parseUA();

	function parseUA() {
	    var u = navigator.userAgent;
	    var u2 = navigator.userAgent.toLowerCase();
	    return { //移动终端浏览器版本信息
	        trident: u.indexOf('Trident') > -1, //IE内核
	        presto: u.indexOf('Presto') > -1, //opera内核
	        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
	        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
	        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
	        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
	        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
	        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
	        iPad: u.indexOf('iPad') > -1, //是否iPad
	        webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
	        iosv: u.substr(u.indexOf('iPhone OS') + 9, 3),
	        weixin: u2.match(/MicroMessenger/i) == "micromessenger",
	        taobao: u.indexOf('AliApp(TB') > -1,
	    };
	}
}();
var app = new Vue({
    el : '#app',
    data : {
        loadNum : 0,
        w : 320,
        h : 640,
        showVideo : false,
        showJump : false,
        showPlay : false,
        showShare : false
    },
    created : function() {
        this.w = window.innerWidth;
        this.h = window.innerHeight;
        resize(this.w, this.h);
    },
    mounted : function () {
        var loadStep = 1,num = 0;
        var load = setInterval(function () {
        	ttvAnimateStart();
            num += loadStep;
            loadStep+=1;
            if (num >= 100) {
                num = 100;
                app.$data.loadNum = num;
                app.$data.showPlay = true;
                clearInterval(load);
            } else {
                app.$data.loadNum = num;
            }
        }, 121);
        document.getElementById('pageLoad').addEventListener('webkitAnimationEnd', function () {
            this.remove();
			ttvAnimateStop();
        });
    },
    methods : {
        goVideo : function() {
        	
            this.showVideo = true;
            var that = this;
            var dom = document.getElementById('video_1');
            dom.addEventListener('ended', function () {
                app.$data.showJump = true;
              
                app.$data.showVideo = false;
            });
            dom.play();
            setTimeout(function () {
                $('#showPlay').hide();
            }, 500)
            
        },
        goJump1 : function() {
            window.location.href = 'http://1118.mayinongchang.net/2017_12_08/index.html';
        },
        goJump2 : function() {
            window.location.href = 'http://1118.mayinongchang.net/2017_12_08/index.html';
        },
        jumpVideo : function() {
            console.log('jumpVideo');
            var dom = document.getElementById('video_1');
            dom.pause();
            this.showJump = true;
            app.$data.showVideo = false;
        }
    }
});
function resize(w, h) {
    var vw = w,vh = h;
    if (w < h) {
        vh = w;
        vw = h;

        $('body').css('-webkit-transform', 'translate(' + vh + 'px,0px) rotateZ(90deg)');
    } else {
        $('body').css('-webkit-transform', '');
    }
    $('body').width(vw).height(vh);
    $('.page,#video_1').width(vw).height(vh);
}
window.addEventListener('resize', function() {
    setTimeout(function () {
        app.$data.w = $(window).width();
        app.$data.h = $(window).height();
        resize(app.$data.w, app.$data.h);
    }, 20);
});
//ttv
window.ttvNum = 1;
window.ttvMax = 4;
window.si_ttv ;
window.ttvAnimateStart = function(){

	ttvNum++;
	if(ttvNum>=ttvMax){
		ttvNum = 1;
	}
	$(".ttv").attr("src","./images/ttv"+ttvNum+".png");
}
si_ttv = setInterval(ttvAnimateStart,80);
console.info(si_ttv);
window.ttvAnimateStop = function(){
		clearInterval(si_ttv);
		console.info(si_ttv);
}