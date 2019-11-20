/*

Blank P5 templatee
 */

let bot;
function preload(){
	bot= loadImage("Codetiiiings/Bottles.jpg");
}

function setup()
{
createCanvas(windowWidth, windowHeight);
image(bot, 0,0);
}


function draw() {
fill(0);
textSize(30);
text(rotationZ, 0, height/2);
}

