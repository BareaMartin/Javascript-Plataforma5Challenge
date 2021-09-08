
function nuevoArreglo(numero1){
const inicio=1, fin=numero1 + 1;
console.log(Array.from({length: fin-inicio}, (x, i) => i+inicio))
}

nuevoArreglo(10);

function loopDePares(x){
for (let i = 0; i <= 100; i++) {
    const element = i;
    console.log(element)
    if((x+i) % 2 == 0){
        console.log('El numero '+ (i+x) + ' es par' )
    }
}
}
loopDePares(5);

const arreglo =  [ { nombre: 'lucas', edad: 20 }, { nombre: 'santi', edad: 22 } ];

oneProperty(arreglo,'edad')

function oneProperty(x,y){
    for (let i = 0; i < x.length; i++) {
        const element = x[i][y];
        console.log(element)       
    }
}





function sumattion(x) {
    var sumatoria = 0;
      for(var i = 1; i <= x; i++){
        sumatoria += i;
      }
      sumatoria;
  }

sumattion(9)

function middleCharacter(palabra) {

    var posicionLetra;
    var largoPalabra;
    
    if(palabra.length % 2 == 1) {
        posicionLetra = palabra.length / 2;
        largoPalabra = 1;
    } else {
        posicionLetra = palabra.length / 2 - 1;
        largoPalabra = 2;
    }
    
    result = palabra.substring(posicionLetra, posicionLetra + largoPalabra)
        console.log(result);

}


function middleCharacter(palabra) {
    var posicionLetra;
    var largoPalabra;    
    if(palabra.length % 2 == 1) {
        posicionLetra = palabra.length / 2;
        largoPalabra = 1;
    } else {
        posicionLetra = palabra.length / 2 - 1;
        largoPalabra = 2;
    }
    caracterDelMedio= palabra.substring(posicionLetra, posicionLetra + largoPalabra)
        console.log(caracterDelMedio);

}

    console.log(middleCharacter('pelot2udo'))