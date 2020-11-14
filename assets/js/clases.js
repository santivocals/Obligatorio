class Usuario {
	nombre;
	apellido;
	correo;
	celular;
	password;
	//Tipo de usuario (Huésped, anfitrion, admin)
	tipo;
	activo;
	//Atributo de huésped
	//Se agrega titulo del inmueble al array cuando solicita reserva y se habilita botón de calificar
	//Una vez califica el inmueble se deshabilita botón de calificar
	reservas;
	//Atributo de anfitrión
	//Se agregan en array los inmuebles que registre el anfitrión
	inmuebles;

	constructor(pNombre, pApellido, pCorreo, pCelular, pPassword, pTipo) {
		this.nombre = pNombre;
		this.apellido = pApellido;
		this.correo = pCorreo;
		this.celular = pCelular;
		this.password = pPassword;
		this.tipo = pTipo;
		
		//Inicializamos atributos sin recibir información por parámetro
		this.activo = true;
		//Array de inmuebles reservados por el Huésped
		//Lo pusheamos desde la entidad Reserva
		this.reservas = [];
		//Array de inmuebles propios del Anfitrión
		this.inmuebles = [];
	}
}

class Inmueble {
	titulo;
	descripcion;
	ciudad;
	precio;
	imagenes;
	habilitado;
	anfitrion;
	calificaciones;
	promedio;
	

	constructor(pTitulo, pDescripcion, pCiudad, pPrecio, pImagenes) {
		this.titulo = pTitulo;
		this.descripcion = pDescripcion;
		this.ciudad = pCiudad;
		this.precio = pPrecio;
		this.imagenes = pImagenes;

		//Inicializamos atributos sin recibir información por parámetro
		this.habilitado = true;
		//El anfitrión se obtiene desde el usuarioConectado que está creando el inmueble
		this.anfitrion;
		//Guardamos en un array las califiaciones que vamos a obtener desde la entidad Reserva
		this.calificaciones = [];
		this.promedio = 0;
		
	}
}

class Reserva {
	cantNoches;
	inmueble;
	costoReserva;
	calificación;

	constructor(pCantNoches) {
		this.cantNoches = pCantNoches;

		//Inicializamos atributos sin recibir información por parámetro
		this.inmueble;
		this.costoReserva = reserva.cantNoches * inmueble.precio;
		//ATENCIÓN: ARREGLAR CUANDO HAGAMOS EL MÓDULO DE CALIFICACIÓN, NO SE PUEDE INICIALIZAR EN 0
		//YA QUE 0 ES UN VALOR VÁLIDO DE CALIFICACIÓN Y NO UNA CALIFICACIÓN NO REALIZADA
		//QUIZÁ SEA BUENA IDEA INCIALIZAR EN 'FALSE' A UNA VARIABLE CALIFICADO Y MANEJAR LA CALIFICACIÓN COMO
		//UNA VARIABLE GLOBAL QUE SE GUARDE EN EL ARRAY CALIFICACIONES Y QUE PASE A TRUE EL ATRIBUTO 'CALIFICADO´
		//EN LA ENTIDAD CUANDO EL USUARIO INGRESE LA CALIFICACIÓN, Y DESHABILIE EL BOTÓN DE CALIFICAR SI EL ATRIBUTO
		//reserva.calificado es True
		this.calificación;
	}
	
	
}