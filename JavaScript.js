// Array para almacenar los datos de los trabajadores
var trabajadores = [];

function calcularSalario() {
    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var horasNormales = parseFloat(document.getElementById('horasNormales').value) || 0;
    var horasExtras = parseFloat(document.getElementById('horasExtras').value) || 0;

    // Calcular salario bruto, deducciones y salario neto
    var salarioNormal = horasNormales * 1800;
    var salarioExtras = horasExtras * 1800 * 1.5;
    var salarioBruto = salarioNormal + salarioExtras;

    var deduccionesPorcentaje;
    if (salarioBruto <= 250000) {
        deduccionesPorcentaje = 0.09;
    } else if (salarioBruto <= 380000) {
        deduccionesPorcentaje = 0.12;
    } else {
        deduccionesPorcentaje = 0.15;
    }
    var deducciones = salarioBruto * deduccionesPorcentaje;
    var salarioNeto = salarioBruto - deducciones;

    // Mostrar resultados para el trabajador actual
    document.getElementById('resultadoNombre').innerText = 'Nombre: ' + nombre;
    document.getElementById('resultadoHorasNormales').innerText = 'Horas Normales: ' + horasNormales;
    document.getElementById('resultadoHorasExtras').innerText = 'Horas Extras: ' + horasExtras;
    document.getElementById('resultadoSalarioBruto').innerText = 'Salario Bruto: ₡' + salarioBruto.toFixed(2);
    document.getElementById('resultadoDeducciones').innerText = 'Deducciones: ₡' + deducciones.toFixed(2);
    document.getElementById('resultadoSalarioNeto').innerText = 'Salario Neto: ₡' + salarioNeto.toFixed(2);

    // Almacenar los datos del trabajador en el array
    trabajadores.push({
        nombre: nombre,
        horasNormales: horasNormales,
        horasExtras: horasExtras,
        salarioBruto: salarioBruto,
        deducciones: deducciones,
        salarioNeto: salarioNeto
    });

    // Mostrar información de cada trabajador
    mostrarInformacionTrabajadores();
}

function mostrarInformacionTrabajadores() {
    var listaTrabajadores = document.getElementById('listaTrabajadores');
    listaTrabajadores.innerHTML = ''; // Limpiar la lista antes de actualizarla

    // Recorrer el array de trabajadores y agregar cada uno a la lista
    for (var i = 0; i < trabajadores.length; i++) {
        var trabajador = trabajadores[i];

        var listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${trabajador.nombre}</strong>
            <ul>
                <li>Horas Normales: ${trabajador.horasNormales}</li>
                <li>Horas Extras: ${trabajador.horasExtras}</li>
                <li>Salario Bruto: ₡${trabajador.salarioBruto.toFixed(2)}</li>
                <li>Deducciones: ₡${trabajador.deducciones.toFixed(2)}</li>
                <li>Salario Neto: ₡${trabajador.salarioNeto.toFixed(2)}</li>
            </ul>
        `;

        listaTrabajadores.appendChild(listItem);
    }
}

function limpiarDatos() {
    // Limpiar los campos de entrada
    document.getElementById('nombre').value = '';
    document.getElementById('horasNormales').value = '';
    document.getElementById('horasExtras').value = '';

    // Limpiar resultados para el trabajador actual
    document.getElementById('resultadoNombre').innerText = '';
    document.getElementById('resultadoHorasNormales').innerText = '';
    document.getElementById('resultadoHorasExtras').innerText = '';
    document.getElementById('resultadoSalarioBruto').innerText = '';
    document.getElementById('resultadoDeducciones').innerText = '';
    document.getElementById('resultadoSalarioNeto').innerText = '';
}
