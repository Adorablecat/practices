$(function() {
	var dynamicLoading = {
		css: function(path) {
			if(!path || path.length === 0) {
				throw new Error('argument "path" is required !');
			}
			var head = document.getElementsByTagName('head')[0];
			var link = document.createElement('link');
			link.href = path;
			link.rel = 'stylesheet';
			link.type = 'text/css';
			head.appendChild(link);
		},
		js: function(path) {
			if(!path || path.length === 0) {
				throw new Error('argument "path" is required !');
			}
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.src = path;
			script.type = 'text/javascript';
			head.appendChild(script);
		}
		
	}
	//使用方法:
	//dynamicLoading.css("./css/page1.css");
	//dynamicLoading.js("./js/test.js");
	console.info("dyanmicLoading");
});