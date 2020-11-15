iniciarApp()



//Definimos las variables globales que vayamos a utilizar

//**************************************************************************************************************

//FUNCION PARA INICIAR LA APP
function iniciarApp() {
    armarMuro(arrayInmuebles);
    //utilizo la función que controla las pantallas para mostrar la de home
    mostrarPantalla('Home')

    //preparo clicks a los links de la pantalla de Registro, Login, Home y Cerrar sesión
    crearBoton('aInicio', aInicioHandler);
    crearBoton('aLogin', aLoginHandler);
    crearBoton('aRegistrarse', aRegistroHandler);
    crearBoton('aCerrarSesion', aCerrarSesionHandler);


    //preparo clicks a las opciones de usuario huesped
    crearBoton('aInmueblesHuesped', aInmueblesHuespedHandler);
    crearBoton('aConsultaCalificacion', aConsultaCalificacionHandler);

    //preparo clicks a las opciones de usuario anfitrion
    crearBoton('aMisInmueblesAnf', aMisInmueblesAnfHandler);
    crearBoton('aRegistroInmueble', aRegistroInmuebleHandler);

    //preparo clicks a las opciones de usuario admin
    crearBoton('aAltaAnfitrion', aAltaAnfitrionHandler);
    crearBoton('aCargaCotizacion', aCargaCotizacionHandler);
    crearBoton('aReporteInmuebles', aReporteInmueblesHandler);

    //Oculto las opciones que solo tienen los usuarios logueados
    document.getElementById('anfOp1').style.display = 'none';
    document.getElementById('anfOp2').style.display = 'none';
    document.getElementById('huespOp1').style.display = 'none';
    document.getElementById('huespOp2').style.display = 'none';
    document.getElementById('adminOp1').style.display = 'none';
    document.getElementById('adminOp2').style.display = 'none';
    document.getElementById('adminOp3').style.display = 'none';


    //preparo clicks de los botones de la pantalla de Registro, Login
    crearBoton('btnLogin', btnLoginHandler);
    crearBoton('btnRegistroHuesped', bntRegistroHuespedHandler);

    //Oculto los links a cerrar sesión y el inicio
    document.getElementById('aCerrarSesion').style.display = 'none';
    document.getElementById('aInicio').style.display = 'none';

    //Selecciono todos los ver mas
    let verMas = document.querySelectorAll('.ver-mas')
    
    //Los oculto
    ocultarElementos(verMas)


    //clicks filtros y monedas
    /* document.getElementById("btnHomeFiltro").addEventListener("click", btnHomeFiltroHandler); */
    document.querySelector(".label-moneda").addEventListener("click", labelMonedaHandler);


}

//**************************************************************************************************************

//FUNCION PARA MOSTRAR PANTALLA
/**
 * Esta función recibe un parámetro con el string de la pantalla a mostrar.
 * Oculta las demás y muestra la correspondiente
 */
function mostrarPantalla(pPantalla) {
    //Observar en el index.html que todos los divs que corresponden a pantallas (por ej divLogin)
    //tienen como atributo class la palabra "pantalla". Esto me sirve para poder seleccionarlos en grupo desde
    //la lógica.
    let pantallas = document.querySelectorAll(".pantalla");

    //para cada una de las pantallas, modifico su display para ocultarlas
    for (let i = 0; i < pantallas.length; i++) {
        let p = pantallas[i];
        p.style.display = "none";
    }
    //utilizo el valor de pPantalla para concatenarlo al prefijo div, para seleccionar
    //el div correspondiente y mostrarlo
    document.getElementById(`div${pPantalla}`).style.display = "block";
}

//Variable global para guardar la referencia al objeto correspondiente
//al usuario que hace log in
let usuarioConectado;

//**************************************************************************************************************

//ACCESO A LA PANTALLA LOGIN
function aLoginHandler() {

    //Muestro la pantalla de login y escondo el home
    mostrarPantalla('Login');

    document.getElementById('aInicio').style.display = 'block';
    document.getElementById('aLogin').style.display = 'none';
    document.getElementById('aRegistrarse').style.display = 'block';
}

//**************************************************************************************************************

//ACCESO A LA PANTALLA DE INICIO
function aInicioHandler() {

    mostrarPantalla('Home');

    document.getElementById('aInicio').style.display = 'none';
    document.getElementById('aLogin').style.display = 'block';
    document.getElementById('aRegistrarse').style.display = 'block';
}

//**************************************************************************************************************

//ACCESO A LA PANTALLA DE REGISTRO HUESPED
function aRegistroHandler() {

    mostrarPantalla('Registro');


    //Esconder links de acceso
    document.getElementById('aInicio').style.display = 'Block';
    document.getElementById('aLogin').style.display = 'block';
    document.getElementById('aRegistrarse').style.display = 'none';

    //Escondo lo que indicaría registro el alta de anfitrion
    document.getElementById('tituloAltaAnfitrion').style.display = 'none';
    document.getElementById('btnAltaAnfitrion').style.display = 'none';

}

//**************************************************************************************************************

//PANTALLA DE LOGIN DE LA APP


//función de login
function btnLoginHandler() {

    //tomo valor del correo del login
    let txtCorreo = document.getElementById('txtLoginCorreo').value;

    //tomo valor del password del login
    let txtPassword = document.getElementById('txtLoginPassword').value;

    //recorro el array de usuarios
    for (let i = 0; i < arrayUsuarios.length; i++) {

        //guardo en una variable local a la repetitiva
        //la referencia al usuario en la posición i del array
        let u = arrayUsuarios[i];

        //si coincide correo, password y el usuario está activo
        if (u.correo === txtCorreo && u.password === txtPassword && u.activo) {
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
    if (usuarioConectado === undefined || usuarioConectado === null) {
        //mensaje de error
        mostrarMensaje('msgLogin', 'Usuario y/o password incorrectos');
        //limpiamos campos de texto para que usuario vuelva a ingresar
        limpiarCampos('txtLoginCorreo', 'txtLoginPassword');
    } else {
        switch (usuarioConectado.tipo) {
            case 'admin':
                pantallasAdmin();
                break;
            case 'anfitrion':
                pantallasAnfitrion();
                break;
            case 'huesped':
                pantallasHuesped();
                break;
        }

        //Utilizo esto para recolocar las opciones
        document.getElementById('aux').style.padding = '0 24px 10px 0';

        //Elimino las opciones del área pública
        document.getElementById('aInicio').style.display = 'none';
        document.getElementById('aLogin').style.display = 'none';
        document.getElementById('aRegistrarse').style.display = 'none';

        //Muestro el cerrar sesión
        document.getElementById('aCerrarSesion').style.display = 'block';

    }


}

//******************************************************************************************************************

//REGISTRO HUESPED

function bntRegistroHuespedHandler() {

    //Muestro la pantalla de registro y escondo pantalla home
    document.getElementById('divRegistro').style.display = 'block';
    document.getElementById('divHome').style.display = 'none';

    document.getElementById('aInicio').style.display = 'block';
    document.getElementById('aRegistrarse').style.display = 'none';

    let nombre = document.getElementById('txtNombre').value
    let apellido = document.getElementById('txtApellido').value
    let correo = document.getElementById('txtCorreo').value
    let celular = document.getElementById('txtCelular').value
    let password = document.getElementById('txtPassword').value
    let password2 = document.getElementById('txtConfPassword').value
    let tipo = "huesped";


    if (validarCampo(nombre)) {
        if (validarCampo(apellido)) {
            if (validarCelular(celular)) {
                if (validarContrasena(password)) {
                    if (validarConfirmarContrasena(password, password2)) {

                        document.getElementById('msgRegistro').innerText = `Registro exitoso`;
                        arrayUsuarios.push(new Usuario(nombre, apellido, correo, celular, password, tipo))

                    } else {

                        document.getElementById('txtConfPassword').value = "";
                        mostrarMensaje('msgRegistro', 'Contraseñas no coinciden');
                    }
                } else {
                    mostrarMensaje('msgRegistro', 'La contraseña debe contener por lo menos 6 carácteres, letres y números y por lo menos una letra mayúscula');
                }
            } else {
                mostrarMensaje('msgRegistro', 'Celular inválido');
            }
        } else {
            mostrarMensaje('msgRegistro', 'Apellido inválido');
        }
    } else {
        mostrarMensaje('msgRegistro', 'Nombre inválido');
    }
}



/*************************************************************************************************************************************************** */

//PANTALLA DE REGISTRO DE INMUEBLE


crearBoton('btnGuardarInmueble', btnGuardarInmuebleHandler);

function btnGuardarInmuebleHandler() {

    let titulo = document.getElementById('txtInmTitulo').value;
    let descripcion = document.getElementById('txtInmDescripción').value;
    let ciudad = document.getElementById('txtInmCiudad').value;
    let precio = document.getElementById('txtInmPrecio').value;
    let imagenes = [];
    let anfitrion = usuarioConectado;




    if (validarCampo(titulo) && validarCampo(descripcion) && validarCampo(ciudad) && validarCampo(precio)) {

        mostrarMensaje('msgRegInmueble', 'Registro de inmueble exitoso');
        arrayInmuebles.push(new Inmueble(titulo, descripcion, ciudad, precio, imagenes, anfitrion))

    } else {

        mostrarMensaje('msgRegInmueble', 'Campos obligatorios');
    }
}




/******************************************************************************* */


//ALTA DE ANFITRION


crearBoton('btnAltaAnfitrion', btnAltaAnfitrionHandler);

function btnAltaAnfitrionHandler() {

    let nombre = document.getElementById('txtNombre').value;
    let apellido = document.getElementById('txtApellido').value;
    let correo = document.getElementById('txtCorreo').value;
    let celular = document.getElementById('txtCelular').value;
    let password = document.getElementById('txtPassword').value;
    let password2 = document.getElementById('txtConfPassword').value;
    let tipo = "anfitrion";


    if (validarCampo(nombre) === true) {
        if (validarCampo(apellido) === true) {
            if (validarCelular(celular)) {
                if (validarContrasena(password)) {
                    if (validarConfirmarContrasena(password, password2)) {

                        document.getElementById('msgRegistro').innerText = `Registro exitoso`;
                        arrayUsuarios.push(new Usuario(nombre, apellido, correo, celular, password, tipo))

                    } else {
                        mostrarMensaje('msgRegistro', 'Contraseñas no coinciden');
                    }
                } else {
                    mostrarMensaje('msgRegistro', 'La contraseña debe contener por lo menos 6 carácteres, letras y números y por lo menos una letra mayúscula');
                }
            } else {
                mostrarMensaje('msgRegistro', 'Celular inválido');
            }
        } else {
            mostrarMensaje('msgRegistro', 'Apellido inválido');
        }
    } else {
        mostrarMensaje('msgRegistro', 'Nombre inválido');
    }
}

//**************************************************************************************************************

//FILTRO DOLAR PESOS

//función que recibe un importe del inmueble y retorna el importe en la 
//moneda correspondiente.
function obtenerPrecio(importe) {
    let precioAMostrar;

    //si la moneda es dólares
    if (moneda === "USD") {
        //es el mismo precio
        precioAMostrar = importe;
    } else {
        //sino es dólares el precio es importe * corización
        precioAMostrar = importe * cotizacionDolar;
    }
    //retorno precio
    return precioAMostrar;
}

//función del handler del cambio de moneda
function labelMonedaHandler() {
    //me guardo la moneda anterior (string)
    let monedaAnterior = moneda;

    //si la actual es dólares
    if (moneda === "USD") {
        //cambio a pesos
        moneda = "$U";
    } else {
        //cambio a dólares
        moneda = "USD";
    }

    armarMuro(arrayInmuebles);

    //modifico la etiqueta para volver a la moneda anterior
    document.querySelector(".label-moneda").innerText = "Cambiar a " + monedaAnterior;
}


//**************************************************************************************************************

//CERRAR SESIÓN

function aCerrarSesionHandler() {
    iniciarApp();

    document.getElementById('aLogin').style.display = 'block';
    document.getElementById('aRegistrarse').style.display = 'block';
    document.getElementById('aCerrarSesion').style.display = 'none';


    usuarioConectado = null;
}

/******************************************************************************* */


//ACCESO DE HUÉSPED

function pantallasHuesped() {

    mostrarPantalla('Home');
    //Selecciono todos los ver mas
    let verMas = document.querySelectorAll('.ver-mas')
    //Los muestro
    mostrarElementos(verMas);
    document.getElementById('anfOp1').style.display = 'block';
    document.getElementById('anfOp2').style.display = 'block';


}

/******************************************************************************* */

//MENÚ DE HUÉSPED

function aInmueblesHuespedHandler() {
    mostrarPantalla('Home');
    armarMuro(arrayInmuebles);
}

function aConsultaCalificacionHandler() {
    mostrarPantalla('ConsultarCalificar');
    calificacionInmueble(usuarioConectado.reservas)
}


/******************************************************************************* */

//ACCESO DE ANFITRION

function pantallasAnfitrion() {
    aMisInmueblesAnfHandler();

    document.getElementById('huespOp1').style.display = 'block';
    document.getElementById('huespOp2').style.display = 'block';
}

/******************************************************************************* */

//MENÚ DE ANFITRION

function aMisInmueblesAnfHandler() {
    mostrarPantalla('MisInmuebles');
    mostrarInmueblesAnf();
}

function aRegistroInmuebleHandler() {
    mostrarPantalla('RegistroInmueble');
}

/******************************************************************************* */

//ACCESO DE ADMIN

function pantallasAdmin() {

    mostrarPantalla('Registro');

    //Escondo lo que indicaría registro de huesped
    document.getElementById('tituloRegistroHuesped').style.display = 'none';
    document.getElementById('btnRegistroHuesped').style.display = 'none';

    document.getElementById('adminOp1').style.display = 'block';
    document.getElementById('adminOp2').style.display = 'block';
    document.getElementById('adminOp3').style.display = 'block';
}

/******************************************************************************* */

//MENÚ DE ADMIN

function aAltaAnfitrionHandler() {
    mostrarPantalla('Registro');

    document.getElementById('tituloRegistroHuesped').style.display = 'none';
    document.getElementById('btnRegistroHuesped').style.display = 'none';
}

function aCargaCotizacionHandler() {
    mostrarPantalla('CargaCotizacion');
    document.getElementById('msgActualizacion').innerHTML = '';
}

function aReporteInmueblesHandler() {
    mostrarPantalla('ReporteInmuebles');
}

/******************************************************************************* */

//FUNCION PARA ACTUALIZAR COTIZACIÓN

crearBoton('btnActualizarDolar', btnActualizarDolarHandler);

function btnActualizarDolarHandler() {
    let nuevoDolar = document.getElementById('txtUSD').value;

    if (valorNumerico(nuevoDolar)) {
        cotizacionDolar = Number(nuevoDolar);
        mostrarMensaje('msgActualizacion', 'Cotización actualizada correctamente');
        document.getElementById('txtUSD').value = '';
    } else {
        mostrarMensaje('msgActualizacion', 'Valor inválido')
    }
}


//Funcion para filtrar vista de inmuebles en el muro segun busqueda del usuario
crearBoton('btnHomeFiltrar', btnHomeFiltrarInmueblesHandler);


function btnHomeFiltrarInmueblesHandler() {

    let valorFiltro = quitarAcentos(document.getElementById('txtHomeFiltrar').value.toLowerCase());
    let inmueblesFiltrados = [];
    let mensaje = '';

    if (validarCampo(valorFiltro)) {

        for (let i = 0; i < arrayInmuebles.length; i++) {

            let inmueble = arrayInmuebles[i];
            if (inmueble.titulo.toLowerCase().indexOf(valorFiltro) !== -1) {
                inmueblesFiltrados.push(inmueble)
            }
        }
        if (inmueblesFiltrados.length > 0) {
            armarMuro(inmueblesFiltrados);
        } else {

            for (let i = 0; i < arrayInmuebles.length; i++) {

                let inmueble = arrayInmuebles[i];

                if (inmueble.ciudad.toLowerCase().indexOf(valorFiltro) !== -1) {
                    inmueblesFiltrados.push(inmueble)
                }
            }

            if (inmueblesFiltrados.length > 0) {
                armarMuro(inmueblesFiltrados);
            } else {

                for (let i = 0; i < arrayInmuebles.length; i++) {

                    let inmueble = arrayInmuebles[i];

                    if (inmueble.descripcion.toLowerCase().indexOf(valorFiltro) !== -1) {
                        inmueblesFiltrados.push(inmueble)
                    }
                }

                if (inmueblesFiltrados.length > 0) {
                    armarMuro(inmueblesFiltrados);
                } else {
                    mensaje = 'No se encontraron resultados';
                    armarMuro(0);
                }
            }

        }


    } else {
        mensaje = 'Debe ingresar criterio de búsqueda';
        armarMuro(arrayInmuebles);
    }
    document.getElementById('msgHomeFiltroInmueble').innerText = mensaje;
}




//Funcion para mostrar inmuebles propios de cada anfitrion

function mostrarInmueblesAnf() {

    let inmueblesAMostrar = [];

    for (let i = 0; i < arrayInmuebles.length; i++) {

        let inmueble = arrayInmuebles[i]


        if (inmueble.anfitrion === usuarioConectado.correo) {
            inmueblesAMostrar.push(inmueble);
        }
        misInmuebles(inmueblesAMostrar);
    }

}

//****************************************************************************** */
//DETALLE



//handler del botón anterior de la galería
function btnGaleriaAnteriorHandler() {

    //en la variable global posicionFotoGalería tengo guardada en número del índice
    //de la foto que estoy mostrando actualmente en la galería.

    //si la posción es distinta a 0 (pues no puedo mostrar la foto -1)
    if (posicionFotoGaleria !== 0) {
        //selecciono el elemento imagen
        let imgElement = document.querySelector(".galeria .img-container img");
        //disminuyo el valor de la posición;
        posicionFotoGaleria--;

        //modifico el src de la imagen con la nueva foto tomandola del array de las fotos
        //del auto seleccionado;
        imgElement.src = `./assets/img/${inmuebleSeleccionado.imagenes[posicionFotoGaleria]}`;
    }
}

//handle del botón siguiente de la galeraía
function btnGaleriaSiguienteHandler() {

    //si no estoy parado en la última foto
    if (posicionFotoGaleria !== inmuebleSeleccionado.imagenes.length - 1) {

        //tomo el elemento foto de la galería
        let imgElement = document.querySelector(".galeria .img-container img");

        //aumento la posición de la foto para la siguiente
        posicionFotoGaleria++;

        //modifico el src del a foto con la siguiente imagen del auto seleccionado
        imgElement.src = `./assets/img/${inmuebleSeleccionado.imagenes[posicionFotoGaleria]}`;
    }
}

//handler de todos los botones ver más
function verMasHandler() {
    //con el id del ver más apretado tomo el substring correspondiente
    //a la posición del auto que quiero mostrar en detalle
    let posInm = Number(this.id.substr(6));

    //cargo la variable global
    inmuebleSeleccionado = arrayInmuebles[posInm];
    //armo detalle
    armarGaleria();
    //lo muestro
    mostrarPantalla('Detalles')
}

/******************************************************************************* */
//RESERVAS

function btnGuardarReservaHandler(){

    let cantNoches = document.getElementById('txtCantidadNoches').value;

    if (valorNumerico(cantNoches) && validarCampo(cantNoches) && cantNoches > 0){
        usuarioConectado.reservas.push(new Reserva(cantNoches,inmuebleSeleccionado));

        document.getElementById('msgReservaResultado').innerHTML = `Todo legal`
    } else {
        document.getElementById('msgReservaResultado').innerHTML = `Noches inválidas`
    }
}


/******************************************************************************* */
//GUARDAR CALIFICACION
function guardarCalificacionHandler(){
    let posInm = Number(this.id.substr(22));
    let calificacionIngresada = document.getElementById(`txtCalificacion${posInm}`).value;

    if (valorNumerico(calificacionIngresada) && validarCampo(calificacionIngresada) && calificacionIngresada >= 1 && calificacionIngresada <= 5){
        usuarioConectado.reservas[posInm].calificacion = Number(calificacionIngresada);
        inmuebleSeleccionado.calificaciones.push(Number(calificacionIngresada));
        document.getElementById(`divCalificacion${posInm}`).innerHTML = `<p>Su calificación fue de ${calificacionIngresada}</p>`
    }
}