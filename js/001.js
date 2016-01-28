"use strict";

class Experiment001 extends Experiment{

    constructor(canvas) {
        super('2d', canvas);
        
        this.particles = [];
    }

    start() {
        this.canvas.onmousemove = this.onmousemove.bind(this);
        this.interval = setInterval(this.showFrame.bind(this), 1000/100);
    }

    showFrame() {
        var remaining_particles = [];

        // create a new particle
        var p = {
            x: this.mouse.x,
            y: this.mouse.y,
            speed: 1,
            rotation: Math.random() * Math.PI * 2,
            size: (20 * Math.random()) + 3,
            color: fv.randomColor()
        }

        this.particles.push(p);

        this.wipe();

        // loop the existing particles and render them on the new location
        for(var i = 0; i < this.particles.length; i++) {                 
            this.c.fillRect(
                this.particles[i].x,
                this.particles[i].y,
                this.particles[i].size,
                this.particles[i].size
            );

            this.c.fillStyle = this.particles[i].color;

            this.particles[i].x += Math.sin(this.particles[i].rotation) * this.particles[i].speed;
            this.particles[i].y += Math.cos(this.particles[i].rotation) * this.particles[i].speed; 
            this.particles[i].size *= 0.99;

            if (fv.inCanvas(this.particles[i])) {
                remaining_particles.push(this.particles[i]);
            }
        }

        this.particles = remaining_particles;
    }
}

var experiment = new Experiment001(fv.canvas);
