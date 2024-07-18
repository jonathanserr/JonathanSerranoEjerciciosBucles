// 1




// 3
alert ("EJERCICIO 8:"+"\n"+"ADIVINA EL NUMERO DEL 1 AL 100:");
let adivina = 66

for (let i = 1; i < 1000; i++) {
    let numeroIngresado = parseInt(prompt(" Ingrese Numero (1-100) :"));
    if (numeroIngresado === adivina) {
        console.log("GANASTE, haz ADIVINADO en el intento número : "+i);
        break;
    } else if (numeroIngresado > adivina) {
        console.log("El numero ingresado es MAYOR, vuelve a intentarlo");   
    } else {
        console.log("El numero ingresado es MENOR, vuelve a intentarlo");           
    } 
}

// 16