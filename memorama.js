/***
    Autor: Roberto Rico Sandoval. 
    Fille: Memorama. 
    Date: 24/ 07/ 2023
***/

// Definición de los objetos (cartas).
var Ficha = function(x, y, cara){

    this.x = x;
    this.y = y;
    this.size = 50;
    this.cara = cara;
    this.cara_arriba = false;
};

// Constructor: Dimensión de las fichas boca abajo.
Ficha.prototype.draw = function(){
  
    fill(214, 247, 202);
    strokeWeight(2);
    rect(this.x, this.y, this.size, 10);

    if(this.cara_arriba){

        image(this.cara, this.x, this.y, this.size, this.size);
    } else {

        image(getImage("./avatars/sables.png"), this.x, this.y, this.size, this.size);
    } 
};

// Declaración de todas las imagenes disponibles para el memorama.
var caras = [

    getImage("./avatars/obi-wan.png"),
    getImage("./avatars/anakin.png"),
    getImage("./avatars/mace.png"),
    getImage("./avatars/yoda.png"),
    getImage("./avatars/dooku.png"),
    getImage("./avatars/vader.png"),
    getImage("./avatars/trooper.png"),
    getImage("./avatars/sidius.png"),
    getImage("./avatars/maul.png"),
    getImage("./avatars/ashoka.png")
];

// Mátriz que genera 2 cartas iguales de forma aleatoria.
var seleccion = [];
for (var s = 0; s < caras.length; s++){

    // Elige una carta al azar.
    var randomInt = floor(random(caras.length));
    var cara = caras[randomInt];
    // Arrojar 2 copias.
    seleccion.push(cara);
    seleccion.push(cara);
    // Remover del array de origen.
    caras.splice(randomInt, 1);
}

// Mezcla los elementos de la mátriz.
var barajar_vector = function(vector){

    var contador = vector.length;

    //Mientras haya elementos en la mátriz.
    while(contador > 0){

        // Tomar un índice aleatorio.
        var ind = Math.floor(Math.random() * contador);

        // Decrementar el contador en 1.
        contador--;

        // Intercambiar el elemento con esto...
        var temp = vector[contador];
        vector[contador] = vector[ind];
        vector[ind] = temp;
    }
};

barajar_vector(seleccion);

// Creación de array - Baraja del memorama.
var fichas = [];
var numero_columnas = 5;
var numero_filas = 4;

for (var i = 0; i < numero_columnas; i++){

    for(var j = 0; j < numero_filas; j++){

        var fichaX = i * 54 + 5;
        var fichaY = j * 54 + 40;
        var fichaCara = seleccion.pop();
        fichas.push(new Ficha(fichaX, fichaY)); 
    }
}

background(255, 255, 255);

// Empezar el dibujo con todas las fichas boca abajo.

for (var itera = 0; itera < fichas.length; itera++){

    fichas[i].cara_arriba = true;
    fichas[i].draw();
}

