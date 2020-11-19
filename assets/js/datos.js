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
arrayInmuebles.push(new Inmueble('Casa de playa', 'Amplia casa a dos cuadras del mar', 'La Floresta', 20, ['CasaA_1.jpeg', 'CasaA_2.jpeg', 'CasaA_3.jpeg'], 'agustina@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa de campo', 'Rancho amplio terreno', 'Atlantida', 200, ['CasaB_1.jpeg', 'CasaB_2.jpeg', 'CasaB_3.jpeg'], 'anf2@gmail.com'));
arrayInmuebles.push(new Inmueble('Casa 3', 'Rancho amplio dfsdf', 'Atlantasdida', 10, ['CasaC_1.jpeg', 'CasaC_2.jpeg', 'CasaC_3.jpeg'], 'agustina@gmail.com'));

//Declaro e inicializo un array para guardar la copia de inmuebles
let arrayInmueblesOrden = [];

//Calificaciones
arrayInmuebles[0].calificaciones = [3,2];
arrayInmuebles[1].calificaciones = [1,2];

//array global para el array de archivo de fotos para los inmuebles
let arrayImagenes = [];
arrayImagenes.push('CasaA_1.jpeg', 'CasaA_2.jpeg', 'CasaA_3.jpeg');
arrayImagenes.push('CasaB_1.jpeg', 'CasaB_2.jpeg', 'CasaB_3.jpeg');
arrayImagenes.push('CasaC_1.jpeg', 'CasaC_2.jpeg', 'CasaC_3.jpeg');
arrayImagenes.push('CasaD_1.jpeg', 'CasaD_2.jpeg', 'CasaD_3.jpeg');
arrayImagenes.push('CasaE_1.jpeg', 'CasaE_2.jpeg', 'CasaE_3.jpeg');
arrayImagenes.push('CasaF_1.jpeg', 'CasaF_2.jpeg', 'CasaF_3.jpeg');
arrayImagenes.push('CasaG_1.jpeg', 'CasaG_2.jpeg', 'CasaG_3.jpeg');
arrayImagenes.push('CasaH_1.jpeg', 'CasaH_2.jpeg', 'CasaH_3.jpeg');
arrayImagenes.push('CasaI_1.jpeg', 'CasaI_2.jpeg', 'CasaI_3.jpeg');
arrayImagenes.push('CasaJ_1.jpeg', 'CasaJ_2.jpeg', 'CasaJ_3.jpeg');
arrayImagenes.push('CasaK_1.jpeg', 'CasaK_2.jpeg', 'CasaK_3.jpeg');
arrayImagenes.push('CasaL_1.jpeg', 'CasaL_2.jpeg', 'CasaL_3.jpeg');
arrayImagenes.push('CasaM_1.jpeg', 'CasaM_2.jpeg', 'CasaM_3.jpeg');
arrayImagenes.push('CasaN_1.jpeg', 'CasaN_2.jpeg', 'CasaN_3.jpeg');
arrayImagenes.push('CasaO_1.jpeg', 'CasaO_2.jpeg', 'CasaO_3.jpeg');
arrayImagenes.push('CasaP_1.jpeg', 'CasaP_2.jpeg', 'CasaP_3.jpeg');
arrayImagenes.push('CasaQ_1.jpeg', 'CasaQ_2.jpeg', 'CasaQ_3.jpeg');
arrayImagenes.push('CasaR_1.jpeg', 'CasaR_2.jpeg', 'CasaR_3.jpeg');
arrayImagenes.push('CasaS_1.jpeg', 'CasaS_2.jpeg', 'CasaS_3.jpeg');
arrayImagenes.push('CasaT_1.jpeg', 'CasaT_2.jpeg', 'CasaT_3.jpeg');
arrayImagenes.push('CasaX_1.jpeg', 'CasaX_2.jpeg', 'CasaX_3.jpeg');
arrayImagenes.push('CasaZ_1.jpeg', 'CasaZ_2.jpeg', 'CasaZ_3.jpeg');





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