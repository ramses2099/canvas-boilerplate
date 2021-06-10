/** @type{HTMLCanvasElement} */
/*--------------------------------------------------------
------------template canvas game-------------------------
---------------------------------------------------------*/

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = innerWidth;
const CANVAS_HEIGHT = canvas.height = innerWidth;

// Variables
let mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = [
    '#2185C5',
    '#7ECEFD',
    '#FFF6E5',
    '3FF7F66'
];

//Event Listeners
addEventListener("mousemove", function(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener("resize", function() {
    canvas.width = innerWidth;
    canvas.height = innerWidth;
});


//Utility Functions
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

//
//  ObjectEx template
//
class ObjectEx {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    update() {
        this.draw();
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}


//Implementation
function init() {

}

// Animation Loop
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);



    //update


    //draw
    ctx.fillText("HTML CANVAS BOILERPLATE", mouse.x, mouse.y);



    window.requestAnimationFrame(animate);
}

init();
animate();