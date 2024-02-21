// Setup
function setup() {
    createCanvas(800, 600);
}

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

function ground(y) {
    fill(255, 255, 0);
    rect(0, y, width, height - y);
}

function crashed() {
    background(255, 255, 255);
    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(45);
    text("You crashed :(", width/2, height/2);
    textSize(22); 
    text("Click to go to main menu", width/2, height/2 + 100);
}

function landed() { 
    background(255, 255, 255);
    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(45);
    text("You landed safely :D", width/2, height/2);
    textSize(22);  
    text("Click to go to main menu", width/2, height/2 + 100);
}

function start() { 
    background(255, 255, 255);
    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(45);
    text("LUNAR LANDER", width/2, height/2);
    textSize(30);  
    text("Click to start", width/2, height/2 + 50);
}

const groundLevel = 500;
let x = 100;
let rocketY = 0;
let speed = 0;
const gravity = 0.15;
let state = "start";

function game() {
    clear();
    background (0, 0, 0);
    push();
    textAlign(CENTER);
    textSize(18);
    text("Press DOWN ARROW to slow your descent", width/2, height/2 - 150);
    pop();
    ground(groundLevel);
    rocket(150, rocketY);

    speed = speed + gravity;
    rocketY = rocketY + speed;
    const touchedGround = rocketY > (groundLevel - 286);
    const isHoldingUp = keyIsDown(40);
    const safeLanding = touchedGround && isHoldingUp;

    if (touchedGround == true) {
        rocketY = 0;
        speed = 0;

        if (safeLanding == true) {
            state = "landed";
        } else if (safeLanding == false) {
            state = "crashed";
        }
    } 
    
    if (isHoldingUp == true) {
        speed = speed - 0.3;
    } 
}

// Rocket Animations
function draw() {
    if (state == "start") {
        start();
    } else if (state == "game") {
        game();
    } else if (state == "crashed") {
        crashed();
    } else if (state == "landed") {
        landed();
    }
} 

function mouseClicked() {
    if (state == "start") {
        state = "game";
    } else if (state == "crashed") {
        state = "start";
    } else if (state == "landed") {
        state = "start";
    }
}