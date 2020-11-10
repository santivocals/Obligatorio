//archivo para precarga de datos
//este array se va a crear cada vez que comience mi aplicación
//son los datos que siempre van a existir al inicio.


//Creamos usuarios precargados
let usuarioAdmin = new Usuario('Santiago', 'Migues', 'admin', '1234', 94591928, 'admin');
let usuarioAnfitrion1 = new Usuario('Agustina', 'Cola', 'agustina@gmail.com', 'Abc123', 91497055, 'anfitrion');
let usuarioHuesped1 = new Usuario('Fernanda', 'Mayer', 'fernanda@gmail.com', 'Abc123', 91689277, 'huesped');

//Declaro e inicializo un array de usuarios
let arrayUsuarios = [usuarioAdmin, usuarioAnfitrion1, usuarioHuesped1];

//Creamos inmuebles precargados
let inmueble1 = new Inmueble('Casa de playa', 'Amplia casa a dos cuadras del mar', 'La Floresta', 1500, 'agustina@ort.com');

//Declaro e inicializo un array de inmuebles
let arrayInmuebles = [inmueble1];
