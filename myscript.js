
document.addEventListener('mousedown', function(){
	var list = document.getElementsByClassName("_2poz _ui9");
	console.log("changeImage()");

	for (i = 0; i < list.length; i++) {
		if (list[i].style["background-image"] == "background-image: url(&quot;/stickers/asset/?sticker_id=551710701530728&amp;image_type=BestEffortImage&quot;); background-repeat: no-repeat; background-size: 120px 120px; cursor: pointer; height: 120px; width: 120px;") {
			list[i].setAttribute("style", "background-image: url(\"https://i.imgur.com/7Ix7cfw.png\"); background-repeat: no-repeat; background-size: 120px 120px; cursor: pointer; height: 120px; width: 120px;)");
		}
	}
}, false);

//https://i.imgur.com/3JMolm4.png
//https://i.imgur.com/v2OkVQd.png
//https://i.imgur.com/7Ix7cfw.png

<div aria-label="  sticker" class="_2poz _ui9" data-testid="sticker" role="img" tabindex="0" style="background-image: url(&quot;/stickers/asset/?sticker_id=551710711530727&amp;image_type=BestEffortImage&quot;); background-repeat: no-repeat; background-size: 120px 120px; cursor: pointer; height: 120px; width: 120px;"></div>
<div aria-label="  sticker" class="_2poz _ui9" data-testid="sticker" role="img" tabindex="0" style="background-image: url(&quot;/stickers/asset/?sticker_id=551710701530728&amp;image_type=BestEffortImage&quot;); background-repeat: no-repeat; background-size: 120px 120px; cursor: pointer; height: 120px; width: 120px;"></div>
<div aria-label="  sticker" class="_2poz _ui9" data-testid="sticker" role="img" tabindex="0" style="background-image: url(&quot;/stickers/asset/?sticker_id=551710694864062&amp;image_type=BestEffortImage&quot;); background-repeat: no-repeat; background-size: 120px 120px; cursor: pointer; height: 120px; width: 120px;"></div>
