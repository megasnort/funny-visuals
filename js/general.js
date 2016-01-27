
function randomColor()
{
	return '#' + (Math.random()*0xFFFFFF<<0).toString(16);
}

var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
