// Función para comparar números
const compararNumeros = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = document.getElementById('resultadoComparacion');

    if (num1 > num2) resultado.textContent = `El mayor es: ${num1}`;
    else if (num2 > num1) resultado.textContent = `El mayor es: ${num2}`;
    else resultado.textContent = 'Ambos números son iguales.';
};

// Función para mostrar el mes correspondiente
const mostrarMes = () => {
    const mes = parseInt(document.getElementById('mes').value);
    let mensaje;

    switch (mes) {
        case 1: mensaje = 'Enero'; break;
        case 2: mensaje = 'Febrero'; break;
        case 3: mensaje = 'Marzo'; break;
        case 4: mensaje = 'Abril'; break;
        case 5: mensaje = 'Mayo'; break;
        case 6: mensaje = 'Junio'; break;
        case 7: mensaje = 'Julio'; break;
        case 8: mensaje = 'Agosto'; break;
        case 9: mensaje = 'Septiembre'; break;
        case 10: mensaje = 'Octubre'; break;
        case 11: mensaje = 'Noviembre'; break;
        case 12: mensaje = 'Diciembre'; break;
        default: mensaje = 'Número inválido';
    }

    alert(mensaje);
};

// Función para gestionar nombres
const nombres = [];
const agregarNombre = () => {
    const nombre = document.getElementById('nombre').value;
    if (nombre) {
        nombres.push(nombre);
        document.getElementById('listaNombres').innerHTML = nombres.join(', ');
    }
};

// Función para registrar usuarios
const registrarUsuario = () => {
    const id = document.getElementById('id').value;
    const cedula = document.getElementById('cedula').value;
    const nombres = document.getElementById('nombres').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const ciudad = document.getElementById('ciudad').value;

    const fila = `<tr><td>${id}</td><td>${cedula}</td><td>${nombres}</td><td>${fechaNacimiento}</td><td>${ciudad}</td></tr>`;
    document.getElementById('tablaUsuarios').innerHTML += fila;

     // Limpiar los campos del formulario después de registrar
     document.getElementById('id').value = '';
     document.getElementById('cedula').value = '';
     document.getElementById('nombres').value = '';
     document.getElementById('fechaNacimiento').value = '';
     document.getElementById('ciudad').value = '';
};

// Asociar eventos a los botones
document.getElementById('btnComparar').onclick = compararNumeros;
document.getElementById('btnMes').onclick = mostrarMes;
document.getElementById('btnAgregar').onclick = agregarNombre;
document.getElementById('btnRegistrar').onclick = registrarUsuario;
