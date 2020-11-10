class Usuario {
	nombre;
	apellido;
	correo;
	password;
	celular;
	//Tipo de usuario (admin, anfitrion, admin)
	tipo;
	activo;
	//Propiedad de huésped
	//Se agrega titulo del inmueble al array cuando solicita reserva y se habilita botón de calificar
	//Una vez califica el inmueble se elimina del array y se deshabilita botón de calificar
	reservas;
	//Propiedad de anfitrión
	//Se agregan en array los inmuebles que registre el anfitrión
	inmuebles;

	constructor(pNombre, pApellido, pCorreo, pPassword, pCelular, pTipo) {
		this.nombre = pNombre;
		this.apellido = pApellido;
		this.correo = pCorreo;
		this.password = pPassword;
		this.celular = pCelular;
		//Ver si corresponde colocarlo como un parámetro, ya que se asigna según la pantalla desde donde se resgistre
		this.tipo = pTipo;

		//Inicializamos atributos sin recibir información desde fuera
		this.activo = true;
		this.reservas = [];
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

	constructor(pTitulo, pDescripcion, pCiudad, pPrecio, pAnfitrion) {
		this.titulo = pTitulo;
		this.descripcion = pDescripcion;
		this.ciudad = pCiudad;
		this.precio = pPrecio;
		//Corregir cuando se explique como se trabaja con imagenes si se guarda en un array
		this.imagenes = "host_house.jpg";
		this.habilitado = true;
		this.anfitrion = "";
		//Guardamos en un array todas las calificaciones de usuarios
		this.calificaciones = [];
		//Se le pasa valor de la función "promedio"
		this.promedio = 0;
	}
}
