//Función auxiliar que recibe un id de un input tipo botón y un handler y lo crea
function crearBoton(pIdBoton, pHandler) {
    document.getElementById(pIdBoton).addEventListener('click', pHandler);
}

//Función auxiliar que recibe un id de un parrafo y un mensaje y lo muestra.
function mostrarMensaje(pIdParrafo, pMensaje) {
    document.getElementById(pIdParrafo).innerText = pMensaje;
}

/**
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

    for (let i = 0; i < arrayUsuarios.length ; i++) {
        if(pCorreo === arrayUsuarios[i].correo) {
            existe = true;
            break;
        }
    }

    //retorno el valor
    return existe;

}

//Función para limpiar campos de texto
function limpiarCampos(pIdCampo1, pIdCampo2) {
    document.getElementById(pIdCampo1).value = ''
    document.getElementById(pIdCampo2).value = '';
}