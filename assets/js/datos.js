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
arrayInmuebles.push(new Inmueble('Chalet con piscina', 'Amplio chalet con piscina y parrillero', 'La Floresta', 200, ['CasaH_1.jpg', 'CasaH_2.jpg', 'CasaH_3.jpg'], 'agustina@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa de campo', 'Rancho amplio terreno', 'Atlantida', 450, ['CasaB_1.jpg', 'CasaB_2.jpg', 'CasaB_3.jpg'], 'anf2@gmail.com'));
arrayInmuebles.push(new Inmueble('Amplia casa arbolada', 'Amplia casa arbolada a cuadras de la playa', 'Punta del Diablo', 660, ['CasaC_1.jpg', 'CasaC_2.jpg', 'CasaC_3.jpg'], 'agustina@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa en barrio tranquilo', 'Amplia casa de dos pisos', 'Punta del este', 420, ['CasaD_1.jpg', 'CasaD_2.jpg', 'CasaD_3.jpg'], 'agustina@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa en barrio tranquilo', 'Amplia casa de dos pisos', 'La Paloma', 400, ['CasaE_1.jpg', 'CasaE_2.jpg', 'CasaE_3.jpg'], 'agustina@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa en barrio tranquilo', 'Amplia casa de dos pisos', 'La Coronilla', 530, ['CasaF_1.jpg', 'CasaF_2.jpg', 'CasaF_3.jpg'], 'agustina@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa en barrio tranquilo', 'Amplia casa de dos pisos', 'Aguas Dulces', 280, ['CasaG_1.jpg', 'CasaG_2.jpg', 'CasaG_3.jpg'], 'agustina@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa en barrio tranquilo', 'Amplia casa de dos pisos', 'Manantiales', 300, ['CasaH_1.jpg', 'CasaH_2.jpg', 'CasaH_3.jpg'], 'agustina@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa en barrio tranquilo', 'Amplia casa de dos pisos', 'San Ignacio', 590, ['CasaI_1.jpg', 'CasaI_2.jpg', 'CasaI_3.jpg'], 'agustina@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa de piedra', 'Amplia casa con terreno', 'Valizas', 550, ['CasaJ_1.jpg', 'CasaJ_2.jpg', 'CasaJ_3.jpg'], 'agustina@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa en barrio tranquilo', 'Amplia casa de dos pisos', 'Costa Azul', 700, ['CasaK_1.jpg', 'CasaK_2.jpg', 'CasaK_3.jpg'], 'agustina@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa en barrio tranquilo', 'Amplia casa de dos pisos', 'Punta ballena', 580, ['CasaL_1.jpg', 'CasaL_2.jpg', 'CasaL_3.jpg'], 'agustina@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa en barrio tranquilo', 'Amplia casa de dos pisos', 'Las Flores', 570, ['CasaM_1.jpg', 'CasaM_2.jpg', 'CasaM_3.jpg'], 'agustina@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa en barrio tranquilo', 'Amplia casa de dos pisos', 'Guazuvirá', 560, ['CasaN_1.jpg', 'CasaN_2.jpg', 'CasaN_3.jpg'], 'agustina@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa en barrio tranquilo', 'Amplia casa de dos pisos', 'Punta del Diablo', 450, ['CasaR_1.jpg', 'CasaR_2.jpg', 'CasaR_3.jpg'], 'agustina@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa en barrio tranquilo', 'Amplia casa de dos pisos', 'La Pedrera', 650, ['CasaR_1.jpg', 'CasaR_2.jpg', 'CasaR_3.jpg'], 'agustina@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa en barrio tranquilo', 'Amplia casa de dos pisos', 'Atlantida', 480, ['CasaS_1.jpg', 'CasaS_2.jpg', 'CasaS_3.jpg'], 'agustina@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa en barrio tranquilo', 'Amplia casa de dos pisos', 'Punta del Diablo', 350, ['CasaT_1.jpg', 'CasaT_2.jpg', 'CasaT_3.jpg'], 'agustina@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa en barrio tranquilo', 'Amplia casa de dos pisos', 'Aguas Dulces', 630, ['CasaX_1.jpg', 'CasaX_2.jpg', 'CasaZ_3.jpg'], 'agustina@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa en la colina', 'Comoda casa en barrio tranquilo', 'Manantiales', 600, ['CasaZ_1.jpg', 'CasaZ_2.jpg', 'CasaZ_3.jpg'], 'agustina@gmail.com'));









//Declaro e inicializo un array para guardar la copia de inmuebles
let arrayInmueblesOrden = [];

//Calificaciones
arrayInmuebles[0].calificaciones = [3,2];
arrayInmuebles[1].calificaciones = [1,2];

//array global para el array de archivo de fotos para los inmuebles
let arrayImagenes = [];
arrayImagenes.push('CasaA_1.jpg', 'CasaA_2.jpg', 'CasaA_3.jpg');
arrayImagenes.push('CasaB_1.jpg', 'CasaB_2.jpg', 'CasaB_3.jpg');
arrayImagenes.push('CasaC_1.jpg', 'CasaC_2.jpg', 'CasaC_3.jpg');
arrayImagenes.push('CasaD_1.jpg', 'CasaD_2.jpg', 'CasaD_3.jpg');
arrayImagenes.push('CasaE_1.jpg', 'CasaE_2.jpg', 'CasaE_3.jpg');
arrayImagenes.push('CasaF_1.jpg', 'CasaF_2.jpg', 'CasaF_3.jpg');
arrayImagenes.push('CasaG_1.jpg', 'CasaG_2.jpg', 'CasaG_3.jpg');
arrayImagenes.push('CasaH_1.jpg', 'CasaH_2.jpg', 'CasaH_3.jpg');
arrayImagenes.push('CasaI_1.jpg', 'CasaI_2.jpg', 'CasaI_3.jpg');
arrayImagenes.push('CasaJ_1.jpg', 'CasaJ_2.jpg', 'CasaJ_3.jpg');
arrayImagenes.push('CasaK_1.jpg', 'CasaK_2.jpg', 'CasaK_3.jpg');
arrayImagenes.push('CasaL_1.jpg', 'CasaL_2.jpg', 'CasaL_3.jpg');
arrayImagenes.push('CasaM_1.jpg', 'CasaM_2.jpg', 'CasaM_3.jpg');
arrayImagenes.push('CasaN_1.jpg', 'CasaN_2.jpg', 'CasaN_3.jpg');
arrayImagenes.push('CasaO_1.jpg', 'CasaO_2.jpg', 'CasaO_3.jpg');
arrayImagenes.push('CasaP_1.jpg', 'CasaP_2.jpg', 'CasaP_3.jpg');
arrayImagenes.push('CasaQ_1.jpg', 'CasaQ_2.jpg', 'CasaQ_3.jpg');
arrayImagenes.push('CasaR_1.jpg', 'CasaR_2.jpg', 'CasaR_3.jpg');
arrayImagenes.push('CasaS_1.jpg', 'CasaS_2.jpg', 'CasaS_3.jpg');
arrayImagenes.push('CasaT_1.jpg', 'CasaT_2.jpg', 'CasaT_3.jpg');
arrayImagenes.push('CasaX_1.jpg', 'CasaX_2.jpg', 'CasaX_3.jpg');
arrayImagenes.push('CasaZ_1.jpg', 'CasaZ_2.jpg', 'CasaZ_3.jpg');





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