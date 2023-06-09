//DEFINICION DE VARIABLES
const precio = 200;
let descuentoEstudiente = precio * 0.20;
let descuentoTrainee = precio * 0.50;
let descuentoJunior = precio * 0.85;


// CAPTURO VALORES

const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const botonResumen = document.getElementById('botonResumen');
const totalCompra = document.getElementById('totalCompra');

console.log(cantidad.value);
console.log(categoria.value);
console.log(botonResumen.value);
console.log(totalCompra.value);





function resumen(){


    let cantidadEntradas = (cantidad.value);
    
    if (categoria.value == "Estudiante") {

        valorFinal = cantidadEntradas * descuentoEstudiente;
        // alert(valorFinal);  

    } else

    if (categoria.value == "Trainee") {

        valorFinal = cantidadEntradas * descuentoTrainee;
        // alert(valorFinal);  

    } else

    if (categoria.value == "Junior") {

        valorFinal = cantidadEntradas * descuentoJunior;
        // alert(valorFinal);  

    } else
    

    valorFinal = cantidadEntradas * precio;    


    totalCompra.innerHTML = "Total a Pagar: $ " + valorFinal;

}
