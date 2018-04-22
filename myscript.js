

let stickersMap = new Map();
stickersMap.set('551710711530727','images/mebun1.png');
stickersMap.set('551710701530728','images/mebun2.png');
stickersMap.set('551710694864062','images/mebun3.png');
stickersMap.set('551710684864063','images/logo.png');
stickersMap.set('551710668197398','images/apple1.png');

let popupStickersMap = new Map();
popupStickersMap.set('551710714864060','images/mebun1.png');
popupStickersMap.set('551710704864061','images/mebun2.png');
popupStickersMap.set('551710698197395','images/mebun3.png');
popupStickersMap.set('551710688197396','images/logo.png');
popupStickersMap.set('551710671530731','images/apple1.png');

let messageStickerMap = new Map();
messageStickerMap.set('551710711530727','images/mebun1.png');
messageStickerMap.set('551710701530728','images/mebun2.png');
messageStickerMap.set('551710694864062','images/mebun3.png');
messageStickerMap.set('551710684864063','images/logo.png');
messageStickerMap.set('551710668197398','images/apple1.png');

let generateAttribute = function(s) {
	let k = chrome.extension.getURL(s);
	return "background-image: url(" + k + "); background-repeat: no-repeat; background-size: 120px 120px; cursor: pointer; height: 120px; width: 120px;)";
};

let generatePopupAttribute = function(s) {
	let k = chrome.extension.getURL(s);
	return "background-image: url(" + k + "); background-repeat: no-repeat; background-size: 64px 64px; cursor: pointer; height: 64px; width: 64px;)";
}

let replaceStickers = function() {
	var list = document.getElementsByClassName("_2poz _ui9");

	for (i = 0; i < list.length; i++) {
		for (let key of stickersMap.keys()) {
			if (list[i].style["background-image"].includes(key)) {
				list[i].setAttribute("style", generateAttribute(stickersMap.get(key)));
			}
		}
	}
};

let replacePopupStickers = function() {
	var list = document.getElementsByClassName("_5r8h");

	for (i = 0; i < list.length; i++) {
		for (let key of popupStickersMap.keys()) {
			if (list[i].children[0].style["background-image"].includes(key)) {
				list[i].children[0].setAttribute("style", generatePopupAttribute(popupStickersMap.get(key)));
			}
		}
	}
}

let replaceMessageStickers = function() {
	var list = document.getElementsByClassName("_3e7u _3al _n4o _1a6y");

	for (i = 0; i < list.length; i++) {
		for (let key of messageStickerMap.keys()) {
			if (list[i].children[0].children[0].style["background-image"].includes(key)) {
				list[i].children[0].children[0].setAttribute("style", generateAttribute(messageStickerMap.get(key)));
			}
		}
	}
}

let replaceAll = function() {
	replaceStickers();
	replacePopupStickers();
	replaceMessageStickers();
	setTimeout(replaceStickers,250);
	setTimeout(replacePopupStickers,250);
	setTimeout(replaceMessageStickers,250);
}


window.onload = replaceStickers;
document.addEventListener('mousedown', replaceAll);
