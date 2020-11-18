//archivo para precarga de datos
//este array se va a crear cada vez que comience mi aplicación
//son los datos que siempre van a existir al inicio.

//Declaro e inicializo un array de usuarios
let arrayUsuarios = [];

//Cargo usuarios
//usuario admin
arrayUsuarios.push(new Usuario('Santiago', 'Migues', 'admin', 94591928, '1234', 'admin'));

//usuarios anfitriones (5)
arrayUsuarios.push(new Usuario('Agustina', 'Cola', 'agustina@gmail.com', 91497055, 'Abc123', 'anfitrion'));
arrayUsuarios.push(new Usuario('Anfitrion', '2', 'anf2@gmail.com', 92222222, 'Abc123', 'anfitrion'));
arrayUsuarios.push(new Usuario('Anfitrion', '3', 'anf3@gmail.com', 93333333, 'Abc123', 'anfitrion'));
arrayUsuarios.push(new Usuario('Anfitrion', '4', 'anf4@gmail.com', 94444444, 'Abc123', 'anfitrion'));
arrayUsuarios.push(new Usuario('Anfitrion', '5', 'anf5@gmail.com', 95555555, 'Abc123', 'anfitrion'));

//usuarios huéspedes (10)
arrayUsuarios.push(new Usuario('Fernanda', 'Mayer', 'fernanda@gmail.com', 91689277, 'Abc123', 'huesped'));
arrayUsuarios.push(new Usuario('Huesped', '2', 'huesp2@gmail.com', 91689277, 'Abc123', 'huesped'));
arrayUsuarios.push(new Usuario('Huesped', '3', 'huesp3@gmail.com', 91689277, 'Abc123', 'huesped'));
arrayUsuarios.push(new Usuario('Huesped', '4', 'huesp4@gmail.com', 91689277, 'Abc123', 'huesped'));
arrayUsuarios.push(new Usuario('Huesped', '5', 'huesp5@gmail.com', 91689277, 'Abc123', 'huesped'));
arrayUsuarios.push(new Usuario('Huesped', '6', 'huesp6@gmail.com', 91689277, 'Abc123', 'huesped'));
arrayUsuarios.push(new Usuario('Huesped', '7', 'huesp7@gmail.com', 91689277, 'Abc123', 'huesped'));
arrayUsuarios.push(new Usuario('Huesped', '8', 'huesp8@gmail.com', 91689277, 'Abc123', 'huesped'));
arrayUsuarios.push(new Usuario('Huesped', '9', 'huesp9@gmail.com', 91689277, 'Abc123', 'huesped'));
arrayUsuarios.push(new Usuario('Huesped', '10', 'huesp10@gmail.com', 91689277, 'Abc123', 'huesped'));


//Declaro e inicializo un array de inmuebles
let arrayInmuebles = [];

//Creamos inmuebles precargados
arrayInmuebles.push(new Inmueble('Casa de playa', 'Amplia casa a dos cuadras del mar', 'La Floresta', 20, ['Casa3.jpeg','Casa2.jpeg'], 'agustina@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa de campo', 'Rancho amplio terreno', 'Atlantida', 200, ['Casa1.jpeg','Casa5.jpeg'], 'anf2@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa 3', 'Rancho amplio dfsdf', 'Atlantasdida', 10, ['Casa2.jpeg','Casa5.jpeg'], 'agustina@gmail.com'));

//Declaro e inicializo un array para guardar la copia de inmuebles
let arrayInmueblesOrden = [];

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
let moneda = '$U';

//variable global para la cotización
let cotizacionDolar = 43;

//variable global tipo que utilizamos en registro
let tipo = '';

//variable global para el orden del muro
let criterioOrden = 'popularidad';