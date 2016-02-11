"use strict";

class Experiment004 extends Experiment{

    constructor(canvas) {
        super('2d', canvas);
        
        this.particles = [];
    }

    start() {
        document.onkeydown = this.onkeydown.bind(this);
        document.onkeyup = this.onkeyup.bind(this);
        this.interval = setInterval(this.showFrame.bind(this), 30);
        this.rotation = 0;
    }

    showFrame() {
        var remaining_particles = [];

        if(this.keys[37]) {
            this.position.x -= 5;
        }

        if (this.keys[39]) {
            this.position.x += 5;
        }

        if(this.keys[38]) {
            this.position.y -= 5;
        }

        if (this.keys[40]) {
            this.position.y += 5;
        }

        // create a new particle
        var p = {
            x: this.position.x,
            y: this.position.y,
            speed: 2,
            rotation: this.rotation,
            size: 5,
            color: fv.randomColor()
        }

        this.particles.push(p);

        this.wipe();

        this.rotation += 3;

        for(var i = 0; i < this.particles.length; i++) {
            this.c.fillRect(this.particles[i].x, this.particles[i].y, this.particles[i].size, this.particles[i].size);
            this.c.fillStyle = this.particles[i].color;

            this.particles[i].x += Math.sin(this.particles[i].rotation) * this.particles[i].speed;
            this.particles[i].y += Math.cos(this.particles[i].rotation) * this.particles[i].speed;
            this.particles[i].size *= 1.0001;

            if (fv.inCanvas(this.particles[i])) {
                remaining_particles.push(this.particles[i]);
            }
        }

        this.particles = remaining_particles
    }
}

var experiment = new Experiment004(fv.canvas);
