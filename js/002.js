var c = canvas.getContext('2d');

// store all particles
var particles = [];

// store mouse coordinates in a variable, but init in the middle of the window
mouse = {
	x: canvas.width / 2,
	y: canvas.width / 2
}

document.onmousemove = function(e) {
	mouse.x = e.clientX,
	mouse.y = e.clientY
}

function showFrame() {
	remaining_particles = [];

	// create a new particle
	var p = {
		x: mouse.x,
		y: mouse.y,
		speed: 1,
		rotation: Math.random() * Math.PI * 2,
		size: 10,
		color: randomColor()
	}

	particles.push(p);

	// loop the existing particles and render them on the new location
	for(var i = 0; i < particles.length; i++) {					
		c.fillRect(particles[i].x, particles[i].y, particles[i].size, particles[i].size);
		c.fillStyle = particles[i].color;

		particles[i].x += Math.sin(particles[i].rotation) * particles[i].speed;
		particles[i].y += Math.cos(particles[i].rotation) * particles[i].speed;	
		particles[i].size *= 1.0001;

		if (inCanvas(particles[i])) {
			remaining_particles.push(particles[i]);
		}
	}

	particles = remaining_particles
}

setInterval(showFrame, 1000/100);