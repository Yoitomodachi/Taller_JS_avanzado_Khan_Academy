/*
    *Autor: Roberto Rico Sandoval.
    *Fille: Cambio de escenas.
    *Date: 13/ 06/ 2023
*/

fill(0, 0, 0);
textSize(20);
textAlign(CENTER);

//images of Leafers.
// Variables que contienen una imagen como valor.
var seed= getImage("avatars/leafers-seed");
var seedling= getImage("avatars/leafers-seedling");
var sapling= getImage("avatars/leafers-sapling");
var tree= getImage("avatars/leafers-tree");
var ultimate = getImage("avatars/leafers-ultimate");

// Definición del contador o controlador de escenas.
var currentScene;

var drawScene1 = function(){
    
    currentScene = 1;
    background(200, 175, 175);
    image(seed, 50,200);
    text("Leafers started out as a seed",200,50);
    
};

// Agregar nuevas escenas.
var drawScene2 = function(){
    
    currentScene = 2;
    background(9, 146, 158);
    image(seedling, 80, 160);
    text("Este pokémon de hierba en la niñez", 200, 50);
    
};

var drawScene3 = function(){
    
    currentScene = 3;
    background(127, 168, 123);
    image(sapling, 120, 120);
    text("Pok+emon de hierba jóven con ácne", 200, 50);
    
};

var drawScene4 = function(){
    
    currentScene = 4;
    background(123, 235, 149);
    image(tree, 160, 80);
    text("Este pokémon de hierba ahora es una adulto jóven que le debe al Coppel.", 200, 50);
};

var drawScene5 =function(){
    
    currentScene = 5;
    background(150, 150, 175);
    image(ultimate, 200,200);
    text("In the end, Leafers became Ultimate Leafers",200,50);
    
};

drawScene1();

// Función para cambiar de escena con la función de un clic por el mouse.
mouseClicked = function(){
    
    if(currentScene === 1){
        drawScene2();
    }
    else if(currentScene === 2){
        drawScene3();
    }
    else if(currentScene === 3){
        drawScene4();
    }
    else if(currentScene === 4){
        drawScene5();
    }
    else if(currentScene === 5){
        drawScene1();
    }
};

