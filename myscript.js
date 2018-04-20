

let stickersMap = new Map();
stickersMap.set('551710711530727','images/mebun1.png');
stickersMap.set('551710701530728','images/mebun2.png');
stickersMap.set('551710694864062','images/mebun3.png');
stickersMap.set('551710684864063','images/logo.png');

let generateAttribute = function(s) {
	let k = chrome.extension.getURL(s)
	return "background-image: url(" + k + "); background-repeat: no-repeat; background-size: 120px 120px; cursor: pointer; height: 120px; width: 120px;)";
};

let replaceStickers = function() {
	var list = document.getElementsByClassName("_2poz _ui9");

	//can add more stickers in the same format
	for (i = 0; i < list.length; i++) {
		for (let key of stickersMap.keys()) {
			if (list[i].style["background-image"].includes(key)) {
				list[i].setAttribute("style", generateAttribute(stickersMap.get(key)));
			}
		}
	}
};

window.onload = replaceStickers;
document.addEventListener('mousedown', replaceStickers);
