const tacoForm = document.querySelector('#taco-form');
const taco = document.querySelector('#taco');

// Se obtiene el de #taco-form todos los que tengan name taco
const taCo = tacoForm.taco;


const tacoSalsa = document.getElementById('salsa');

var coriander = document.getElementById('coriander');
var onion = document.getElementById('onion');

//cards
const pizzaCards = document.getElementsByClassName('taco-card');


const list = document.querySelector('#lista div');

const tacoOrder = document.querySelector('.taco-orden');

// console.log(tacoForm);
// console.log(taco.value);
// console.log(tacoOrder);
var activeOrder = [];


tacoForm.addEventListener('submit', function(event) {
    event.preventDefault();  // No se refresque la página al hacer submit
    // console.log('hemos detenido el sumbit');


    const tacoFlavor = taCo.value;
    const salsaValue = tacoSalsa.value;

    console.log(tacoFlavor);
    // if (tacoFlavor == 'pastor') {
    //     var tacoImg = 'pastor.jpg';
    // }

    // Validar si ocupa algun ingrediente

    // Obtener el value
    const onionIngredient = onion.value;
    const corienderIngredient = coriander.value;

    let cebolla = "";
    let silantro = "";
    if (onion.checked && coriander.checked) {
        console.log('se ocupa onion y cebolla');
        cebolla = 'cebolla y';
        silantro = 'silantro';
    } else if(onion.checked) {
        console.log('se ocupa onion');
        cebolla = 'cebolla';
    } else if(coriander.checked) {
        console.log('se ocupa coriander');
        silantro = 'silantro';
    } else {
        console.log('No se ocupan ingredientes');
    }




    // console.log(tacoFlavor);
    // console.log(salsaValue);

    // // lista.innerHTML = 'Tus tacos son sabor: '
    list.innerHTML += `<div class="taco-orden">
            <h3>Orden de tacos: ${tacoFlavor} </h3>
            <p>Salsa: ${salsaValue}</p>
            <p>Ingredientes: ${cebolla} ${silantro}</p>
            
            <img src="assets/images/pastor.png">
            
        </div>`;
    
        // console.log(tacoOrder);
        if (document.querySelector('.taco-orden') !== null) {

            // console.log('SI EXISTE TACO ORDER');

        } else {
            console.log('NO EXISTE TACO ORDER');
        }

        document.getElementById('confirm').style.display = "block";

});


document.getElementById('confirm').addEventListener('click', function (event) {
    console.log('Confirmacion puchado');
    document.getElementById('lista').style.display = "none";
    document.getElementById('publicity').innerHTML += `<section class="hola">
        <h3>Orden de tacos: </h3>
        <p>Salsa: </p>
        <p>Ingredientes: </p>
        
        <img src="assets/images/pastor.png">
        
    </section>`;
    
    alert('Se confirma');
})