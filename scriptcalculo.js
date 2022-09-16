const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const resultado = document.querySelector('.resultado');



console.log(typeof(input1.value));
console.log(typeof(input2.value));


function btnOnClick() {
    const suma = parseInt(input1.value) + parseInt(input2.value)
    resultado.innerHTML = "El resultado es " + suma ; 
}
