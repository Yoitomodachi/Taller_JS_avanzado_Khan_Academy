/*** 
    Autor: Roberto Rico Sandoval.
    Fille: Animación por escalas y profundidades en Processing JS.
    Date: 29/ 07/ 2023
***/

// Variables globales.
angleMode = "degrees";
var backgroundColor = color(135, 206, 250);
var sunColor = color(255, 255, 0);
var sunStrokeColor = color(200, 200, 0);
var sunDiameter = 100;
var scaleF = 2.0;
var clim = random(2,5);


var drawCloud = function() {
    noStroke();
    fill(255, 255, 255);
    ellipse(0, 0, 126, 97);
    ellipse(60, 0, 70, 60);
    ellipse(-60, 0, 70, 60);
};


var drawSunRay = function() {
    fill(sunColor);
    noStroke();
    triangle(0, 90, -40, 0, 40, 0);
};


var drawSun = function() {
    //Dibujar los rayos del sol.
    for (var rayo = 0; rayo < 360; rayo += 30){
      
        pushMatrix();
        translate(200,200);
        rotate(rayo);
        drawSunRay();
        popMatrix();
    }
    
    //Dibujar el sol al centro.
    fill(sunColor);
    stroke(sunStrokeColor);
    ellipse(width/2, height/2, sunDiameter, sunDiameter);
};

//Dibujar el fondo.
background(backgroundColor);

//Dibujar el sol.
pushMatrix();
translate(200 - 200 * scaleF, 200 - 200 * scaleF);
scale(scaleF); 
drawSun();
popMatrix();

//Dibujar nubes.
var drawGroupCloud = function(){
    
    // Se construirán de 2 a 5 nubes según el clima.
    for(var i = 0; i < clim; i++){
        
        pushMatrix();
        var x1 = random(10,410);
        translate(x1, random(10,410));
        drawCloud();   
        popMatrix();
    }
};

drawGroupCloud();

