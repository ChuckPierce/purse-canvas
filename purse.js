var purseCanvas = document.getElementById('purseCanvas');
var container = document.getElementsByClassName('container');

var ctx = purseCanvas.getContext('2d'),
	w = purseCanvas.width = container[0].offsetWidth,
	h = purseCanvas.height = container[0].offsetHeight;
window.onresize = function() {
	w = container[0].offsetWidth;
	h = container[0].offsetHeight;
}

function drawCanvas(ctx) {
	function drawDot(x,y,context, width) {
		var xRatio = x/1280;
		var yRatio = y/1280;
		x = xRatio*width;
		y = yRatio*width;

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

	function drawData(str, x, y, context, width) {
		var xRatio = x/1280;
		var yRatio = y/1280;
		x = xRatio*width;
		y = yRatio*width;
		console.log(x);
		if(width < 800) {
			ctx.font="8px Tahoma";
		} else if(width < 500) {
			ctx.font="1px Tahoma";
		} else {
			ctx.font="12px Tahoma";
		}
		ctx.fillText(str, x, y);
	}

	function drawBoldData (str, x, y, context, width) {
		var xRatio = x/1280;
		var yRatio = y/1280;
		x = xRatio*width;
		y = yRatio*width;
		if(width < 800) {
			ctx.font="bold 8px Tahoma";
		} else if(width < 500) {
			ctx.font="bold 1px Tahoma";
		} else {
			ctx.font="bold 12px Tahoma";
		}
		ctx.fillText(str, x, y);
		
	}

	function drawLine(context, x, y, l, width) {
		var xRatio = x/1280;
		var yRatio = y/1280;
		var lRatio = l/1280;
		x = xRatio*width;
		y = yRatio*width;
		l = lRatio*width;
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(l, y);
		context.stroke();
	}

	function drawVertical(context, x, y, l, width) {
		var xRatio = x/1280;
		var yRatio = y/1280;
		var lRatio = l/1280;
		x = xRatio*width;
		y = yRatio*width;
		l = lRatio*width;
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x, l);
		context.stroke();
	}

	drawDot(485,200, ctx, w);
	drawDot(440,310, ctx, w);
	drawDot(425,240, ctx, w);

	drawData('WEIGHT', 10, 20, ctx, w);
	drawBoldData('0.98 Pounds (445 G)', 85, 20, ctx, w);
	
	drawData('LEATHER', 40, 225, ctx, w);
	drawBoldData('GOLD DYED PYTHON', 110, 225, ctx, w);
	drawLine(ctx, 300, 215, 420, w);

	drawData('BUCKLE', 25, 265, ctx, w);
	drawBoldData('RHODIUM-PLATED BRASS', 85, 265, ctx, w);
	drawLine(ctx, 300, 260, 420, w);

	drawBoldData('HEAVY GUAGE NYLON STITCH', 65, 335, ctx, w);
	drawLine(ctx, 300, 325, 420, w);

	drawData('INSIDE', 155, 400, ctx, w);
	drawBoldData('SUEDE LINING', 210, 400, ctx, w);

	drawBoldData('7 3/4 INCHES', 560, 80, ctx, w);
	drawBoldData('(197 MM)', 570, 95, ctx, w);
	drawLine(ctx, 455, 120, 750, w);
	drawVertical(ctx, 455, 90, 160, w);
	drawVertical(ctx, 750, 90, 160, w);

	drawBoldData('7 1/2 INCHES', 800, 300, ctx, w);
	drawBoldData('(192 MM)', 810, 315, ctx, w);
	drawLine(ctx, 880, 180, 800, w);
	drawLine(ctx, 880, 420, 800, w);
	drawVertical(ctx, 838, 180, 250, w);
	drawVertical(ctx, 838, 350, 420, w);

	drawBoldData('1 3/4 INCHES', 950, 80, ctx, w);
	drawBoldData('(26 MM)', 965, 95, ctx, w);
	drawLine(ctx, 1025, 140, 960, w);
	drawVertical(ctx, 1025, 120, 160, w)
	drawVertical(ctx, 960, 120, 160, w)

}

drawCanvas(ctx);
