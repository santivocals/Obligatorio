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
	anfitrion;
	habilitado;
	calificaciones;
	promedio;
	

	constructor(pTitulo, pDescripcion, pCiudad, pPrecio, pImagenes, pAnfitrion) {
		this.titulo = pTitulo;
		this.descripcion = pDescripcion;
		this.ciudad = pCiudad;
		this.precio = pPrecio;
		this.imagenes = pImagenes;
		//El anfitrión se obtiene desde el usuarioConectado que está creando el inmueble
		this.anfitrion = pAnfitrion;

		//Inicializamos atributos sin recibir información por parámetro
		this.habilitado = true;
		//Guardamos en un array las califiaciones que vamos a obtener desde la entidad Reserva
		this.calificaciones = [];
		this.promedio = 0;
		
	}
}

class Reserva {
	cantNoches;
	inmueble;
	costoReserva;
	calificado;

	constructor(pCantNoches, pInmueble, pCostoReserva) {
		this.cantNoches = pCantNoches;
		this.inmueble = pInmueble;
		this.costoReserva = pCostoReserva;

		//Inicializamos atributos sin recibir información por parámetro
		this.calificado = false;
	}
	
	
}