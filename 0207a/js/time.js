function displayDate() {
	var date = new Date();
	var year = date.getFullYear();
	var mouths = date.getMonth() + 1;
	var day = date.getDate();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var weekDay = new Array(7);
	weekDay[0] = "星期日";
	weekDay[1] = "星期一";
	weekDay[2] = "星期二";
	weekDay[3] = "星期三";
	weekDay[4] = "星期四";
	weekDay[5] = "星期五";
	weekDay[6] = "星期六";

	function fnW(str) {
		var num;
		str >= 10 ? num = str : num = "0" + str;
		return num;
	}
	document.getElementById("time").innerHTML = fnW(hours) + ":" + fnW(minutes);
	document.getElementById("date").innerHTML = weekDay[date.getDay()];
	document.getElementById("data").innerHTML = mouths + "月" + day + "日";
	var timeID = setTimeout(displayDate, 1000);
}