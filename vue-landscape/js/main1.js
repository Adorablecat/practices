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
        }, 152);
        document.getElementById('pageLoad').addEventListener('webkitAnimationEnd', function () {
            this.remove();

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
            window.location.href = 'http://liminglei.top';
        },
        goJump2 : function() {
            window.location.href = 'http://liminglei.top';
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