//Bienvenida
alert("Bienvenido adivinad@r"+"\n"+
"Debes escoger un número del 1 al 10 para ganar");
//Número random de 1 al 10
let aleatorio = Math.floor((Math.random() * (11-1))+1);
let numero = parseInt(prompt("Escoge tu número del 1 al 10"));
let diferencia;
    
while(numero != aleatorio){
    
    diferencia = Math.abs(aleatorio-numero);
    alert("El número indicado no es el correcto, intenta nuevamente"+"\n"+
        "Pista: el numero está a una distancia de +-"+diferencia);
    numero = parseInt(prompt("Escoge tu número del 1 al 10"));
}
if(numero==aleatorio){
    alert("Felicidades acertaste! el número aleatorio es : "+aleatorio);
}
    


