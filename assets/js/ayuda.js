//Funciones para validaciones


//Función auxiliar que recibe un id de un input tipo botón y un handler y lo crea
function crearBoton(pIdBoton, pHandler) {
    document.getElementById(pIdBoton).addEventListener('click', pHandler);
}

//Función auxiliar que recibe un id de un parrafo y un mensaje y lo muestra.
function mostrarMensaje(pIdParrafo, pMensaje) {
    document.getElementById(pIdParrafo).innerText = pMensaje;
}

/* **
 * Función que recibe un texto y retorna true
 * si existe un usuario con ese correo.
 * De lo contrario retorna false.
 */
function existeUsuario(pCorreo) {
    //cargo una variable para retornar.
    //le asigno valor false
    let existe = false;

    /**
     * 
     * 
     * recorro con un for el array de usuarios como cualquier array
     * dentro de cada ciclo coloco una estructura de control if
     * pregunto si el correo recibido es igual a la propiedad correo
     * del objeto que vive en la posición i del array.
     * 
     * Si es así cambio la variable a true y utilizo break para que 
     * la estructura de control corte y no siga con ciclos que ya
     * no me interesan.
     */

    for (let i = 0; i < arrayUsuarios.length; i++) {
        if (pCorreo === arrayUsuarios[i].correo) {
            existe = true;
            break;
        }
    }

    //retorno el valor
    return existe;

}

//Función para limpiar campos de texto
//Para un campo se pasa valor en un string
//Para más de un campo se pasan los valores en un array
//Distingue entre una array para borrar más de un campo y un string para borrar un campo solo
function limpiarCampos(pParametro) {
    if (typeof pParametro === 'object') {
        for (i = 0; i < pParametro.length; i++) {
            document.getElementById(pParametro[i]).value = '';
        }
    } else if (typeof pParametro === 'string') {
        document.getElementById(pParametro).value = '';
    }

}

//Función para obtener la variable 'tipo' usada para el registro
function obtenerTipo() {
    if (usuarioConectado === undefined || usuarioConectado === null) {
        tipoRegistro = 'huesped';
    } else if (usuarioConectado.tipo === 'admin') {
        tipoRegistro = 'admin';
    }
}

//Función para resetear moneda a $U y criterioOrden a 'Popular'
function reseteoCriteriosYMoneda() {
    if (moneda === 'USD') {
        btnMonedaHandler();
    }

    if (criterioOrden === 'precio') {
        btnHomeFiltrarInmHandler();
    }
}

//Funcion para validar que campo no esté vacio (Nota: Chequeada por San. No encontré errores. 15/11)
function validarCampo(pCadena) {

    let campoValido = false;

    if (pCadena.trim() !== "") {
        campoValido = true;
    }
    return campoValido;
}

//Función para comprobar si correo existe en el array de usuarios
function compararCorreo(pCorreo) {
    let correoEsValido = true;
    let correoAComparar;
    for (let i = 0; i < arrayUsuarios.length; i++) {
        correoAComparar = arrayUsuarios[i].correo;
        if (pCorreo === correoAComparar) {
            correoEsValido = false;
            break;
        }
    }

    return correoEsValido;
}

//Función para validar correo
function validarCorreo(pCorreo) {
    let correoEsValido = false;

    //Llamamos a la función comparar correo y almacenamos en una variable
    let comparacionCorreo = compararCorreo(pCorreo);

    //Me guardo posición de @
    let buscarArroba = pCorreo.indexOf('@');

    //Me guardo posición de . luego de @ y un caracter
    let buscarPunto = pCorreo.indexOf('.', (buscarArroba + 2));

    if (comparacionCorreo //Valida que el correo no exista en la propiedad .correo del array usuarios
        &&
        buscarArroba !== -1 // Valido que exista el arroba en el string
        &&
        buscarPunto !== -1 //Valido que exista el punto luego de el arroba y al menos un caracter
        &&
        buscarPunto < pCorreo.length - 1) { //Valido que la posición del punto no sea la última del string
        correoEsValido = true; //Si pasa todas esas validaciones, es true hasta que se demuestre lo contrario en el for

        for (let i = 0; i < pCorreo.length; i++) {
            //Si llega a haber un espacio, al entrar aqui se vuelve false sin posibilidad de volver a true
            if (pCorreo[i] === ' ') {
                correoEsValido = false;
            }
        }

    }

    return correoEsValido;
}

//Funcion para validar si el celular ingresado contiene solo numeros y total de 8 caracteres
function validarCelular(pCelular) {

    //Se declara variable para guardar si el celular ingresado es valido o no, se inicializa valor como false.
    let celularValido = false;

    //Se verifica si valor ingresado en campo es un numero y tiene un largo de 8 caracteres
    //Si ambas condiciones se cumplen el valor de la variable celularValido pasa a ser true
    //Funcion retorna valor de la variable celularValido
    if (!isNaN(Number(pCelular)) && pCelular.length === 8) {
        celularValido = true;
    }
    return celularValido;
}

//Funcion para validar si la contraseña ingresada tiene al menos 6 caracteres, letras y numeros, y por lo menos una mayuscula
function validarContrasena(pContrasena) {

    //Se declara variable para guardar si la contraseña ingresada es valida o no, se inicializa valor como false
    let contrasenaValida = false;

    //Se declaran variables para contar el numero de letras, numeros y mayusculas ingresadas en la contraseña. Se inicializan valores en 0
    let esLetra = 0;
    let esMayuscula = 0;
    let esNumero = 0;

    //Se recorre la cadena para verificar caracter por caracter, si es letra, numero o mayuscula.
    //En caso de ocurrencia de numero, letra o mayuscula se aumentan los contadores
    for (let i = 0; i < pContrasena.length; i++) {

        let caracter = pContrasena.charAt(i);

        if (isNaN(caracter)) {
            esLetra += 1
        }

        if (caracter !== caracter.toLowerCase()) {
            esMayuscula += 1
        }

        if (!isNaN(caracter)) {
            esNumero += 1
        }
    }

    //Si la contraseña ingresada tiene 6 o mas caracteres, numeros, letras y por lo menos una mayuscula valor de variable contrasenaValida pasa a ser true
    if (pContrasena.length >= 6 && esLetra > 0 && esMayuscula > 0 && esNumero > 0) {
        contrasenaValida = true;
    }

    //Funcion retorna valor de la varible contrasenaValida, que puede ser true o false
    return contrasenaValida;
}

//Funcion que verifica si las dos contraseñas ingresadas son iguales
function validarConfirmarContrasena(pContrasena1, pContrasena2) {

    let contrasenaConfirmada = false;

    if (pContrasena1 === pContrasena2) {
        contrasenaConfirmada = true;
    }
    return contrasenaConfirmada;
}

//Funcion validar numero
function valorNumerico(pNumero) {
    let esNumero;
    if (!isNaN(pNumero)) {
        esNumero = true;
    } else {
        esNumero = false;
    }
    return esNumero;
}

//Función para sumar elementos de un array de números
function sumarArray(pArray) {
    let suma = 0;

    for (i = 0; i < pArray.length; i++) {
        suma += pArray[i];
    }

    return suma;

}

//Función para realizar promedios
function promedio(pSumatoria, pCantidad, pDigitoPosComa) {
    let promedio = 0;

    //Si no hay valores ingresados devolvemos 0, para no dividir entre 0
    if (pCantidad === 0) {
        //Si no hacemos el cálculo correspondiente
    } else {
        promedio = Number((pSumatoria / pCantidad).toFixed(pDigitoPosComa));
    }

    return promedio;
}

//Función para quitar acentos
function quitarAcentos(pTexto) {
    let nuevoTexto = "";

    for (let i = 0; i < pTexto.length; i++) {
        switch (pTexto[i]) {
            case "á":
                nuevoTexto += "a";
                break;
            case "é":
                nuevoTexto += "e";
                break;
            case "í":
                nuevoTexto += "i";
                break;
            case "ó":
                nuevoTexto += "o";
                break;
            case "ú":
                nuevoTexto += "u";
                break;
            case "Á":
                nuevoTexto += "A";
                break;
            case "É":
                nuevoTexto += "E";
                break;
            case "Í":
                nuevoTexto += "I";
                break;
            case "Ó":
                nuevoTexto += "O";
                break;
            case "Ú":
                nuevoTexto += "U";
                break;
            default:
                nuevoTexto += pTexto[i];

        }
    }

    return nuevoTexto;
}

//función que recibe una colección de elementos
//y los oculta
function ocultarElementos(elementos) {
    for (let i = 0; i < elementos.length; i++) {
        let item = elementos[i];
        item.style.display = 'none';
    }
}

//función que recibe una colección de elementos
//y los muestra
function mostrarElementos(elementos) {
    for (let i = 0; i < elementos.length; i++) {
        let item = elementos[i];
        item.style.display = 'block';
    }
}


//Función para ordenar por popularidad
function criterioOrdenPopu(pInmueble1, pInmueble2) {

    let ponderacion;

    if (pInmueble1.promedio > pInmueble2.promedio) {
        ponderacion = -1;
    } else if (pInmueble1.promedio === pInmueble2.promedio) {
        if (pInmueble1.precio > pInmueble2.precio) {
            ponderacion = -1;
        } else {
            ponderacion = 1;
        }
    } else {
        ponderacion = 1;
    }
    return ponderacion;
}

//Función para ordenar por precio
function criterioOrdenPrecio(pInmueble1, pInmueble2) {

    let ponderacion;

    if (pInmueble1.precio > pInmueble2.precio) {
        ponderacion = -1;
    } else if (pInmueble1.precio === pInmueble2.precio) {
        if (pInmueble1.promedio > pInmueble2.promedio) {
            ponderacion = -1;
        } else {
            ponderacion = 1;
        }
    } else {
        ponderacion = 1;
    }
    return ponderacion;
}

//función que recibe un importe del inmueble y retorna el importe en la 
//moneda correspondiente.
function obtenerPrecio(importe) {
    let precioAMostrar;

    //si la moneda es dólares
    if (moneda === "USD") {
        //Hacemos conversión a dolares
        precioAMostrar = (importe / cotizacionDolar).toFixed(2);
    } else {
        //sino es dólares el precio es el dado
        precioAMostrar = importe;
    }
    //retorno precio
    return precioAMostrar;
}

//Funcion para mostrar pantalla. Recibe como parametro la pantalla que se quiere mostrar y oculta las demás
function mostrarPantalla(pPantalla) {

    // Guardo en variable "pantallas", todas las pantallas que tienen el valor "pantalla" en el atributo class del Html
    let pantallas = document.querySelectorAll(".pantalla");

    //Recorro lista donde estan todas las pantallas
    for (let i = 0; i < pantallas.length; i++) {

        //Guardo pantalla ubicada en posicion i en variable p
        let p = pantallas[i];

        //Oculto la pantalla 
        p.style.display = 'none';
    }

    //Muestro apenas pantalla pasada por parametro de la funcion
    document.getElementById(`div${pPantalla}`).style.display = 'block';

}

//************************************************************************************************ */
//VISITANTE Y HUESPED

//Función para armar el muro del visitante y el huésped
function armarMuro(pInmueblesAMostrar) {

    let muroHtml = "";


    if (pInmueblesAMostrar !== 0) {
        arrayInmueblesOrden = pInmueblesAMostrar.slice();
        for (let i = 0; i < arrayInmueblesOrden.length; i++) {

            let inmueble = arrayInmueblesOrden[i];
            inmueble.promedio = promedio(sumarArray(inmueble.calificaciones), inmueble.calificaciones.length, 1);
            switch (criterioOrden) {
                case 'popularidad':
                    arrayInmueblesOrden.sort(criterioOrdenPopu)
                    break;
                case 'precio':
                    arrayInmueblesOrden.sort(criterioOrdenPrecio)
                    break;
            }
        }
    } else {
        arrayInmueblesOrden = [0];
    }


    for (let i = 0; i < arrayInmueblesOrden.length; i++) {
        let inmueble = arrayInmueblesOrden[i];
        if (inmueble.habilitado === true) {
            //Asignamos valor a parametro promedio de la entidad Inmueble

            muroHtml += `<div>
                <h2>${inmueble.titulo}</h2>
                <h4><strong>${moneda} ${obtenerPrecio(inmueble.precio)}</strong> por noche</h4>
                <img src="./assets/img/${inmueble.imagenes[0]}" alt="casa de campo">
                <div>
                    <label><strong>${inmueble.ciudad}</strong></label><label class="duracion">Promedio:
                        <strong>${inmueble.promedio}</strong></label>
                </div>
                <p>${inmueble.descripcion}</p>
                <p class="ver-mas" id="verMas${i}">
                    Ver más...
                </p>
                <hr>
                </div>`
        }
    }




    document.getElementById('divMuro').innerHTML = muroHtml;


    //agregar handler a los "ver mas"
    //selecciono los items ver más
    let itemsVerMas = document.querySelectorAll('.ver-mas');
    //los recorro y cargo el handler 1 a 1
    for (let i = 0; i < itemsVerMas.length; i++) {
        itemsVerMas[i].addEventListener('click', verMasHandler);
    }

    //Borramos cualquier mensaje que pueda haber quedado en el párrafo del filtro de búsqueda
    //cada vez que recargamos el muro
    mostrarMensaje('msgHomeFiltroInmueble', '');

}


//Calificación del Inmueble
function calificacionInmueble(pInmueblesAMostrar) {
    let muroHtml = "";

    if (pInmueblesAMostrar.length > 0) {
        for (let i = ((pInmueblesAMostrar.length) - 1); i >= 0; i--) {

            let inmueble = pInmueblesAMostrar[i].inmueble;

            muroHtml += `<tr>
        <td class="tableColumn"><img src="./assets/img/${inmueble.imagenes[0]}"></td>
        <td class="tableColumn">${inmueble.titulo}</td>
        <td class="tableColumn" id="tdCalificacion${[i]}">
        
        `

            if (pInmueblesAMostrar[i].calificacion === 0) {
                muroHtml += `
            
            <label for="txtCalificacion${[i]}">Calificación</label>
            <input type="text" id="txtCalificacion${[i]}">
            <input type="button" value="Calificar" class="guardarCal" id="btnGuardarCalificacion${[i]}">
            <p id='msgCalificar${[i]}'></p>`
            } else {
                muroHtml += `
            <p>Su calificación fue de ${pInmueblesAMostrar[i].calificacion}</p>`
            }
        }
        document.getElementById('tableCalificacion').innerHTML = muroHtml;
        document.getElementById('msgCalificarReserva').innerText = ``;
    } else {
        document.getElementById('msgCalificarReserva').innerText = `No ha realizado ninguna reserva.`;
    }



    let itemsGuardar = document.querySelectorAll('.guardarCal');
    //los recorro y cargo el handler 1 a 1
    for (let i = 0; i < itemsGuardar.length; i++) {
        itemsGuardar[i].addEventListener('click', guardarCalificacionHandler);
    }
}

//Armar pantalla detalle
//función que arma el detalle del inmueble utilizando la variable global
//inmuebleSeleccionado que se debe cargar al momento de hacer click en ver mas en el muro
function armarGaleria() {
    let muroHtml = "";

    let inmueble = inmuebleSeleccionado;
    //Asignamos valor a parametro promedio de la entidad Inmueble
    inmueble.promedio = promedio(sumarArray(inmueble.calificaciones), inmueble.calificaciones.length, 1);

    muroHtml += `<div>
        <h2>${inmueble.titulo}</h2>
        <h4><strong>${moneda} ${obtenerPrecio(inmueble.precio)}</strong> por noche</h4>
        <div class="galeria">
        <div class="img-container">
        <img src="./assets/img/${inmueble.imagenes[0]}">
        </div> 
        <div class="btn-container">
                <input type="button" value="<<" id="btnGaleriaAnterior"><input class="btn-siguiente" type="button" id="btnGaleriaSiguiente" value=">>"><br>
        </div>       
        </div>
        <div>
            <label><strong>${inmueble.ciudad}</strong></label><label class="duracion">Promedio:
                <strong>${inmueble.promedio}</strong></label>
        </div>
        <p>${inmueble.descripcion}</p>
        <hr>
        <h3>Reserva de inmueble</h3>
        <div id="divReserva">
                    <label for="txtCantidadNoches">Cantidad de noches</label>
                    <input type="text" id="txtCantidadNoches">
                    <input type="button" value="Solicitar" id="btnSolicitar"> <br> <br>
                    <input type="button" value="Reservar" id="btnGuardarReserva">
                    <p id="msgReservaResultado"></p>
                </div>
        </div>`

    document.getElementById('divDetalleInm').innerHTML = muroHtml;

    crearBoton(`btnSolicitar`, btnSolicitarHandler);
    crearBoton(`btnGuardarReserva`, btnGuardarReservaHandler);

    let imgElement = document.querySelector(".galeria .img-container img");

    //modifico el src para que muestre la primera foto
    imgElement.src = `./assets/img/${inmuebleSeleccionado.imagenes[0]}`;

    //marco la variable global de la posición de la foto en la galería con el valor 0
    posicionFotoGaleria = 0;
    //selecciono el elemento img de la galeria

    //clicks de la pantalla de detalle (galería)
    document.getElementById("btnGaleriaAnterior").addEventListener("click", btnGaleriaAnteriorHandler);
    document.getElementById("btnGaleriaSiguiente").addEventListener("click", btnGaleriaSiguienteHandler);

    document.getElementById(`btnGuardarReserva`).style.display = 'none';

}

//************************************************************************************************ */
//ANFITRION

//Inmuebles propios del anfitrion
function misInmuebles(pInmueblesAMostrar) {
    //Llamamos función para cambiar moneda
    if (moneda === 'USD') {
        btnMonedaHandler();
    }

    let muroHtml = "";

    for (let i = 0; i < pInmueblesAMostrar.length; i++) {

        let inmueble = pInmueblesAMostrar[i];
        if (inmueble.anfitrion === usuarioConectado.correo) {
            //Asignamos valor a parametro promedio de la entidad Inmueble
            inmueble.promedio = promedio(sumarArray(inmueble.calificaciones), inmueble.calificaciones.length, 1);

            muroHtml += `<div>
        <h2>${inmueble.titulo}</h2>
        <h4><strong>${moneda} ${obtenerPrecio(inmueble.precio)}</strong> por noche</h4>
        <img src="./assets/img/${inmueble.imagenes[0]}" alt="casa de campo">
        <div>
            <label><strong>${inmueble.ciudad}</strong></label><label class="duracion">Promedio:
                <strong>${inmueble.promedio}</strong></label>
        </div>
        <p>${inmueble.descripcion}</p>
        `
            if (inmueble.habilitado == true) {
                muroHtml += `<input type="button" id="btnHabilitar${i}" class ="btnHabilitar" value="Habililtar" disabled>
            <input type="button" id="btnDeshabilitar${i}" class ="btnDeshabilitar" value="Deshabilitar">
            <hr>
            </div>`
            } else {
                muroHtml += `<input type="button" id="btnHabilitar${i}" class ="btnHabilitar" value="Habililtar">
            <input type="button" id="btnDeshabilitar${i}" class ="btnDeshabilitar" value="Deshabilitar" disabled>
            <hr>
            </div>`
            }
        }





    }

    document.getElementById('divMisInm').innerHTML = muroHtml;

    let botonesDeshabilitar = document.querySelectorAll('.btnDeshabilitar');
    let botonesHabilitar = document.querySelectorAll('.btnHabilitar');


    for (let i = 0; i < botonesHabilitar.length; i++) {

        btnHabilitar = botonesHabilitar[i];
        btnHabilitar.addEventListener('click', btnHabInmuebleHandler);
    }


    for (let i = 0; i < botonesDeshabilitar.length; i++) {

        btnDeshabilitar = botonesDeshabilitar[i];
        btnDeshabilitar.addEventListener('click', btnDesInmuebleHandler);
    }


}

// Función para cambiar propiedad del inmueble a habilitado
function btnHabInmuebleHandler() {
    posicion = Number(this.id.substr(12));
    //Habilitamos el inmueble al presionar el botón
    arrayInmuebles[posicion].habilitado = true;
    //Deshabilitamos el botón de habilitar
    document.getElementById(`btnHabilitar${posicion}`).disabled = true;
    //Habilitamos el botón de deshabilitar
    document.getElementById(`btnDeshabilitar${posicion}`).disabled = false;
}

// Función para cambiar propiedad del inmueble a Deshabilitado
function btnDesInmuebleHandler() {
    posicion = Number(this.id.substr(15));
    //Deshabilitamos inmueble al presionar botón
    arrayInmuebles[posicion].habilitado = false;
    //Deshabilitamos botón de deshabilitar
    document.getElementById(`btnDeshabilitar${posicion}`).disabled = true;
    //Habilitamos botón de habilitar
    document.getElementById(`btnHabilitar${posicion}`).disabled = false;
}

//************************************************************************************************ */
//ADMIN

//Reporte de inmuebles
function reporteInm(pInmueblesAMostrar) {
    let muroHtml = "";

    if (pInmueblesAMostrar !== 0) {
        for (let i = 0; i < pInmueblesAMostrar.length; i++) {
            let inmueble = pInmueblesAMostrar[i];
            if (inmueble.habilitado === true) {
                //Asignamos valor a parametro promedio de la entidad Inmueble

                muroHtml += `<tr>
                <td class="tableColumn"><img src="./assets/img/${inmueble.imagenes[0]}"></td>
                <td class="tableColumn">${inmueble.titulo}</td>
                <td class="tableColumn">${moneda} ${obtenerPrecio(inmueble.precio)}</td>
                </tr>`
            }
        }
    } else {
        pInmueblesAMostrar = [0];
    }



    document.getElementById('tableReporte').innerHTML = muroHtml;
}