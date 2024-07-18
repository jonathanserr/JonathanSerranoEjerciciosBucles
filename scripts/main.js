// // 1
// alert ("EJERCICIO 1:"+"\n"+"TABLA DE MULTIPLICAR:");
// let numero = parseInt(prompt(" Ingrese Numero a MULTIPLICAR:"));
// let total = null;
// for (let i = 1; i <= 10; i++) {
//     total = numero * i;
//     console.log(numero+" * "+i+" = "+ total);
// }

// 2
// let numeros =[];
// let numeroAcumulado;
// do {
//     numeroAcumulado = parseInt(prompt(" Ingrese un Numero  (0 para terminar):"));
//     if (numeroAcumulado !==0) {
//         numeros.push(numeroAcumulado);
//     }
    
// } while (numeroAcumulado !== 0);

// console.log("Los numeros acumulados son: "+numeros.join(", "));


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



//4


//5
// function encontrarDivisores(numero) {
//     let divisores =[];
//     for (let i = 0; i <= numero; i++) {
//         if (numero % i === 0) {
//            divisores.push(i) 
//         }
//     }
//     return divisores;
// }

// let numero = parseInt(prompt(" Ingrese Numero"));
// let divisores = encontrarDivisores(numero);
// console.log("Los DIVISORES del numero "+numero+" son: "+divisores.join(", "));

// // 6
// alert ("EJERCICIO 6:"+"\n"+"ARREGLO 10 POSICIONES X CONSOLA");
// let array = ["Perro",2,"Gato",4,5,6,"Raton",8<3,9,10]
// for (let x = 0; x < array.length; x++) {
//     console.log(array[x]);    
// }

// // 7
// alert ("EJERCICIO 7:"+"\n"+"ARREGLO 10 NUMEROS X CONSOLA DOBLE C/ELEMENTO");
// let array1 = [1,2,3,4,5,6,7,8,9,10]
// for (let y = 0; y < array1.length; y++) {
//     console.log(array1[y]*2);    
// }


// 8

// 9

// let array2 = [1,2,3,4,5,6,7,8,9,10]
// let arrayImpares = [];
// for (let i = 0; i < array2.length; i++) {
//     if (array2[i] % 2 !== 0) {
//         arrayImpares.push(array2[i]);
//     }  
// }
// console.log(arrayImpares);

// 10
// let numero;
// let sumaPar = 0;
// let sumaImpar = 0;
// do {
//     numero = parseInt(prompt(" Ingrese Numeros para Sumar (Pares/Impares)  (0 para terminar):"));
//     if (numero !==0 && (numero % 2 === 0)) {
//         sumaPar += numero;
//     } else {
//         sumaImpar += numero;
//     }
// } while (numero !== 0);

// console.log("La suma de los PARES es: "+sumaPar);
// console.log("La suma de los IMPARES es: "+sumaImpar);

// //11
// let array3 = [10,7,3,99,55,6,2,55,9,1];
// let mayor = array3[0];
// for (let i = 0; i < array3.length; i++) {
//     if (mayor <= array3[i]) {
//         mayor = array3[i]
        
//     }
// }
// console.log(mayor);

//12
// let array4 = [10,-7,0,0,-55,6,2,55,9,-3];
// let menor = array4[0];
// for (let i = 9; i >= 0; i--) {
//     if (menor >= array4[i]) {
//         menor = array4[i]    
//     }
// }
// console.log(menor);


// 13
alert("EJERCICIO 13:"+"\n"+"PIEDRA, PAPEL O TIJERAS")
let player1 = {
    nombre : null,
    jugada : null,
}
let player2 = {
    nombre : null,
    jugada : null,
}

player1.nombre = prompt("Ingrese NOMBRE PLAYER 1");
player2.nombre = prompt("Ingrese NOMBRE PLAYER 2");
do { 
    player1.jugada = prompt("PLAYER " + player1.nombre + "\n" +"piedra/papel/tijeras");
    player2.jugada = prompt("PLAYER " + player2.nombre + "\n" +"piedra/papel/tijeras");
    if (player1.jugada ==="piedra") {
        if (player2.jugada === "tijeras") {
            console.log("GANA : "+player1.nombre);
            break;
        } else if(player2.jugada ==="papel"){
            console.log("GANA : "+player2.nombre);
            break;
        }


    } else if (player1.jugada ==="papel") {
        if (player2.jugada === "piedra") {
            console.log("GANA : "+player1.nombre);
            break;
        } else if(player2.jugada ==="tijeras"){
            console.log("GANA : "+player2.nombre);
            break;
        }
        
    } else if (player1.jugada ==="tijeras") {
        if (player2.jugada === "papel") {
            console.log("GANA : "+player1.nombre);
            break;
        } else if(player2.jugada ==="piedra"){
            console.log("GANA : "+player2.nombre);
            break;
        }
    }
} while (player1.jugada === player2.jugada);


// // 14
// for (let x = 1; x <= 5; x++) {
//     let asterisco = "";
//     for (let y = 1; y <= x; y++) {
//         asterisco += "* ";  
//     }
//     // alert(asterisco)
//     console.log(asterisco);
// }

// 15
// for (let x = 5; x >= 1; x--) {
//     let asterisco = "";
//     for (let y = 1; y <= x; y++) {
//         asterisco += "* ";  
//     }
//     // alert(asterisco)
//     console.log(asterisco);
// }


// for (let x = 5; x >= 1; x--) {
    
//     console.log('* '.repeat(x));
// }



// 16
// alert ("EJERCICIO 16:"+"\n"+"ARREGLO 10 NUMEROS DESORDENADOS--- DEVUELVE X CONSOLA ARREGLO ORDENADO");
// let array8 = [5,3,0,1,9,2,6,7,4,8]
// let temp = null;
// for (let paso = 1; paso < array8.length; paso++) {
//     for (let i = 0; i < array8.length -1; i++) {
//         if (array8[i] > array8[i+1]) { 
//             temp = array8[i];
//             array8[i] = array8[i+1];
//             array8[i+1] = temp
//         }
        
//     };
// }
// alert(array8)
// console.table(array8)
// for (let i = 0; i < array8.length; i++) {
//     console.log(array8[i]);   
// }