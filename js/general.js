"use strict";

// requestAnim shim layer by Paul Irish
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame   ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
        };
})();

class Experiment {
    constructor(context, canvas) {
        this.canvas = canvas;
        this.c = this.canvas.getContext(context);
        this.interval = null;

        // store mouse coordinates, init in the middle of the window
        this.mouse = {
            x: this.canvas.width / 2,
            y: this.canvas.height / 2
        }

        this.position = {
            x: this.canvas.width / 2,
            y: this.canvas.height / 2
        }

        this.keys = [];

        for(var i = 0; i < 128; i++) {
            this.keys[i] = false;
        }

        this.wipe();
    }

    pause() {

    }

    quit() {

    }

    wipe() {
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    onmousemove (e) {
        this.mouse.x = e.clientX,
        this.mouse.y = e.clientY
    }

    onkeydown (e) {
        var keyCode = (e.which?e.which:(e.keyCode?e.keyCode:0))

        this.keys[keyCode] = true;
    }

    onkeyup (e) {
        var keyCode = (e.which?e.which:(e.keyCode?e.keyCode:0))

        this.keys[keyCode] = false;
    }
}


var fv = {
    canvas: null,

    randomColor: function() {
        return '#' + (Math.random()*0xFFFFFF<<0).toString(16);
    },
    
    getCurrentNumber: function() {
        var number = '001';

        if (document.location.hash.length == 4) {
            number = document.location.hash.substring(1);
        }

        return number;
    },

    createCanvasElement: function() {
        fv.canvas = document.createElement('canvas');
        document.body.appendChild(fv.canvas);
        fv.canvas.width = window.innerWidth;
        fv.canvas.height = window.innerHeight;  
    },

    inCanvas: function(p) {
        return (
            p.x > -100 &&
            p.y > -100 &&
            p.x < fv.canvas.width + 100 &&
            p.y < fv.canvas.height + 100
        );
    },

    loadFirstScript: function() {
        var script = document.createElement('script');
        script.onload = function() {
            experiment.start();
        }
        script.src = 'js/' + fv.getCurrentNumber() + '.js';
        document.body.appendChild(script);
    }
};

fv.createCanvasElement();
fv.loadFirstScript();

