"use strict";

class Experiment004 extends Experiment{

    constructor(canvas) {
        super('2d', canvas);
        
        this.particles = [];
        this.moveSpeed = 0.1;
        this.moveRotation = -Math.PI;
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
            this.moveRotation += 0.1;
        }

        if (this.keys[39]) {
            this.moveRotation -= 0.1;
        }

        if(this.keys[38]) {
            this.moveSpeed += 0.1;
        }

        if (this.keys[40]) {
            this.moveSpeed -= 0.1;
        }

        this.position.x += Math.sin(this.moveRotation) * this.moveSpeed;
        this.position.y += Math.cos(this.moveRotation) * this.moveSpeed;
        
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

            this.particles[i].x += Math.sin(this.moveRotation - Math.PI) * this.particles[i].speed;
            this.particles[i].y += Math.cos(this.moveRotation - Math.PI) * this.particles[i].speed;
            this.particles[i].size *= 1.0001;
        }
    }
}

var experiment = new Experiment004(fv.canvas);
