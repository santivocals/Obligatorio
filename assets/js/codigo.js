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
    /* document.getElementById('anfOp1').style.display = 'none';
    document.getElementById('anfOp2').style.display = 'none';
    document.getElementById('huespOp1').style.display = 'none';
    document.getElementById('huespOp2').style.display = 'none';
    document.getElementById('adminOp1').style.display = 'none';
    document.getElementById('adminOp2').style.display = 'none';
    document.getElementById('adminOp3').style.display = 'none'; */
    //Selecciono todos los ver mas
    let menus = document.querySelectorAll('.menu')

    //Los oculto
    ocultarElementos(menus)


    //preparo clicks de la pantalla de Login
    crearBoton('btnLogin', btnLoginHandler);

    //Oculto los links a cerrar sesión y el inicio
    document.getElementById('aCerrarSesion').style.display = 'none';
    document.getElementById('aInicio').style.display = 'none';

    //Selecciono todos los ver mas
    let verMas = document.querySelectorAll('.ver-mas')

    //Los oculto
    ocultarElementos(verMas)


    //clicks filtros y monedas
    /* document.getElementById("btnHomeFiltro").addEventListener("click", btnHomeFiltroHandler); */
    document.getElementById("btnCambiarMoneda").addEventListener("click", btnMonedaHandler);


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
    //Recargo el muro cada vez que entro por si previamente ser realizó algún filtro
    armarMuro(arrayInmuebles);

    mostrarPantalla('Home');

    document.getElementById('aInicio').style.display = 'none';
    document.getElementById('aLogin').style.display = 'block';
    document.getElementById('aRegistrarse').style.display = 'block';
}

//**************************************************************************************************************

//ACCESO A LA PANTALLA DE REGISTRO HUESPED
function aRegistroHandler() {
    //Limpiamos parrafo de mensaje por si quedó de algún registro previo
    mostrarMensaje('msgRegistro', '');
    //Pasamos funcion para dar valor a variable 'tipo' usada en el registro
    obtenerTipo();
    //Preparo dinámicamente el botón de alta y título del html Registro de huéspedes
    document.getElementById('tituloRegistro').innerHTML = `<h3 id="tituloRegistroHuesped">Registro de Huéspedes</h3>`
    document.getElementById('btnRegistro').innerHTML = `<td></td> <td><input type="button" value="Registrar" id="btnRegistro"></input></td>`;

    mostrarPantalla('Registro');

    //Esconder links de acceso
    document.getElementById('aInicio').style.display = 'block';
    document.getElementById('aLogin').style.display = 'block';
    document.getElementById('aRegistrarse').style.display = 'none';

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

    //Creo un array con los Ids de los campos que quiero borrar
    let arrayDeIds = ['txtLoginCorreo', 'txtLoginPassword'];

    //si usuarioConectado se mantiene undefined o null
    if (usuarioConectado === undefined || usuarioConectado === null) {
        //mensaje de error
        mostrarMensaje('msgLogin', 'Usuario y/o password incorrectos');
        //limpiamos campos de texto para que usuario vuelva a ingresar
        limpiarCampos(arrayDeIds);
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

        //limpiamos campos de texto
        limpiarCampos(arrayDeIds);

        //Pasamos funcion para dar valor a variable tipo usada en el registro
        obtenerTipo();

    }

}

//******************************************************************************************************************

//REGISTRO HUÉSPED Y ALTA DE ANFITRIÓN

//Asociamos clicks al botón correspondiente
crearBoton('btnRegistro', bntRegistroHandler);

//Función para guardar datos en un Objeto (Registro Huésped/Alta Anfitrión)
function bntRegistroHandler() {

    //REGISTRO HUESPED
    //If para cuando usuario es undefined o null para registrar huésped
    if (usuarioConectado === undefined || usuarioConectado === null) {
        document.getElementById('divRegistro').style.display = 'block';
        document.getElementById('divHome').style.display = 'none';

        document.getElementById('aInicio').style.display = 'block';
        document.getElementById('aRegistrarse').style.display = 'none';
    }

    //CÓDIGO COMÚN A AMBOS REGISTROS
    //Nota: Recordamos qque la variable global 'tipo' se asigna cuando admin se loguea o cuando huesped entra a menú de "Registrarse"

    let nombre = document.getElementById('txtNombre').value;
    let apellido = document.getElementById('txtApellido').value;
    let correo = document.getElementById('txtCorreo').value;
    let celular = document.getElementById('txtCelular').value;
    let password = document.getElementById('txtPassword').value;
    let password2 = document.getElementById('txtConfPassword').value;
    //Creo array con los ids de los campos para luego utilizar función para borrarlos
    let arrayDeIds = ['txtNombre', 'txtApellido', 'txtCorreo', 'txtCelular', 'txtPassword', 'txtConfPassword'];


    if (validarCampo(nombre)) {
        if (validarCampo(apellido)) {
            if (validarCorreo(correo)) {
                if (validarCelular(celular)) {
                    if (validarContrasena(password)) {
                        if (validarConfirmarContrasena(password, password2)) {
                            arrayUsuarios.push(new Usuario(nombre, apellido, correo, celular, password, tipo))
                            limpiarCampos(arrayDeIds);
                            document.getElementById('msgRegistro').innerText = `Registro exitoso`;
                        } else {
                            mostrarMensaje('msgRegistro', 'Contraseñas no coinciden');
                            limpiarCampos('txtConfPassword');
                            document.getElementById('txtConfPassword').focus();
                        }
                    } else {
                        mostrarMensaje('msgRegistro', 'La contraseña debe contener por lo menos 6 carácteres, letras y números y por lo menos una letra mayúscula');
                        limpiarCampos('txtPassword');
                        document.getElementById('txtPassword').focus();
                    }
                } else {
                    mostrarMensaje('msgRegistro', 'Celular inválido');
                    limpiarCampos('txtCelular');
                    document.getElementById('txtCelular').focus();
                }
            } else {
                mostrarMensaje('msgRegistro', 'Ingrese un correo válido');
                limpiarCampos('txtCorreo');
                document.getElementById('txtCorreo').focus();
            }
        } else {
            mostrarMensaje('msgRegistro', 'Debe completar todos los campos');
            limpiarCampos('txtApellido');
            document.getElementById('txtApellido').focus();
        }
    } else {
        mostrarMensaje('msgRegistro', 'Debe completar todos los campos');
        limpiarCampos('txtNombre');
        document.getElementById('txtNombre').focus();

    }

}

//****************************************************************************************************************** */

//PANTALLA DE REGISTRO DE INMUEBLE

crearBoton('btnGuardarInmueble', btnGuardarInmuebleHandler);

//No habilitamos el botón de guardar hasta que usuario ingrese al menos 3 fotos
if (imagenesSeleccionadas.length < 3) {
    document.getElementById('btnGuardarInmueble').disabled = true;
}

//MODÚLO PARA AGREGAR IMAGENES EN REGISTRO INMUEBLE

//Ceamos botón para dar alta a las imagenes
crearBoton('btnAltaImagen', btnAltaImagenHandler);
//función que arma automáticamente el selector para agregar imágenes
armarSelectorImagenes();

//función para armar el selector de imágenes en el Registro de inmueble
function armarSelectorImagenes() {
    //voy acumulando el html de las options
    let options = "";

    //ver en datos.js un array llamado arrayImagenes que es un array de strings,
    //con los nombres de las fotos en la carpeta ./assets/img
    for (let i = 0; i < arrayImagenes.length; i++) {
        //para cada foto armo un option
        options += `<option value='${arrayImagenes[i]}'>${arrayImagenes[i]}</option>`;
    }
    //las agrego al selector
    document.getElementById("slcAltaImagenes").innerHTML = options;
}

//handle del agregar imágen en Registro de inmueble
function btnAltaImagenHandler() {

    //selecciono el value de la option seleccionada del selector (nombre del archivo)
    let imagenSeleccionada = document.getElementById("slcAltaImagenes").value;

    //si esa foto no está en el array de seleccionadas
    if (imagenesSeleccionadas.indexOf(imagenSeleccionada) === -1) {
        //agrego la foto al array global de imágenes seleccionadas
        imagenesSeleccionadas.push(imagenSeleccionada);
    } else {
        //sino aviso que esa imagen ya fue seleccionada
        mostrarMensaje('msgAltaImagenes', 'Esta imagen ya ha sido seleccionada')
    }

    if (imagenesSeleccionadas.length < 3) {
        //Notificamos a usuario cuantos fotos quedan por cargar mínimo.
        mostrarMensaje('msgAltaImagenes', `${imagenesSeleccionadas.join(", ")} ha(n) sido cargada(s). Resta(n) al menos ${3 - imagenesSeleccionadas.length} imagen(es) más.`);
    } else {
        mostrarMensaje('msgAltaImagenes', `${imagenesSeleccionadas.join(", ")} ha(n) sido cargada(s).`);
        //Habilitamos botón para poder guardar el inmueble
        document.getElementById('btnGuardarInmueble').disabled = false;
    }

}

function btnGuardarInmuebleHandler() {
    //Datos del inmueble
    let titulo = document.getElementById('txtInmTitulo').value;
    let descripcion = document.getElementById('txtInmDescripción').value;
    let ciudad = document.getElementById('txtInmCiudad').value;
    let precio = document.getElementById('txtInmPrecio').value;
    let anfitrion = usuarioConectado.correo;
    //Creo array con los ids de los campos para luego utilizar función para borrarlos
    let arrayDeIds = ['txtInmTitulo', 'txtInmDescripción', 'txtInmCiudad', 'txtInmPrecio'];

    //Valido los campos
    if (validarCampo(titulo) && validarCampo(descripcion) && validarCampo(ciudad) && valorNumerico(precio)) {
        //Instancia para nuevo inmueble y le asigno los parametros correspondientes
        let inmuebleNuevo = new Inmueble(titulo, descripcion, ciudad, precio, imagenesSeleccionadas, anfitrion);
        //Lo agrego al array de inmuebles
        arrayInmuebles.push(inmuebleNuevo);
        //Muestro mensaje de Registro exitoso
        mostrarMensaje('msgRegInmueble', 'Registro de inmueble exitoso');
        //vacío el array de imágenes seleccionadas
        imagenesSeleccionadas = [];
        //Utlizo función para borrar los campos
        limpiarCampos(arrayDeIds);
        //Limpiamos parrafo imagenes
        mostrarMensaje('msgAltaImagenes', '');
        //Vuelvo a deshabilitar botón de guardar
        document.getElementById('btnGuardarInmueble').disabled = true;
        //Rearmamos el selector
        armarSelectorImagenes();
    } else {
        //Muestro mensaje de error
        mostrarMensaje('msgRegInmueble', 'Debe completar todos los campos');
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
function btnMonedaHandler() {
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
    document.getElementById("btnCambiarMoneda").value = `Cambiar a ${monedaAnterior}`;
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

    //Selecciono los menú del huesped
    let menuHuesp = document.querySelectorAll('.menuHuesp')
    //Los muestro
    mostrarElementos(menuHuesp);

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

     //Selecciono los menú del anfitrión
     let menuAnf = document.querySelectorAll('.menuAnf')
     //Los muestro
     mostrarElementos(menuAnf);
}

/******************************************************************************* */

//MENÚ DE ANFITRION

function aMisInmueblesAnfHandler() {
    mostrarPantalla('MisInmuebles');
    mostrarInmueblesAnf();
}

function aRegistroInmuebleHandler() {
    mostrarPantalla('RegistroInmueble');
    //Dejo párrafo vacío por si quedó info del registro anterior
    mostrarMensaje('msgRegInmueble', '');
}

/******************************************************************************* */

//ACCESO DE ADMIN

function pantallasAdmin() {
    //Preparo Registro Administrador
    //Preparo dinámicamente el botón de alta y título del html altaAnfitrión
    document.getElementById('tituloRegistro').innerHTML = `<h3 id="tituloAltaAnfitrion">Alta de anfitrión</h3>`
    document.getElementById('btnRegistro').innerHTML = `<td></td> <td><input type="button" value="Alta anfitrión" id="btnRegistro"></input></td>`;
    //Limpiamos parrafo de mensaje por si quedó de algún registro previo
    mostrarMensaje('msgRegistro', '');

    mostrarPantalla('Registro');

    //Selecciono los menú del admin
    let menuAdmin = document.querySelectorAll('.menuAdmin')
    //Los muestro
    mostrarElementos(menuAdmin);

}

/******************************************************************************* */

//MENÚ DE ADMIN

function aAltaAnfitrionHandler() {
    mostrarPantalla('Registro');

    //Limpiamos acá también parrafo de mensaje por si quedó de algún registro previo
    mostrarMensaje('msgRegistro', '');
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
            mensaje = `${inmueblesFiltrados.length} resultado(s) encontrado(s)`
        } else {

            for (let i = 0; i < arrayInmuebles.length; i++) {

                let inmueble = arrayInmuebles[i];

                if (inmueble.ciudad.toLowerCase().indexOf(valorFiltro) !== -1) {
                    inmueblesFiltrados.push(inmueble)
                }
            }

            if (inmueblesFiltrados.length > 0) {
                armarMuro(inmueblesFiltrados);
                mensaje = `${inmueblesFiltrados.length} resultado(s) encontrado(s)`
            } else {

                for (let i = 0; i < arrayInmuebles.length; i++) {

                    let inmueble = arrayInmuebles[i];

                    if (inmueble.descripcion.toLowerCase().indexOf(valorFiltro) !== -1) {
                        inmueblesFiltrados.push(inmueble)
                    }
                }

                if (inmueblesFiltrados.length > 0) {
                    armarMuro(inmueblesFiltrados);
                    mensaje = `${inmueblesFiltrados.length} resultado(s) encontrado(s)`
                } else {
                    mensaje = 'No existen resultados para su búsqueda';
                    armarMuro(0);
                }
            }

        }


    } else {
        mensaje = 'Debe ingresar criterio de búsqueda';
        armarMuro(arrayInmuebles);
    }

    document.getElementById('msgHomeFiltroInmueble').innerText = mensaje;
    limpiarCampos('txtHomeFiltrar');
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
    inmuebleSeleccionado = arrayInmueblesOrden[posInm];
    //armo detalle
    armarGaleria();
    //lo muestro
    mostrarPantalla('Detalles')
}

/******************************************************************************* */
//RESERVAS

let cantNoches;
let precioTotal;

function btnSolicitarHandler() {
    cantNoches = document.getElementById('txtCantidadNoches').value;
    precioTotal = Number(cantNoches) * inmuebleSeleccionado.precio;
    document.getElementById('btnGuardarReserva').style.display = 'block';
    if (valorNumerico(cantNoches) && validarCampo(cantNoches) && cantNoches > 0) {
        document.getElementById('msgReservaResultado').innerHTML = `Precio total: ${moneda} ${precioTotal}`;
    } else {
        document.getElementById('msgReservaResultado').innerHTML = `Noche(s) inválidas`;
        document.getElementById('btnGuardarReserva').style.display = 'none';

    }

    limpiarCampos('txtCantidadNoches');
}


function btnGuardarReservaHandler() {
    usuarioConectado.reservas.push(new Reserva(cantNoches, inmuebleSeleccionado, precioTotal));
    document.getElementById('msgReservaResultado').innerHTML = `Reserva exitosa`;
    document.getElementById('btnGuardarReserva').style.display = 'none';

}




/******************************************************************************* */
//GUARDAR CALIFICACION
function guardarCalificacionHandler() {
    let posGuardar = Number(this.id.substr(22));
    let calificacionIngresada = document.getElementById(`txtCalificacion${posGuardar}`).value;

    if (valorNumerico(calificacionIngresada) && validarCampo(calificacionIngresada) && calificacionIngresada >= 1 && calificacionIngresada <= 5) {
        //Pasamos parámetro de califacion a la reserva
        usuarioConectado.reservas[posGuardar].calificacion = Number(calificacionIngresada);

        calificacionInmueble(usuarioConectado.reservas)
        //Ingresamo calificacion al inmueble seleccionado
        usuarioConectado.reservas[posGuardar].inmueble.calificaciones.push(Number(calificacionIngresada));

        //Ingresamos el promedio al mueble seleccionado
        usuarioConectado.reservas[posGuardar].inmueble.promedio = promedio(sumarArray(usuarioConectado.reservas[posGuardar].inmueble.calificaciones), usuarioConectado.reservas[posGuardar].inmueble.calificaciones.length, 1);
        //Cambiamos el atributo de la reserva .calificado a true
        usuarioConectado.reservas[posGuardar].calificado = true;
        //Mensaje de éxito
        document.getElementById(`tdCalificacion${posGuardar}`).innerHTML = `<p>Su calificación fue de ${calificacionIngresada}</p>`
        
    }
    
}

/******************************************************************************** */

//Función para obtener la variable 'tipo' usada para el registro
function obtenerTipo() {
    if (usuarioConectado === undefined || usuarioConectado === null) {
        tipo = 'huesped';
    } else if (usuarioConectado.tipo === 'admin') {
        tipo = 'admin';
    }
}

//********************************************************************* */
crearBoton('btnFiltroMontos', btnFiltroMontosHandler)

function btnFiltroMontosHandler() {
    let montoDesde = (document.getElementById('txtMontoDesde').value).trim();
    let montoHasta = (document.getElementById('txtMontoHasta').value).trim();

    let inmueblesFiltrados = [];
    let mensaje = '';

    for (let i = 0; i < arrayInmuebles.length; i++) {

        let inmueble = arrayInmuebles[i];
        if (montoDesde === '' && montoHasta === '') {
            inmueblesFiltrados.push(inmueble)

        } else if (valorNumerico(montoDesde) && montoHasta === '') {

            if (inmueble.precio >= Number(montoDesde)) {
                inmueblesFiltrados.push(inmueble)
            }

        } else if (montoDesde === '' && valorNumerico(montoHasta)) {

            if (inmueble.precio <= Number(montoHasta)) {
                inmueblesFiltrados.push(inmueble)
            }

        } else if (valorNumerico(montoDesde) && valorNumerico(montoHasta)) {

            if (inmueble.precio >= Number(montoDesde) && inmueble.precio <= Number(montoHasta)) {
                inmueblesFiltrados.push(inmueble)
            }
        }

    }
    if (inmueblesFiltrados.length > 0) {
        armarMuro(inmueblesFiltrados);
        mensaje = `${inmueblesFiltrados.length} resultado(s) encontrado(s)`
    } else {
        mensaje = 'No existen resultados para su búsqueda';
        armarMuro(0);
    }

    document.getElementById('msgResultadoFiltroMonto').innerText = mensaje;

}


crearBoton('btnHomeFiltrarInm', btnHomeFiltrarInmHandler);

function btnHomeFiltrarInmHandler() {

    let criterio = document.getElementById('btnHomeFiltrarInm').value;

    if (criterio === "Filtrar por popularidad") {
        document.getElementById('btnHomeFiltrarInm').value = "Filtrar por precio";
        criterioOrden = "popularidad";
        
    } else {
        document.getElementById('btnHomeFiltrarInm').value = "Filtrar por popularidad";
        criterioOrden = "precio";
    }

    armarMuro(arrayInmuebles);
    if (usuarioConectado == null){
         //Selecciono todos los ver mas
    let verMas = document.querySelectorAll('.ver-mas')

    //Los oculto
    ocultarElementos(verMas)
    }
   
}