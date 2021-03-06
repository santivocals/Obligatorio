//COMENTARIO


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

    //Botón que realiza el registro de huésped o de anfitrion
    crearBoton('btnRegistro', btnRegistroHandler);

    //Preparo botones de filtros visitante y huesped
    crearBoton('btnHomeFiltrar', btnHomeFiltrarInmueblesHandler); //Buscador
    crearBoton('btnHomeFiltrarInm', btnHomeFiltrarInmHandler); //Filtro popularidad/precio


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

    //Preparo botones de anfitrión
    crearBoton('btnAltaImagen', btnAltaImagenHandler); //Agregar imagen
    crearBoton('btnGuardarInmueble', btnGuardarInmuebleHandler); //Guardar inmueble

    //Preparo botones de admin
    crearBoton('btnActualizarDolar', btnActualizarDolarHandler); //cotización
    crearBoton('btnFiltroMontos', btnFiltroMontosHandler) //Filtro monto para reportes

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
    crearBoton('btnCambiarMoneda', btnMonedaHandler);


}

//**************************************************************************************************************

//ACCESO A LA PANTALLA LOGIN
function aLoginHandler() {

    //Muestro la pantalla de login
    mostrarPantalla('Login');

    document.getElementById('aLogin').style.display = 'none';

    document.getElementById('aInicio').style.display = 'block';
    document.getElementById('aRegistrarse').style.display = 'block';
    document.getElementById('msgLogin').innerText = '';

}

//**************************************************************************************************************

//ACCESO A LA PANTALLA DE INICIO
function aInicioHandler() {
    //Llamamos función para cambiar criterioOrden y moneda
    reseteoCriteriosYMoneda();

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
    //Pasamos funcion para dar valor a variable tipoRegistro usada en el registro
    obtenerTipo();

    document.getElementById('tituloRegistro').innerHTML = `<h3 id="tituloRegistroHuesped">Registro de Huéspedes</h3>`
    document.getElementById('btnRegistro').innerHTML = `<td></td> <td><input type="button" value="Registrar" id="btnRegistro"></input></td>`;

    mostrarPantalla('Registro');

    document.getElementById('aRegistrarse').style.display = 'none';

    //Muestro links de acceso
    document.getElementById('aInicio').style.display = 'block';
    document.getElementById('aLogin').style.display = 'block';


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

        //Llamamos función para cambiar criterioOrden y moneda
        reseteoCriteriosYMoneda();

        //Pasamos funcion para dar valor a variable tipoRegistro usada en el registro
        obtenerTipo();

    }

}

//******************************************************************************************************************

//REGISTRO HUÉSPED Y ALTA DE ANFITRIÓN



//Función para guardar datos en un Objeto (Registro Huésped/Alta Anfitrión)
function btnRegistroHandler() {

    //REGISTRO HUESPED
    //If para cuando usuario es undefined o null para registrar huésped
    if (usuarioConectado === undefined || usuarioConectado === null) {
        document.getElementById('divRegistro').style.display = 'block';
        document.getElementById('divHome').style.display = 'none';

        document.getElementById('aInicio').style.display = 'block';
        document.getElementById('aRegistrarse').style.display = 'none';
    }

    //CÓDIGO COMÚN A AMBOS REGISTROS
    //Nota: Recordamos que la variable global 'tipoRegistro' se asigna cuando admin se loguea o cuando huesped entra a menú de "Registrarse"

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
                            arrayUsuarios.push(new Usuario(nombre, apellido, correo, celular, password, tipoRegistro))
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

/******************************************************************************* */


//ACCESO DE HUÉSPED

function pantallasHuesped() {
    armarMuro(arrayInmuebles);

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

//MENÚ DE HUÉSPED

function aInmueblesHuespedHandler() {
    mostrarPantalla('Home');
    armarMuro(arrayInmueblesOrden);
}

function aConsultaCalificacionHandler() {
    mostrarPantalla('ConsultarCalificar');
    calificacionInmueble(usuarioConectado.reservas)
}

//Funcion para filtrar vista de inmuebles en el muro segun busqueda del usuario huésped o visitante
function btnHomeFiltrarInmueblesHandler() {

    let valorFiltro = quitarAcentos(document.getElementById('txtHomeFiltrar').value.toLowerCase());
    let inmueblesFiltrados = [];
    let mensaje = '';

    if (validarCampo(valorFiltro)) {

        for (let i = 0; i < arrayInmuebles.length; i++) {

            let inmueble = arrayInmuebles[i];
            if (inmueble.habilitado == true) {
                if (inmueble.titulo.toLowerCase().indexOf(valorFiltro) !== -1) {
                    inmueblesFiltrados.push(inmueble)
                } else if (inmueble.ciudad.toLowerCase().indexOf(valorFiltro) !== -1) {
                    inmueblesFiltrados.push(inmueble)
                } else if (inmueble.descripcion.toLowerCase().indexOf(valorFiltro) !== -1) {
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
    } else {
        mensaje = 'Debe ingresar criterio de búsqueda';
        armarMuro(arrayInmuebles);
    }

    document.getElementById('msgHomeFiltroInmueble').innerText = mensaje;
    limpiarCampos('txtHomeFiltrar');
    if (usuarioConectado == null || usuarioConectado == undefined) {
        //Selecciono todos los ver mas
        let verMas = document.querySelectorAll('.ver-mas')

        //Los oculto
        ocultarElementos(verMas)
    }


}

//Función para filtrar por popularidad o precio los inmuebles, para huéspd o visitante
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
    if (usuarioConectado == null || usuarioConectado == undefined) {
        //Selecciono todos los ver mas
        let verMas = document.querySelectorAll('.ver-mas')

        //Los oculto
        ocultarElementos(verMas)
    }

}

//Función para cambiar la moneda de dolares a pesos y viceversa
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
    
    if (usuarioConectado == null || usuarioConectado == undefined) {
        //Selecciono todos los ver mas
        let verMas = document.querySelectorAll('.ver-mas')

        //Los oculto
        ocultarElementos(verMas)
    }


    //modifico la etiqueta para volver a la moneda anterior
    document.getElementById("btnCambiarMoneda").value = `Cambiar a ${monedaAnterior}`;
}

//DETALLE INMUEBLE PARA HUÉSPED

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

//RESERVAS INMUEBLE PARA HUÉSPED

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

//GUARDAR CALIFICACION INMUEBLES PARA HUÉSPED
function guardarCalificacionHandler() {
    let posGuardar = Number(this.id.substr(22));
    let calificacionIngresada = document.getElementById(`txtCalificacion${posGuardar}`).value;

    if (valorNumerico(calificacionIngresada) && validarCampo(calificacionIngresada) && calificacionIngresada >= 1 && calificacionIngresada <= 5) {
        //Pasamos parámetro de califacion a la reserva
        usuarioConectado.reservas[posGuardar].calificacion = Number(calificacionIngresada);

        calificacionInmueble(usuarioConectado.reservas)
        //Ingresamos calificacion al inmueble seleccionado
        usuarioConectado.reservas[posGuardar].inmueble.calificaciones.push(Number(calificacionIngresada));

        //Ingresamos el promedio al mueble seleccionado
        usuarioConectado.reservas[posGuardar].inmueble.promedio = promedio(sumarArray(usuarioConectado.reservas[posGuardar].inmueble.calificaciones), usuarioConectado.reservas[posGuardar].inmueble.calificaciones.length, 1);
        //Cambiamos el atributo de la reserva .calificado a true
        usuarioConectado.reservas[posGuardar].calificado = true;
        //Mensaje de éxito
        document.getElementById(`tdCalificacion${posGuardar}`).innerHTML = `<p>Su calificación fue de ${calificacionIngresada}</p>`

    } else {
        document.getElementById(`msgCalificar${posGuardar}`).innerHTML = `<p>Ingrese un numero entre 1 y 5</p>`
        limpiarCampos(`txtCalificacion${posGuardar}`);
    }

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

//MENÚ DE ANFITRION

//VER MIS INMUEBLES ANFITRIÓN
function aMisInmueblesAnfHandler() {
    mostrarPantalla('MisInmuebles');
    misInmuebles(arrayInmuebles);
}

//REGISTRO DE INMUEBLES ANFITRIÓN
function aRegistroInmuebleHandler() {
    mostrarPantalla('RegistroInmueble');
    //Dejo párrafo vacío por si quedó info del registro anterior
    mostrarMensaje('msgRegInmueble', '');
}

//No habilitamos el botón de guardar hasta que usuario ingrese al menos 3 fotos
if (imagenesSeleccionadas.length < 3) {
    document.getElementById('btnGuardarInmueble').disabled = true;
}

//MODÚLO PARA AGREGAR IMAGENES EN REGISTRO INMUEBLE
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


        if (imagenesSeleccionadas.length < 3) {
            //Notificamos a usuario cuantos fotos quedan por cargar mínimo.
            mostrarMensaje('msgAltaImagenes', `${imagenesSeleccionadas.join(", ")} ha(n) sido cargada(s). Resta(n) al menos ${3 - imagenesSeleccionadas.length} imagen(es) más.`);
        } else {
            mostrarMensaje('msgAltaImagenes', `${imagenesSeleccionadas.join(", ")} ha(n) sido cargada(s).`);
            //Habilitamos botón para poder guardar el inmueble
            document.getElementById('btnGuardarInmueble').disabled = false;
        }
    } else {
        //sino aviso que esa imagen ya fue seleccionada
        mostrarMensaje('msgAltaImagenes', 'Esta imagen ya ha sido seleccionada')
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
    if (validarCampo(titulo) && validarCampo(descripcion) && validarCampo(ciudad)) {
        if (valorNumerico(precio) && precio > 0) {
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
            mostrarMensaje('msgRegInmueble', 'Por favor ingrese un valor numerico mayor a 0 en el precio por noche.');
        }

    } else {
        //Muestro mensaje de error
        mostrarMensaje('msgRegInmueble', 'Debe completar todos los campos');
    }

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

    //Reseteamos cada vez que entra por si admin realizó un fitro de búsqueda
    //Limpiamos campos de búsqueda
    let arrayCampos = ['txtMontoDesde', 'txtMontoHasta'];
    limpiarCampos(arrayCampos);
    //Limpiamos párrafo
    mostrarMensaje('msgResultadoFiltroMonto', '');
    //Volvemos a armar muro
    reporteInm(arrayInmuebles);
    document.getElementById('tituloReportes').style.display = 'block';
}

//FUNCION PARA ACTUALIZAR COTIZACIÓN

function btnActualizarDolarHandler() {
    let nuevoDolar = document.getElementById('txtUSD').value;

    if (valorNumerico(nuevoDolar) && validarCampo(nuevoDolar) && nuevoDolar > 0) {
        cotizacionDolar = Number(nuevoDolar);
        mostrarMensaje('msgActualizacion', 'Cotización actualizada correctamente');
        document.getElementById('txtUSD').value = '';
    } else {
        mostrarMensaje('msgActualizacion', 'Valor inválido')
    }
}

//FUNCIÓN PARA FILTRAR POR MONTO LOS REPORTES
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
        reporteInm(inmueblesFiltrados);
        mensaje = `${inmueblesFiltrados.length} resultado(s) encontrado(s)`
        document.getElementById('tituloReportes').style.display = 'block';
    } else {
        mensaje = 'No existen resultados para su búsqueda';
        reporteInm(0)
        document.getElementById('tituloReportes').style.display = 'none';
    }

    document.getElementById('msgResultadoFiltroMonto').innerText = mensaje;

}

//**************************************************************************************************************

//CERRAR SESIÓN

function aCerrarSesionHandler() {

    //Llamamos función para cambiar criterioOrden y moneda
    reseteoCriteriosYMoneda();

    iniciarApp();

    document.getElementById('aLogin').style.display = 'block';
    document.getElementById('aRegistrarse').style.display = 'block';
    document.getElementById('aCerrarSesion').style.display = 'none';

    //Reseteamos los valores
    usuarioConectado = null;

}