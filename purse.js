var purseCanvas = document.getElementById('purseCanvas');
var container = document.getElementsByClassName('container');

var ctx = purseCanvas.getContext('2d'),
	w = purseCanvas.width = container[0].offsetWidth,
	h = purseCanvas.height = container[0].offsetHeight;
console.log(container[0].offsetWidth);
window.onresize = function() {
	w = container[0].offsetWidth;
	h = container[0].offsetHeight;
}

function drawCanvas(ctx) {
	
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
	    	context.shadowColor = '#000';
      		context.shadowBlur = 7;
	    	context.shadowOffsetX = 2;
      		context.shadowOffsetY = 2;
      		ctx.fillStyle = 'none';
			ctx.fill();
	    	context.closePath();
	    	context.clip();
			context.drawImage(dot, x, y, 40,40);
			context.beginPath();
	    	context.arc(bottomX, bottomY, 10, 0, Math.PI * 2, true);
	    	context.clip();
	    	context.closePath();
	    	context.restore();
		}
	}

	function drawData(context) {

	}

	drawDot(485,200, ctx);
	drawDot(440,310, ctx);
	drawDot(425,240, ctx);
	ctx.fillText('Weight 0.98 Pounds (445 G)', 20, 20);
}

drawCanvas(ctx);
