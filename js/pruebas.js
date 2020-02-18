// function probarValidarNombre() {
//   console.assert(
//       validarNombre('') === 'Este campo debe tener al menos 1 caracter',
//       'Validar nombre no validó que el nombre no sea vacío',
//   );

//   console.assert(
//       validarNombre(
//           '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
//       'Este campo debe tener menos de 50 caracteres',
//       'Validar nombre no validó que el nombre sea menor a 50 caracteres',
//   );
// }

// probarValidarNombre();


/* 
Pruebas unitarias
Se utilizara console.assert, esto se fija que las cosas sean iguales
console.assert(1 === 43, '1 no es igual a 43') 
*/

// function sumar(a, b){
//     return a - b;
// }

// console.assert(sumar(1,2) === 3, 'la suma de 1 + 2 no dio 3');

function pruebaValidarNombre() {

    console.assert(validarNombre('') === 'Este campo debe tener al menos un caracter', 'Validar nombre no funciono con un string vacio');
    
    console.assert(
        validarNombre('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') === 'Este campo debe tener maximo 50 caracteres',
        'No valido que el nombre debe tener maximo 50 caracteres'
    );

    console.assert(
        validarNombre('123123123') === 'Por favor, ingrese solo letras',
        'No valido que el nombre tenga solo letras'
    );
}

function pruebaValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('') === `El campo descripcion no puede estar vacio`,
        'No se valido que complete la descripcion del regalo'
        );
    
    console.assert(
        validarDescripcionRegalo('askjbsakjhfsajkhasfkjhsafjkhsadfiojoiu123908142u9fasbfsabjkfsa890saf9uh12bhfdsa89afsbjhiafsjksaf90afs809e12bnm,asfjkhasfjklhafsioafsjklasfnjkfas') === 'El campo descripcion es muy largo',
        'La funcion validar descripcion regalo no valido que el campo sea muy largo'
    );
    }
    
function pruebaValidarCiudad(){
    console.assert(
        validarCiudad('') === `Por favor, seleccione una ciudad`,
        'No se valido que se haya seleccionado una ciudad'
    );
}

        
pruebaValidarNombre();
pruebaValidarCiudad();
pruebaValidarDescripcionRegalo();
