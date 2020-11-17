//archivo para precarga de datos
//este array se va a crear cada vez que comience mi aplicación
//son los datos que siempre van a existir al inicio.

//Declaro e inicializo un array de usuarios
let arrayUsuarios = [];

arrayUsuarios.push(new Usuario('Santiago', 'Migues', 'admin', 94591928, '1234', 'admin'));
arrayUsuarios.push(new Usuario('Agustina', 'Cola', 'agustina@gmail.com', 91497055, 'Abc123', 'anfitrion'));
arrayUsuarios.push(new Usuario('Fernanda', 'Mayer', 'fernanda@gmail.com', 91689277, 'Abc123', 'huesped'));


//Declaro e inicializo un array de inmuebles
let arrayInmuebles = [];

//Creamos inmuebles precargados
arrayInmuebles.push(new Inmueble('Casa de playa', 'Amplia casa a dos cuadras del mar', 'La Floresta', 2, ['Casa3.jpeg','Casa2.jpeg'], 'agustina@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa de campo', 'Rancho amplio terreno', 'Atlantida', 200, ['Casa1.jpeg','Casa5.jpeg'], 'agustina@gmail.com'));

//array global para el array de archivo de fotos para los inmuebles
let arrayImagenes = ['Casa1.jpeg','Casa2.jpeg','Casa3.jpeg','Casa4.jpeg','Casa5.jpeg','Casa6.jpeg','Casa7.jpeg'];

//array global para ir guardando las fotos seleccionadas al momento del alta del inmueble
let imagenesSeleccionadas = [];

//variable global para guardar la posición de la imagen en el array de fotos del inmueble que se está mostrando
let posicionFotoGaleria;

//Variable global para guardar la referencia al objeto correspondiente
//al usuario que hace log in
let usuarioConectado;

//variable global para la moneda
let moneda = 'USD';

//variable global para la cotización
let cotizacionDolar = 43;

//variable global tipo que utilizamos en registro
let tipo = '';


//variable global para el orden del muro

let criterioOrden = "popularidad";