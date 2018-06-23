window.common={};
window.app={};
function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
    __.prototype = b.prototype;
    d.prototype = new __();
};
window.generateEUI = {};
generateEUI.paths = {};
generateEUI.skins = undefined
generateEUI.paths['resource/skins/common/ShareSkin.exml'] = window.common.ShareSkin = (function (_super) {
	__extends(ShareSkin, _super);
	function ShareSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Rect1_i(),this._Image1_i()];
	}
	var _proto = ShareSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.75;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 367;
		t.right = 40;
		t.source = "share_tips_png";
		t.top = 50;
		t.width = 228;
		return t;
	};
	return ShareSkin;
})(eui.Skin);generateEUI.paths['resource/skins/app/HomeSkin.exml'] = window.app.HomeSkin = (function (_super) {
	__extends(HomeSkin, _super);
	var HomeSkin$Skin1 = 	(function (_super) {
		__extends(HomeSkin$Skin1, _super);
		function HomeSkin$Skin1() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._DragonBones1_i(),this._DragonBones2_i()];
			this.states = [
				new eui.State ("on",
					[
						new eui.SetProperty("_DragonBones1","visible",true)
					])
				,
				new eui.State ("off",
					[
						new eui.SetProperty("_DragonBones2","visible",true)
					])
			];
		}
		var _proto = HomeSkin$Skin1.prototype;

		_proto._DragonBones1_i = function () {
			var t = new common.DragonBones();
			this._DragonBones1 = t;
			t.animationName = "play";
			t.armatureName = "music";
			t.name = "main";
			t.visible = false;
			return t;
		};
		_proto._DragonBones2_i = function () {
			var t = new common.DragonBones();
			this._DragonBones2 = t;
			t.animationName = "stop";
			t.armatureName = "music";
			t.name = "main";
			t.visible = false;
			return t;
		};
		return HomeSkin$Skin1;
	})(eui.Skin);

	function HomeSkin() {
		_super.call(this);
		this.skinParts = ["mainDB","scrollBar","scroller","replayBtn","linkBtn","shareBtn","end","audioBgm","audio1","audio2","audio3","audio4","audio5","audio6","audio7","audio8","audio9","audio10","audio11","audio12","audio13","audio14","audio15","audio16","audio17","audio18","commonShare"];
		
		this.elementsContent = [this._Rect1_i(),this.mainDB_i(),this.scroller_i(),this.end_i(),this.audioBgm_i(),this.audio1_i(),this.audio2_i(),this.audio3_i(),this.audio4_i(),this.audio5_i(),this.audio6_i(),this.audio7_i(),this.audio8_i(),this.audio9_i(),this.audio10_i(),this.audio11_i(),this.audio12_i(),this.audio13_i(),this.audio14_i(),this.audio15_i(),this.audio16_i(),this.audio17_i(),this.audio18_i(),this.commonShare_i()];
	}
	var _proto = HomeSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.mainDB_i = function () {
		var t = new common.DragonBones();
		this.mainDB = t;
		t.animationName = "newAnimation";
		t.armatureName = "Armature";
		t.autoPlay = false;
		t.height = 1206;
		t.horizontalCenter = 0;
		t.name = "main";
		t.texCount = 103;
		t.verticalCenter = 0;
		t.width = 750;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.bounces = false;
		t.percentHeight = 100;
		t.width = 750;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.scrollBar_i()];
		return t;
	};
	_proto.scrollBar_i = function () {
		var t = new eui.Group();
		this.scrollBar = t;
		t.width = 750;
		return t;
	};
	_proto.end_i = function () {
		var t = new eui.Group();
		this.end = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.replayBtn_i(),this.linkBtn_i(),this.shareBtn_i()];
		return t;
	};
	_proto.replayBtn_i = function () {
		var t = new eui.Rect();
		this.replayBtn = t;
		t.fillAlpha = 0.01;
		t.fillColor = 0xFFFFFF;
		t.height = 80;
		t.horizontalCenter = -224;
		t.verticalCenter = 480;
		t.width = 210;
		return t;
	};
	_proto.linkBtn_i = function () {
		var t = new eui.Rect();
		this.linkBtn = t;
		t.fillAlpha = 0.01;
		t.fillColor = 0xFFFFFF;
		t.height = 80;
		t.horizontalCenter = 0;
		t.verticalCenter = 480;
		t.width = 210;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new eui.Rect();
		this.shareBtn = t;
		t.fillAlpha = 0.01;
		t.fillColor = 0xFFFFFF;
		t.height = 80;
		t.horizontalCenter = 224;
		t.verticalCenter = 480;
		t.width = 210;
		return t;
	};
	_proto.audioBgm_i = function () {
		var t = new common.Audio();
		this.audioBgm = t;
		t.autoplay = true;
		t.control = true;
		t.right = 80;
		t.src = "audio-bgm_mp3";
		t.top = 80;
		t.skinName = HomeSkin$Skin1;
		return t;
	};
	_proto.audio1_i = function () {
		var t = new common.Audio();
		this.audio1 = t;
		t.src = "audio-1_mp3";
		return t;
	};
	_proto.audio2_i = function () {
		var t = new common.Audio();
		this.audio2 = t;
		t.src = "audio-2_mp3";
		return t;
	};
	_proto.audio3_i = function () {
		var t = new common.Audio();
		this.audio3 = t;
		t.src = "audio-3_mp3";
		return t;
	};
	_proto.audio4_i = function () {
		var t = new common.Audio();
		this.audio4 = t;
		t.src = "audio-4_mp3";
		return t;
	};
	_proto.audio5_i = function () {
		var t = new common.Audio();
		this.audio5 = t;
		t.src = "audio-5_mp3";
		return t;
	};
	_proto.audio6_i = function () {
		var t = new common.Audio();
		this.audio6 = t;
		t.src = "audio-6_mp3";
		return t;
	};
	_proto.audio7_i = function () {
		var t = new common.Audio();
		this.audio7 = t;
		t.src = "audio-7_mp3";
		return t;
	};
	_proto.audio8_i = function () {
		var t = new common.Audio();
		this.audio8 = t;
		t.src = "audio-8_mp3";
		return t;
	};
	_proto.audio9_i = function () {
		var t = new common.Audio();
		this.audio9 = t;
		t.src = "audio-9_mp3";
		return t;
	};
	_proto.audio10_i = function () {
		var t = new common.Audio();
		this.audio10 = t;
		t.src = "audio-10_mp3";
		return t;
	};
	_proto.audio11_i = function () {
		var t = new common.Audio();
		this.audio11 = t;
		t.src = "audio-11_mp3";
		return t;
	};
	_proto.audio12_i = function () {
		var t = new common.Audio();
		this.audio12 = t;
		t.src = "audio-12_mp3";
		return t;
	};
	_proto.audio13_i = function () {
		var t = new common.Audio();
		this.audio13 = t;
		t.src = "audio-13_mp3";
		return t;
	};
	_proto.audio14_i = function () {
		var t = new common.Audio();
		this.audio14 = t;
		t.src = "audio-14_mp3";
		return t;
	};
	_proto.audio15_i = function () {
		var t = new common.Audio();
		this.audio15 = t;
		t.src = "audio-15_mp3";
		return t;
	};
	_proto.audio16_i = function () {
		var t = new common.Audio();
		this.audio16 = t;
		t.src = "audio-16_mp3";
		return t;
	};
	_proto.audio17_i = function () {
		var t = new common.Audio();
		this.audio17 = t;
		t.src = "audio-17_mp3";
		return t;
	};
	_proto.audio18_i = function () {
		var t = new common.Audio();
		this.audio18 = t;
		t.src = "audio-18_mp3";
		return t;
	};
	_proto.commonShare_i = function () {
		var t = new common.Share();
		this.commonShare = t;
		return t;
	};
	return HomeSkin;
})(eui.Skin);generateEUI.paths['resource/skins/app/LoadingSkin.exml'] = window.app.LoadingSkin = (function (_super) {
	__extends(LoadingSkin, _super);
	var LoadingSkin$Skin2 = 	(function (_super) {
		__extends(LoadingSkin$Skin2, _super);
		function LoadingSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["progress"];
			
			this.elementsContent = [this.progress_i()];
		}
		var _proto = LoadingSkin$Skin2.prototype;

		_proto.progress_i = function () {
			var t = new eui.Label();
			this.progress = t;
			t.bold = true;
			t.fontFamily = "Microsoft Yahei";
			t.size = 48;
			t.textColor = 0x595948;
			return t;
		};
		return LoadingSkin$Skin2;
	})(eui.Skin);

	function LoadingSkin() {
		_super.call(this);
		this.skinParts = ["other","preload"];
		
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this.other_i(),this.preload_i()];
	}
	var _proto = LoadingSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 445;
		t.horizontalCenter = 0.5;
		t.source = "loading_png";
		t.top = 204;
		t.width = 265;
		return t;
	};
	_proto.other_i = function () {
		var t = new common.Preload();
		this.other = t;
		t.priority = 1;
		t.x = -1;
		t.y = -4;
		return t;
	};
	_proto.preload_i = function () {
		var t = new common.Preload();
		this.preload = t;
		t.horizontalCenter = 13.5;
		t.top = 472;
		t.skinName = LoadingSkin$Skin2;
		return t;
	};
	return LoadingSkin;
})(eui.Skin);