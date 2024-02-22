let listaNumerosSorteados = [];
let intentos=0;
let NumeroMaximo=10;
let SecretNumber = GenerarNoSecreto();

//este es el ámbito o alcance de la función es de bloque.

/*Aquí h1 es un título. Esta asignación es un objeto. Tiene algunos métodos que definen su comportamiento. 
Estoy haciendo un puente para enlazar el elemento y su comportamiento. 
Aquí el puente es document. El método es querySelector(`h1`) y traigo el objeto
inner.HTML es un método*/

//Botones
// Aquí es momento de automatizar un poco todo esto de la asignación

/*En HTML puedo llamarla (solo en eventos). Js se ejecuta secuancialmente
Osea que puedo declararla al principio o al final.  
Esto se llama Hoisting, que hace que Js las mueva y las haga disponibles inmediatamente. 
Lo que se llama Parámetro es la forma en el que el comportamiento de la función no será fija. 
Osea que antes cuando llamaba a un elemento era estático ahora lo hago con un parámetro. 
*/
function asignarTextoElemento(elemento,texto) //formato de a que le agregaré texto
{
    let elementoHTML = document.querySelector(elemento); //objeto nuevo  
    elementoHTML.innerHTML = texto;
    return; //siempre se pone al finalizar la función
}

/*aquí estoy a punto de indicarle en que momento verificaré mi Input del número
con la etiqueta `Input` que representa la caja de texto.
Hay una función que me permite darle un identificador a un atributo (ver HTML)
Porque puede que hayan muchos imputs, entonces por eso es mejor identificarlos
Luedo de definir para input su id="ValorUsuario". Uso otra función llamada:
document.getElementById(`ValorUsuario`).value;
el .value es para ver ese atributo. 
*/

function VerificarIntento () 
{
    intentos++;
    let NumeroDeUsuario= parseInt (document.getElementById(`ValorUsuario`).value);
    if(NumeroDeUsuario===SecretNumber)
    {
        asignarTextoElemento(`p`,`Acertaste en ${intentos} ${(intentos===1) ? `intento` : `intentos`} pibe!!`);
        //${(intentos===1) ? `intento` : `intentos`} es mi operador ternario
        //aquí habilito el botón desabilitando el atributo de disabled
        document.getElementById(`reiniciar`).removeAttribute(`disabled`)
    }
    else 
    // el usuario no acertó
    {
        if (NumeroDeUsuario <= SecretNumber)
            {
                asignarTextoElemento(`p`,`El número es mayor`); 
            }    
        else 
            {
            asignarTextoElemento(`p`,`El número es menor`);
            } 
        console.log(`intentos: `,intentos);
        limpiarCaja();
    }
    //retorna true o false
    //el === es una condición para indicar que debe ser igual en tipo de valor y de dato, si no será falso. 
    return;
}

function limpiarCaja()
{
   document.querySelector('#ValorUsuario').value = '';
}

let PalabraIntentos;

//número secreto
function GenerarNoSecreto() 
{ 
    let NumeroGenerado = Math.floor(Math.random()* `${NumeroMaximo}`)+1;
    console.log(NumeroGenerado);
    console.log(listaNumerosSorteados);
     //ahora pregunto si está en la lista? 
     //si el número generado está incluido, haré una acción y si no sigo jugando
    //aquí uso la recursividad. 

    //si ya he sorteado todos los números muestro un mensaje y cierro
    if (listaNumerosSorteados.length == NumeroMaximo)
    {
        asignarTextoElemento(`p`, `Ya se asignaron todos los números posibles`);   
    }
    else
    {

    if (listaNumerosSorteados.includes(NumeroGenerado))
    {
        return GenerarNoSecreto();
    }
    else 
    {
        listaNumerosSorteados.push(NumeroGenerado);
        return NumeroGenerado;
    }
    }
}

function CondicionesIniciales()
{
    //Esto es una función que está siendo llamada. (ya está declarada)
    asignarTextoElemento(`h1`, `Juego del número secreto!`); 
    asignarTextoElemento(`p`, `Ingresa un número del 1 al ${NumeroMaximo}`);
    //reiniciar intentos
    intentos=1;
    //generar el  número aleatorio nuevo
    SecretNumber= GenerarNoSecreto();
    //hice una función o formato en el que uso una sola función llamando a los elementos y lo que quiero que contengan.
    console.log(`Número secreto: ${SecretNumber}`);
}

function JuegoNuevo()
{
    //limpiar la caja
    limpiarCaja();
    //Mensaje de inicio en restart
    CondicionesIniciales();
    //generar el  número aleatorio nuevo
    //deshabilitar el botón juego nuevo
    //reiniciar intentos
    //desahilitar cajita
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //aquí es: que el atributo tomará el estado y lo reemplaza con otro. 
}
CondicionesIniciales();

/*hay en JS existe una lista de números o arreglos array, 
para manejar una cajita con cajitas mas pequeñas (es una lista)
en donde los elementos comparten algo similar. 
[] quiere decir que es del tipo array (arreglo)
Puede ser de diferentes tipos de variable
let numerossorteados = [];
//aquí es al final de la lista
numerossorteados.push(5);
numerossorteados.push(8);
numerossorteados.push(3);
numerossorteados.push(7);
//no solo puedo pedirle el elemento sino el tamaño del elemento


//ahora, como puedo acceder a un elemento en particular?
//es con posición o índice. Siempre arranco en cero. 
//es útil saber la última posición si mi lista es muy larga. 


console.log(numerossorteados[numerossorteados.length-1]);
*/