$(function() {
	var myAudio = document.getElementById('bgMusic');
	var percent = document.querySelector(".percent");
	
	var loadStep = 1,num = 0;
	
	setInterval(function(){
        //为了保证体验，在用户触摸在屏幕上的时候，关掉此定时器，安卓手机 触摸事件时候模拟一下 触顶回弹 , 定时器 可以用 window.requestAnimationFrame 来更好的体验
        //iphone 时候用的
        if( $("body").scrollTop() < 1){
            $("body").scrollTop( 1 );
        }
       
    },1);
	var load = setInterval(function () {
    	
        num += loadStep;
        loadStep+=1;
        if (num >= 100) {
            num = 100;
            percent.innerHTML = num+'%'; 
            clearInterval(load);
            $(".load_btn").show();
        } else {
            percent.innerHTML = num+'%'; 
        }
    }, 621);
	myAudio.play();
	myAudio.pause();
	
	$(".load_btn").on("touchend", function() {
		$(".load").fadeOut(1200);
		$(".page1").fadeIn(1200);
		myAudio.play();
	});
	$("#bgMusic").on("ended", function() {
		console.info("156");
		$(".page1").fadeOut(1200);

		$(".zz").fadeIn(1200);
		$(".page2").fadeIn(1200);
		$("#p2").scrollLeft(1520);
	})
	$(".news_jump").on("touchend", function() {
		myAudio.pause();
		$(".page1").fadeOut(1200);

		$(".zz").fadeIn(1200);
		$(".page2").fadeIn(1200);
		$("#p2").scrollLeft(1520);
		//				console.info($("#p2").scrollLeft());
	})
	$(".zz").on("touchend", function() {
		$(".zz").fadeOut(1000);
		$(".ask").show();

	})

	$(".qk1").on("touchend", function() {
		$(".aw").fadeIn(1200);
		$("#video1").show();
		$("#video1")[0].play();
	})
	$(".qk2").on("touchend", function() {
		$(".aw").fadeIn(1200);
		$("#video2").show();
		$("#video2")[0].play();
	})
	$("video").on("ended", function() {
		$(".aw").hide();
		$("video").hide();
	});
	$(".qk3").on("touchend", function() {
		$(".aw").fadeIn(1200);
		$("#video3").show();
		$("#video3")[0].play();
	})
	$(".qk4").on("touchend", function() {
		$(".aw").fadeIn(1200);
		$("#video4").show();
		$("#video4")[0].play();
	})
	$(".qk5").on("touchend", function() {
		$(".aw").fadeIn(1200);
		$("#video5").show();
		$("#video5")[0].play();
	})
	$(".qk6").on("touchend", function() {
		$(".aw").fadeIn(1200);
		$("#video6").show();
		$("#video6")[0].play();
	})
	$(".qk7").on("touchend", function() {
		$(".aw").fadeIn(1200);
		$("#video7").show();
		$("#video7")[0].play();
	})
	$(".qk8").on("touchend", function() {
		$(".aw").fadeIn(1200);
		$("#video8").show();
		$("#video8")[0].play();
	})

})