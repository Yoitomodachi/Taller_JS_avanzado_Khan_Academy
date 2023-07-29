/*** 
    * Autor: Roberto Rico Sandoval.
    * Fille: Función translate(), pushMatrix(), y popMatrix(), para mover objetos de forma independiente 
    en el canva.
    * Date: 26/ 07/ 2023
***/

/*** 
DOCUMENTACIÓN.

- Se ocupa la función translation(), para mover a un objeto dentro del canva.

- Se ocupa la función pushMatrix para iniciar la limitación de movimiento de un segmento de objetos en el canva.

- Se ocupa la función pophMatrix para finalizar la limitación de movimiento de un segmento de objetos en el canva.
***/

/*** 
    - Dibujo del escenario o nivel, dibujo y escalado de los enemigos (insectos), dibujo y escalado del objeto 
    principal (bebe alien).
***/
var drawLevel = function(){
    var babyWinston =getImage("creatures/BabyWinston");
    var enemybug = getImage("cute/EnemyBug");
    noStroke();
    var roomMatrix = [[1,2,1,1,1,2,1,1],
                      [0,0,1,1,1,0,0,0],
                      [1,0,1,1,1,0,1,1],
                      [1,0,0,0,0,0,1,1],
                      [1,1,0,0,0,0,1,1],
                      [2,0,0,0,0,0,0,0],
                      [1,0,1,1,1,0,1,0],
                      [1,0,1,1,1,0,0,2]];
    for(var row=0; row<roomMatrix.length; row++) {
        for(var col=0; col<roomMatrix[row].length; col++) {
            var id = roomMatrix[row][col];
            switch(id) {
                case 0:
                    fill(100, 150, 175);
                    rect(col*50,row*50,50,50);
                    break;
                case 1:
                    fill(100,100, 100);
                    rect(col*50,row*50,50,50);
                    break;
                case 2:
                    fill(100, 150,175);
                    rect(col*50,row*50,50,50);
                    pushMatrix();
                    scale(0.5);
                    image(enemybug,col*2*50,-55+row*2*50);
                    popMatrix();
                    break;
            }
        }
    }
    
    pushMatrix();
    scale(0.75);
    image(babyWinston,150,250);
    popMatrix();
};

// Dibujo de la piedra 1 (Obstáculos).
var drawRock1 = function(){
    var rock = getImage("cute/Rock");
    var numberone = getImage("space/1");
    pushMatrix();
    scale(0.5);
    image(rock,0,40);
    popMatrix();
    pushMatrix();
    scale(0.25);
    image(numberone,60,240);
    popMatrix();
};

// Dibujo de la piedra 2 (Obstáculos).
var drawRock2 = function(){
    var rock = getImage("cute/Rock");
    var numbertwo = getImage("space/2");
    pushMatrix();
    scale(0.5);
    image(rock,700,40);
    popMatrix();
    pushMatrix();
    scale(0.25);
    image(numbertwo,1460,240);
    popMatrix();
};

// Dibujo de la piedra 3 (Obstáculos).
var drawRock3 = function(){
    var rock = getImage("cute/Rock");
    var numberthree = getImage("space/3");
    pushMatrix();
    scale(0.5);
    image(rock,100,640);
    popMatrix();
    pushMatrix();
    scale(0.25);
    image(numberthree,260,1440);
    popMatrix();
};

// Dibujo de la piedra 4 (Obstáculos).
var drawRock4 = function(){
    var rock = getImage("cute/Rock");
    var numberfour = getImage("space/4");
    pushMatrix();
    scale(0.5);
    image(rock,400,240);
    popMatrix();
    pushMatrix();
    scale(0.25);
    image(numberfour,860,640);
    popMatrix();
};

/***
DIBUJAR A TODOS LOS ELEMENTOS EN LA ESCENA.
***/

// Dibujar el nivel.

drawLevel();
    
// Dibujar a la piedra 1 con independencia de translación.
pushMatrix();
translate(50,0);
drawRock1();
popMatrix();

// Dibujar a la piedra 2 con independencia de translación.
pushMatrix();
translate(-100,0);
drawRock2();
popMatrix();

// Dibujar a la piedra 3 con independencia de translación.
pushMatrix();
translate(0,-100);
drawRock3();
popMatrix();

// Dibujar a la piedra 4 con independencia de translación.
pushMatrix();
translate(50,100);
drawRock4();
popMatrix();

