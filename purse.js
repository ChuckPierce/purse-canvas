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

	function drawLine(context, x, y, l) {
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(l, y);
		context.stroke();
	}

	function drawVertical(context, x, y, l) {
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x, l);
		context.stroke();
	}

	drawDot(485,200, ctx);
	drawDot(440,310, ctx);
	drawDot(425,240, ctx);

	drawData('WEIGHT', 10, 20, ctx);
	drawBoldData('0.98 Pounds (445 G)', 75, 20);
	
	drawData('LEATHER', 40, 225, ctx);
	drawBoldData('GOLD DYED PYTHON', 100, 225);
	drawLine(ctx, 260, 215, 400);

	drawData('BUCKLE', 25, 265, ctx);
	drawBoldData('RHODIUM-PLATED BRASS', 75, 265);
	drawLine(ctx, 260, 260, 400);

	drawBoldData('HEAVY GUAGE NYLON STITCH', 55, 335);
	drawLine(ctx, 260, 325, 400);

	drawData('INSIDE', 155, 400, ctx);
	drawBoldData('SUEDE LINING', 200, 400);

	drawBoldData('7 3/4 INCHES', 560, 80);
	drawBoldData('(197 MM)', 570, 95);
	drawLine(ctx, 455, 120, 750);
	drawVertical(ctx, 455, 90, 160);
	drawVertical(ctx, 750, 90, 160);

	drawBoldData('7 1/2 INCHES', 800, 300);
	drawBoldData('(192 MM)', 810, 315);
	drawLine(ctx, 880, 180, 800);
	drawLine(ctx, 880, 420, 800);
	drawVertical(ctx, 838, 180, 250);
	drawVertical(ctx, 838, 350, 420);

	drawBoldData('1 3/4 INCHES', 950, 80);
	drawBoldData('(26 MM)', 965, 95);
	drawLine(ctx, 1025, 140, 960);
	drawVertical(ctx, 1025, 120, 160)
	drawVertical(ctx, 960, 120, 160)

}

drawCanvas(ctx);
