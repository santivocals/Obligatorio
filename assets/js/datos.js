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
arrayInmuebles.push(new Inmueble('Casa de playa', 'Amplia casa a dos cuadras del mar', 'La Floresta', 2000, ['Casa 3.jpeg'], 'agustina@gmail.com', [3,7], 10))

//variable global para la moneda
let moneda = 'USD'
//variable global para la cotización
let cotizacionDolar = 43;

