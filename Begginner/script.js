let time = 0;
let x = 0;
function setup() {
    createCanvas(300,300);
    background(100);
}

function draw() {
    ellipse(x, height/2,40,40);
    console.log("width",width);
    console.log("x",x);
    time += 1;
    time > 300? x -= 1
        : x = time;
    
    x === 0? time = 0 : null;
    
}