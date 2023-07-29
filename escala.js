/*** 
    Autor: Roberto Rico Sandoval.
    Fille: Ulusión óptica mediante escalas.
    Date: 27/ 07/ 2023
***/

var diameter = 600;
var decreaseAmt = 0.02;
var scaleF = 1.1;


// Caracteristícas técncias de los circulos blancos.
var drawWhiteCircle = function(diameter) {
    
    fill(255, 255, 255);
    ellipse(0, 0, diameter, diameter);
};


// Caracteristícas técncias de los circulos negros.
var drawBlackCircle = function(diameter) {
    
    fill(0, 0, 0);
    ellipse(0, 0, diameter, diameter);
};

background(255, 255, 255);


// Bucle que dibuja a la ilusión óptica.
while (scaleF > 0){
    
    // Circulos negros.
    pushMatrix();
    translate(200,200);
    scale(scaleF);
    drawBlackCircle(diameter);
    scaleF -= decreaseAmt;
    popMatrix();
    // Circulos blancos.
    pushMatrix();
    translate(200,200);
    scale(scaleF);
    drawWhiteCircle(diameter);
    scaleF -= decreaseAmt;
    popMatrix();
}

