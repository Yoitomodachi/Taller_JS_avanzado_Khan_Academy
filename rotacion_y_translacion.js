/*** 
    Autor: Roberto Rico Sandoval.
    Fille: Rotación de figuras con translación.
    Date: 26/ 07/ 2023
***/


// Datos técnicos de la figura principal (Rectángulo naranja).
noStroke();
background(0, 0, 0);
var r = 255;
var g = 90;
var b = 0;
fill(r, g, b);


// Dibujar un nuevo rectángulo cada 30 grados, hasta llegar a 360.
for (var i = 0; i< 360; i += 30){
    // Centrar al rectángulo principal. Delimitar de forma independiente a cada nueva figura.
    pushMatrix();
    translate(200,200);
    // Rotación aumentada en cada 30 grados.
    rotate(i);
    // Rotar con sentido al origen de la cuadrícula (0,0).
    rect(0, 0, 150, 15);
    // Nuevo color de la figura modificando el valor de las variables r, g, b.
    fill(r, g, b);
    r -= 20;
    g += 30;
    b += 40;
    popMatrix();
}

