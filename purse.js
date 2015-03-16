var purseCanvas = document.getElementById('purseCanvas');
var container = document.getElementsByClassName('img-container');

var ctx = purseCanvas.getContext('2d'),
	w = purseCanvas.width,
	h = purseCanvas.height;

console.log(w);

window.onresize = function() {
	console.log(container[0].offsetWidth);
	w = container[0].offsetWidth;
	h = container[0].offsetHeight;
	console.log(w);
}

function drawDots(ctx) {
	function drawDot(x,y,context) {
		var dot = new Image(),
			topX = x + 18,
			topY = y + 18,
			bottomX = x - 1,
			bottomY = y - 1;
		dot.src = 'dot.png';
		dot.onload = function() {
			context.save();
	    	context.beginPath();
	    	context.arc(topX,topY,10,0, Math.PI*2, true);
	    	context.closePath();
	    	context.clip();
			context.drawImage(dot, x, y, 40,40);
			context.beginPath();
	    	context.arc(bottomX, bottomY, 10, 0, Math.PI * 2, true);
	    	context.clip();
	  //   	context.shadowColor = '#000';
   //    		context.shadowBlur = 4;
	  //   	context.shadowOffsetX = 2;
   //    		context.shadowOffsetY = 2;
   //    		ctx.fillStyle = 'none';
			// ctx.fill();
	    	context.closePath();
	    	context.restore();
		}
	}
	drawDot(230,200, ctx);
	drawDot(185,310, ctx);
	drawDot(170,240, ctx);
}

drawDots(ctx);
