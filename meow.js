/*
 *This is a simple lib to make your favicon more intersting.
 *Author: fuluchii.zhao
 *Inspiring by pomatodo.com,a beautiful website that combines GTD with Pomodoro.
*/
function getMeow(option) {
	//some variables should be used
	var MeowFavicon 	= {};
	var title 			= option.tiltle || document.title;
	var currentFavicon  = null;
	var oldFavicon 		= null;
	var canvas 			= null;
	var context 		= null;

	//and some CONSTANT VARIABLES
	var TITLE_PREFIX = ' Was Eaten BY Meow!';
	var CENTER_X = 8;
	var CENTER_Y = 8;
	var RADIS = 7;

	//and some private methods
	var getFavicon = function () {
		var links = document.getElementsByTagName('link');
		for (var i = 0;i<links.length; i++) {
			if (/ico/.test(links[i].getAttribute('type') || '')){
				return links[i];
			}
		};
		return false;
	}

	var deleteFavicon = function () {
		var favicon = getFavicon();
		var head 	= document.getElementsByTagName('head')[0];
		if(favicon && head){
			oldFavicon = favicon;
			head.removeChild(favicon);
		}
	}

	var setFavicon = function (imageUrl) {
		deleteFavicon();
		var newFavicon 	= document.createElement('link');
		newFavicon.type = 'image/x-icon';
	    newFavicon.rel 	= 'shortcut icon';
	    newFavicon.href = imageUrl;
	    document.getElementsByTagName('head')[0].appendChild(newFavicon);
	}

	var resetFavicon = function () {
		if(oldFavicon){
			var link = oldFavicon;
			setFavicon(link.getAttribute('href'));
		}
	}

	var readCanvas = function () {
		if(!canvas){
			canvas = document.createElement('canvas');
			canvas.width = 16;
			canvas.height = 16;
			context = canvas.getContext('2d');
		}
		return canvas;
	}

	var getCtx = function () {
		return readCanvas().getContext('2d');
	}

	var getFaviconSrc = function(tag) {
		return (tag.getAttribute("href")) || false;
	}

	var drawFavicon = function () {
		var context = readCanvas().getContext('2d');

	}

	//and some methods about draw image on canvas
	var drawSector = function(color,bar){
		var context = getCtx();
		context.beginPath();
		context.fillStyle = color;
		context.moveTo(CENTER_X,CENTER_Y);
		context.arc(CENTER_X,CENTER_Y,RADIS,-Math.PI/2,Math.PI*bar*2-Math.PI/2,false);
		context.lineTo(CENTER_X,CENTER_Y);
		context.fill();
		context.closePath();
	}

	var drawCountdown = function (timeperiod,color) {
		var fireInterval = timeperiod/60;
		var progress = 1;
		drawSectorInterval = setInterval(function drawTimebar(){
			var pro = progress/60;
			drawSector(color,pro);
			setFavicon(canvas.toDataURL());
			progress ++;
		},fireInterval);
		
		setTimeout(function(){
			clearInterval(drawSectorInterval);
			drawSector(color,1);
			setFavicon(canvas.toDataURL());
		},timeperiod);

	}



	//and return a meow object
	return {
		changeFavicon: function (url) {
			setFavicon(url);
		},
		changeFaviconForAWhile: function (delay , lasttime, url){
			setTimeout(function() {drawCountdown(6000,'#C00');}, delay);
				
		},
		changeTitle: function (newTitle) {
			// body...
		},
		meowFavicon: function () {
			
		}
	}
};