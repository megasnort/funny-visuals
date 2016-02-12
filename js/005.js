"use strict";

// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

var toggle = false;

class Experiment005 extends Experiment{

    constructor(canvas) {
        super('2d', canvas);
    }

    start() {
        this.animate();
    }

    animate() {
        requestAnimFrame(experiment.animate);
        experiment.showFrame();
        console.log('animate');
    }

    showFrame() {
        var time = new Date().getTime() * 0.002;
        var x = Math.sin( time ) * 192 + (this.canvas.width / 2);
        var y = Math.cos( time * 0.9 ) * 192 + (this.canvas.height / 2);
        toggle = !toggle;

        this.c.fillStyle = toggle ? 'rgb(200,200,20)' :  'rgb(20,20,200)';
        this.c.beginPath();
        this.c.arc( x, y, 10, 0, Math.PI * 2, true );
        this.c.closePath();
        this.c.fill();

    }
}

var experiment = new Experiment005(fv.canvas);

