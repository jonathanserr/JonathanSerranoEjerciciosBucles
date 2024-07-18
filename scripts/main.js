// // 1
// alert ("EJERCICIO 1:"+"\n"+"TABLA DE MULTIPLICAR:");
// let numero = parseInt(prompt(" Ingrese Numero a MULTIPLICAR:"));
// let total = null;
// for (let i = 1; i <= 10; i++) {
//     total = numero * i;
//     console.log(numero+" * "+i+" = "+ total);
// }



// // 3
// alert ("EJERCICIO 3:"+"\n"+"ADIVINA EL NUMERO DEL 1 AL 100:");
// let adivina = 66

// for (let i = 1; i < 1000; i++) {
//     let numeroIngresado = parseInt(prompt(" Ingrese Numero (1-100) :"));
//     if (numeroIngresado === adivina) {
//         console.log("GANASTE--- ADIVINASTE en el intento número : "+i);
//         break;
//     } else if (numeroIngresado > adivina) {
//         console.log("El numero ingresado es MAYOR, vuelve a intentarlo");   
//     } else {
//         console.log("El numero ingresado es MENOR, vuelve a intentarlo");           
//     } 
// }

// // 6
// alert ("EJERCICIO 6:"+"\n"+"ARREGLO 10 POSICIONES X CONSOLA");
// let array = ["Perro",2,"Gato",4,5,6,"Raton",8<3,9,10]
// for (let x = 0; x < array.length; x++) {
//     console.log(array[x]);    
// }

// 7
alert ("EJERCICIO 7:"+"\n"+"ARREGLO 10 NUMEROS X CONSOLA DOBLE C/ELEMENTO");
let array1 = [1,2,3,4,5,6,7,8,9,10]
for (let y = 0; y < array1.length; y++) {
    console.log(array1[y]*2);    
}
// 16
alert ("EJERCICIO 16:"+"\n"+"ARREGLO 10 NUMEROS DESORDENADOS--- DEVUELVE X CONSOLA ARREGLO ORDENADO");
let array8 = [5,3,0,1,9,2,6,7,4,8]
let temp = null;
for (let paso = 1; paso < array8.length; paso++) {
    for (let i = 0; i < array8.length -1; i++) {
        if (array8[i] > array8[i+1]) { 
            temp = array8[i];
            array8[i] = array8[i+1];
            array8[i+1] = temp
        }
        
    };

}
for (let i = 0; i < array8.length; i++) {
    console.log(array8[i]);   
}