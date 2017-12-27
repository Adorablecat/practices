! function() {
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

	console.info("common.js");
	//---first_btn-----
	$('.pg1_bt').on("touchend", function() {
		$(".first").fadeOut(1000, function() {
			$(".first").hide();
		});
	})
	//--book---
	var i;
	window.ttvNum = 5;
	$("li").on("click", function c() {
		if(window.ttvNum > 0) {
			i = window.ttvNum;

			$("li")[i].style.transform = 'rotateY(-180deg)';
			$("li")[i].style.transition = '3s';
			i--;
			window.ttvNum = i;
			console.info(window.ttvNum);
		}
	})
	$('.book_r').on("click", function() {

		console.info(window.ttvNum);
		if(window.ttvNum > 0) {
			$("li")[window.ttvNum].style.transform = 'rotateY(-180deg)';
			$("li")[window.ttvNum].style.transition = '3s';

			window.ttvNum--;
		}
	})
	$('.book_l').on("click", function() {
		
		console.info(window.ttvNum);
		if(window.ttvNum < 5) {
			window.ttvNum++;
			$("li")[window.ttvNum].style.transform = 'rotateY(0deg)';
			$("li")[window.ttvNum].style.transition = '3s';
		}
	})

	//-------
	$('.btn_c').on("touchend", function() {
		$(".share").show();
	})
	$(".share").on("touchend", function() {
		$(this).hide();
	})

}();