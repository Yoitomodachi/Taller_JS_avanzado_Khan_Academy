/*** 
    * Autor: Roberto Rico Sandoval.
    * Fille: rotación de figuras con respecto al origen.
    * Date: 26/ 07/ 2023
***/

// Figura principal con origen en x: 40, y: 40 (Cuadro color gris).
background(255, 255, 255);
fill(194, 194, 194);
noStroke();
rect(40, 40, 40, 40);

// Delimitación del cuadro negro.
pushMatrix();

// mover el origen al punto de origen de la figura principal.
translate(40, 40); 

// luego gira la cuadrícula (45 grados).
rotate(45);

// y dibujar el cuadrado en el origen de la cuadrícula (Cuadro color negro).
fill(0, 0, 0);
rect(0, 0, 40, 40);

popMatrix();

