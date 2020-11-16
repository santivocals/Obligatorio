usuario = 'admin';

if (usuario === null) {
    document.getElementById('btnRegistro').innerHTML = `<input type="button" value="Registrar" id="btnRegistro"></input>`;
    let tipo = 'huesped';
} else if (usuario === 'admin') {
    document.getElementById('btnRegistro').innerHTML = `<input type="button" value="Alta anfitrión" id="btnRegistro"></input>`;
}


