//Para poder tener acceso a las etiquetas del archivo HTML, ya sea con clase o id
const h1 = document.querySelector('h1');
const parrafo1 = document.getElementsByClassName('parrafo1');
const parrafo2 = document.getElementById('parrafo2');;
const input = document.querySelector('input')

//Para imprimir el valor del input en este caso, value es la propiedad de valor
console.log(input.value);
//Para imprimir todos mis elementos 
console.log({
    h1,
    parrafo1,
    parrafo2,
    input,
    
});
//Para modificar cualquiera etiqueta, tambien se puede con innerText
h1.innerHTML = 'Aprendiendo DOM'
//Para obtener el atributo de una etiqueta que este en HTML, se llama la clase o el id
//para obtener lo que esto nos retorna
console.log(h1.getAttribute('class'));
//Para mofificar los atributos de nuestros elementos del HTML
h1.setAttribute('class','rojo ');

//Funcion solamente para las clases a una etiqueta
h1.classList.add('morado'); //toogle , contains

//para crear una img o cualquier etiqueta y meterla dentro de una etiqueta ya existente en nuestro archivo html

const img = document.createElement('img');


img.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/3/32/Platzi.jpg');
console.log(img);

parrafo2.append(img);


img.height = 100;





//img.setAttribute('naturalweight','200px')
//img.setAttribute('naturalheight','500px')