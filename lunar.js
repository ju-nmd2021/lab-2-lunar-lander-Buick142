// Rocket
function rocket(x, y) {
    push();
    translate(x, y);
    fill(200, 0, 0);
    strokeWeight(0);
    ellipse(x + 25, y, 50, 50);
    fill(255, 255, 225);
    rect(x, y, 50, 80, 0);
    fill(200, 0, 0);
    triangle(x, y + 60, x - 30, y + 100, x, y + 80);
    triangle(x + 50, y + 60, x + 50, y + 80, x + 80, y + 100);
    pop();
}

function ground() {
    fill(255, 0, 0);
    rect(0, y, width, height - y);
}

let x = 100;
let rocketY = 0;
let speed = 0;
const gravity = 0.15;


// Rocket Animations
function draw() {
    background (255, 255, 255);
    rocket(50, rocketY);


    speed = speed + gravity;
    rocketY = rocketY + speed;

        
    if (keyIsDown(40)) {
        speed = speed - 0.3;
    } 
} 