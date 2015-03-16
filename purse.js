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

	function drawData(str, x, y, context) {
		ctx.font="12px Tahoma";
		ctx.fillText(str, x, y);
	}

	function drawBoldData (str, x, y, context) {
		ctx.font="bold 12px Tahoma";
		ctx.fillText(str, x,y);
		
	}

	function drawLine(context, x, y) {
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(400, y);
		context.stroke();
	}

	drawDot(485,200, ctx);
	drawDot(440,310, ctx);
	drawDot(425,240, ctx);

	drawData('WEIGHT', 10, 20, ctx);
	drawBoldData('0.98 Pounds (445 G)', 75, 20);
	
	drawData('LEATHER', 40, 225, ctx);
	drawBoldData('GOLD DYED PYTHON', 100, 225);
	drawLine(ctx, 260, 215);

	drawData('BUCKLE', 25, 265, ctx);
	drawBoldData('RHODIUM-PLATED BRASS', 75, 265);
	drawLine(ctx, 260, 260);

	drawBoldData('HEAVY GUAGE NYLON STITCH', 55, 335);
	drawLine(ctx, 260, 325);

	drawData('INSIDE', 155, 400, ctx);
	drawBoldData('SUEDE LINING', 200, 400);
}

drawCanvas(ctx);
