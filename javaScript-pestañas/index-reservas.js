// Evento de desplazamiento de la ventana
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
});

// Función para guardar la reserva
function guardarReserva() {
    // Obtener los valores del formulario
    let representante = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let movil = document.getElementById("movil").value;
    let cantAdultos = document.getElementById("cantidadAdultos").value;
    let cantNinos = document.getElementById("cantidadNinos").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;
    let juegos = document.getElementById("juegos").value;


    // Crear una nueva fila en la tabla de reservas
    let tablaReservas = document.getElementById("tablaReservas");
    let nuevaFila = tablaReservas.insertRow();

    // Insertar los datos en las celdas de la fila
    nuevaFila.insertCell().textContent = representante;
    nuevaFila.insertCell().textContent = email;
    nuevaFila.insertCell().textContent = movil;
    nuevaFila.insertCell().textContent = cantAdultos;
    nuevaFila.insertCell().textContent = cantNinos;
    nuevaFila.insertCell().textContent = fecha;
    nuevaFila.insertCell().textContent = hora;
    nuevaFila.insertCell().textContent = juegos;

    // Validaciones de campos requeridos
    if (cantAdultos === "") {
        alert("Al menos se necesita un adulto para realizar la reserva.");
        return;
    }

    if (
        representante === "" ||
        email === "" ||
        movil === "" ||
        fecha === "" ||
        hora === "" ||
        juegos === ""
    ) {
        alert("Por favor, complete todos los campos para realizar la reserva.");
        return;
    }



    // Guardar los subtotales en la tabla de subtotal
    let precioAdult = document.getElementById("precioAdult").value;
    let precioNino = document.getElementById("precioNino").value;
    let subtotal = calcularSubTotalPagar(precioAdult, precioNino);

    let tablaSubtotal = document.getElementById("tablaSubtotal");
    let nuevaFilaSubtotal = tablaSubtotal.insertRow();

    nuevaFilaSubtotal.insertCell().textContent = precioAdult;
    nuevaFilaSubtotal.insertCell().textContent = precioNino;
    nuevaFilaSubtotal.insertCell().textContent = subtotal;

    actualizarTotal(subtotal);

    // Limpiar los campos del formulario
    limpiarCamposFormulario();
}

// Función para calcular el subtotal
function calcularSubtotal() {
    let cantidadAdultos = document.getElementById("cantidadAdultos").value;
    let cantidadNinos = document.getElementById("cantidadNinos").value;
    let precioAdult = document.getElementById("precioAdult");
    let precioNino = document.getElementById("precioNino");

    let costoAdulto = 5;
    let costoNinos = 2;

    precioAdult.value = cantidadAdultos * costoAdulto;
    precioNino.value = cantidadNinos * costoNinos;
}

// Función para calcular el subtotal a pagar
function calcularSubTotalPagar(precioAdult, precioNino) {
    let subtotal = parseInt(precioAdult) + parseInt(precioNino);
    return subtotal;
}

// Función para actualizar el total
function actualizarTotal(subtotal) {
    let totalValue = document.getElementById("totalValue");
    let total = parseInt(totalValue.textContent) + subtotal;
    totalValue.textContent = total;
}

// Obtener los elementos necesarios para el modal de pago
var btnPagar = document.getElementById("btnPagar");
var modalPago = document.getElementById("modalPago");
var closeModal = document.getElementsByClassName("close")[0];

// Mostrar el modal al hacer clic en el botón "Pagar"
btnPagar.addEventListener("click", function () {
    modalPago.style.display = "block";
});

// Cerrar el modal al hacer clic en el botón de cerrar
closeModal.addEventListener("click", function () {
    modalPago.style.display = "none";
});

// Función para limpiar las tablas y reiniciar el total
function limpiarTablas() {
    let tablaReservas = document.getElementById("tablaReservas");
    tablaReservas.innerHTML = "";

    let tablaSubtotal = document.getElementById("tablaSubtotal");
    tablaSubtotal.innerHTML = "";

    let totalValue = document.getElementById("totalValue");
    totalValue.innerHTML = "0";
}

// Función para limpiar los campos del formulario
function limpiarCamposFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("movil").value = "";
    document.getElementById("cantidadAdultos").value = "";
    document.getElementById("precioAdult").value = "";
    document.getElementById("cantidadNinos").value = "";
    document.getElementById("precioNino").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("juegos").value = "";
}