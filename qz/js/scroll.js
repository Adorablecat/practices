/*************************************************************
		功能：兼容多浏览器的事件绑定方式
		参数：obj      事件源
			  type     事件类型：需要是字符串，前面不带on
			  handler  事件处理函数
*************************************************************/
function addEvent(obj, type, handler){
	if(obj.addEventListener){   //标准浏览器
		obj.addEventListener(type, handler);
	}else if(obj.attachEvent){    //IE低版本浏览器
		obj.attachEvent('on'+type, handler);
	}else{    //以上皆不是
		obj['on'+type] = handler;
	}
}

/******************************************************************
			功能：兼容多浏览器的事件解绑方式
			参数：obj      事件源
			  	  type     事件类型：需要是字符串，前面不带on
			      handler  事件处理函数
			 PS:解绑时的事件源、事件类型和事件处理函数需要和绑定时相同
******************************************************************/
function removeEvent(obj, type, handler){
	if(obj.removeEventListener){   //标准浏览器
		obj.removeEventListener(type, handler);
	}else if(obj.detachEvent){     //IE低版本浏览器
		obj.detachEvent('on'+type, handler);
	}else{    //以上浏览器皆不是
		obj['on'+type]=null;
	}
}

/*
功能：获取el元素的计算后的样式,兼容所有浏览器
参数：el，表示要获取样式的元素
 */
function getStyle(el){
	var elStyle;   //兼容所有浏览器的计算后的样式
	if(window.getComputedStyle){   //标准浏览器
		elStyle = window.getComputedStyle(el);
	}else{   //IE低版本浏览器
		elStyle = el.currentStyle;
	}

	return elStyle;
}