//Como se cual de los radio-button esta en true? Para esto utilizamos document.formulario
//Siendo formulario el name del <form>


// console.log(document.formulario.comportamiento.value) // Devuelve el VALUE del <input> que este seleccionado dentro del name='comportamiento'


const $form = document.formulario; // Es lo mismo que $form = document.querySelector['#carta-a-santa'] que es la busqueda por id
/* const nombre = $form.nombre.value;
// const $nombre = document.querySelector('[name=nombre]').value

const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
// const comportamiento = $form['comportamiento'].value; // Esto tambien funciona
const descripcionRegalo = $form['descripcion-regalo'].value // Cuando se quiere llamar a una name que contenga guiones, se debe de utilizar entre corchetes y comillas.

console.log(`Nombre: ${nombre}`);
console.log(`Ciudad: ${ciudad}`);
console.log(`Comportamiento: ${comportamiento}`);
console.log(`Descripcion Regalo: ${descripcionRegalo}`); */


//Validaciones


function validarNombre(nombre){

    if(nombre.length === 0){
        return 'Este campo debe tener al menos un caracter';
    }
    
    if(nombre.length > 50){
        return 'Este campo debe tener maximo 50 caracteres';
    }
    if(!/^[a-z]+$/i.test(nombre)){
        return `Por favor, ingrese solo letras`;
    }

    return '';
}

// regex ==> //

function validarCiudad(ciudad){
    if(ciudad.length === 0){
        return `Por favor, seleccione una ciudad`;
    }

    return '';

}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length >= 100){
        return `El campo descripcion es muy largo`;
    } else if (descripcionRegalo.length === 0){
        return `El campo descripcion no puede estar vacio`;
    } else {
        return '';
    }
}


function validarFormulario(event) {
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);
    
    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    };

    console.log(errores);

    const esExito = manejarErrores(errores) === 0;

    console.log(esExito);

    if (esExito){
        $form.className = 'oculto';
        document.querySelector('#exito').className = '';
    }

    event.preventDefault();

}

function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error = (errores[key]);
        if (error){
            $form[key].className = 'error';

            cantidadErrores++;
            const $error = document.createElement('li');
            $error.innerText = error;

            $errores.appendChild($error);
            
        } else {
            $form[key].className = '';
        }
        
    });

    return cantidadErrores;

}

$form.onsubmit = validarFormulario;