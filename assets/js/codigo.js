//Definimos las variables globales que vayamos a utilizar

//Variable para guardar cotización dada por el Admin
let cotizacion = 0;

//Variable global para guardar la referencia al objeto correspondiente
//al usuario que hace log in
let usuarioConectado;

//**************************************************************************************************************

//PANTALLA DE LOGIN DE LA APP

//Creamos botón
crearBoton('btnLogin', btnLoginHandler);

//función de login
function btnLoginHandler () {

    //tomo valor del correo del login
    let txtCorreo = document.getElementById('txtLoginCorreo').value;

    //tomo valor del password del login
    let txtPassword = document.getElementById('txtLoginPassword').value;
    
    //recorro el array de usuarios
    for(let i = 0; i < arrayUsuarios.length; i++){

        //guardo en una variable local a la repetitiva
        //la referencia al usuario en la posición i del array
        let u = arrayUsuarios[i];

        //si coincide correo, password y el usuario está activo
        if(u.correo === txtCorreo && u.password === txtPassword && u.activo) {
            //guardo en la variable global la referencia a ese objeto del array
            //esto es importante porque al igualar esta referencia
            //tanto la variable usuarioConectado como la posición i del array
            //apuntan al mismo objeto en memoria y este implica que los cambios
            //en el objeto al cual apunta usuarioConectado se "reflejarán" en el array
            usuarioConectado = u

            //break para cortar la repetitiva
            break;
        }
        
    }

    //si usuarioConectado se mantiene undefined
    if(usuarioConectado === undefined) {
        //mensaje de error
        mostrarMensaje('msgLogin','Usuario y/o password incorrectos');
        //limpiamos campos de texto para que usuario vuelva a ingresar
        limpiarCampos('txtLoginCorreo', 'txtLoginPassword');  
    } else {
        //POR AHORA MUESTRO MENSAJE DE CONFIRMACIÓN DE LOGIN LUEGO...
        //LUEGO LIMPIAMOS EL PARRAFO Y DAMOS PASO A LA OTRA PANTALLA
        //mostrarMensaje('msgLogin','');
        mostrarMensaje('msgLogin','Login correcto');
    }


}

//IMPORTANTE: NO OLVIDAR AL PROGRAMAR EL CIERRE DE SESIÓN DAR VALOR 'NULL' A LA VARIABLE GLOBAL 'usuarioConectado'

//******************************************************************************************************************




