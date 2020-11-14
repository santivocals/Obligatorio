class Usuario {
	nombre;
	apellido;
	correo;
	celular;
	password;
	//Tipo de usuario (Huésped, anfitrion, admin)
	tipo;
	activo;
	//Propiedad de huésped
	//Se agrega titulo del inmueble al array cuando solicita reserva y se habilita botón de calificar
	//Una vez califica el inmueble se elimina del array y se deshabilita botón de calificar
	reservas;
	//Propiedad de anfitrión
	//Se agregan en array los inmuebles que registre el anfitrión
	inmuebles;

	constructor(pNombre, pApellido, pCorreo, pCelular, pPassword) {
		this.nombre = pNombre;
		this.apellido = pApellido;
		this.correo = pCorreo;
		this.celular = pCelular;
		this.password = pPassword;
		
<<<<<<< HEAD
		//Inicializamos atributos sin recibir información por parámetro
<<<<<<< HEAD
=======
		//Ver si corresponde colocarlo como un parámetro, ya que se asigna según la pantalla desde donde se resgistre
		this.tipo = pTipo;

		//Inicializamos atributos sin recibir información desde fuera
>>>>>>> parent of f09e5bf... Update clases.js
=======
		this.tipo = '';
>>>>>>> parent of 5ba7bab... Update clases.js
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

	constructor(pTitulo, pDescripcion, pCiudad, pPrecio, pImagenes, pAnfitrion, pCalificaciones, pSumaCalificaciones) {
		this.titulo = pTitulo;
		this.descripcion = pDescripcion;
		this.ciudad = pCiudad;
		this.precio = pPrecio;
		this.imagenes = pImagenes;
		this.habilitado = true;
		this.anfitrion = pAnfitrion;
		//Guardamos en un array todas las calificaciones de usuarios
		this.calificaciones = pCalificaciones;
		this.sumaCalificaciones = 0 + pSumaCalificaciones;
	}
}
