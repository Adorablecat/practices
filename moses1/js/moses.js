var video ;
var bgm;
//var btn = document.querySelector('.btn');
//var sF = document.querySelector('.sf');
$(function(){
	video = $("#video");
//	makeVideoPlayableInline(video[0]);
	
	bgm = $("#bgm");
	$('body').on("touchmove",function(e){
		e.preventDefault();
	})
	document.addEventListener("WeixinJSBridgeReady",function(){
		video[0].load();
		bgm[0].load();
	},false)
	video.on("ended",function(){
//		$("#video").css({display:'none'});
		$("#video").hide();
//		$('.container').css({display:'block'})
		$('.end').show()
	})
	$(".load").on('touchend',function(e){
		
		$('.load').hide();
		video[0].play();
	})
	
	$('.share').on('click',function(){
		$('.sf').addClass(" animated slideInUp");
		$('.sf').show();
		
	})
})
	
