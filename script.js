const registroEquipos = {};

const inputNombre = document.getElementById("nombre");
const inputFecha = document.getElementById("fecha");
const inputDescripcion = document.getElementById("descripcion");
const selectEquipos = document.getElementById("select-equipos");
const divListaEquipos = document.getElementById("lista-equipos");
const divMensaje = document.getElementById("mensaje");

const btnRegistrar = document.getElementById("btn-registrar");
const btnActualizar = document.getElementById("btn-actualizar");
const btnEliminar = document.getElementById("btn-eliminar");

function cargarDatosIniciales() {
    registroEquipos["Impresora HP"] = {
        fechaRevision: "2026-08-15",
        descripcion: "Cambio de tóner y limpieza general del rodillo."
    };

    registroEquipos["Servidor Dell"] = {
        fechaRevision: "2026-09-01",
        descripcion: "Actualización de parches de seguridad y respaldo del sistema."
    };

    registroEquipos["Laptop Lenovo"] = {
        fechaRevision: "2026-09-10",
        descripcion: "Reemplazo de pasta térmica y formateo de disco."
    };

    actualizarInterfaz();
}

function mostrarMensaje(texto, tipo = "exito") {
divMensaje.textContent = texto;
divMensaje.className = `mensaje ${tipo}`;
setTimeout(() => {
    divMensaje.className = "mensaje oculto";
}, 3000);

}

function actualizarInterfaz() {
    selectEquipos.innerHTML = '<option value="">--- Selecciona un equipo ---</option>';
    divListaEquipos.innerHTML = "";

    const nombresEquipos = Object.keys(registroEquipos);
    if (nombresEquipos.length === 0) {
        divListaEquipos.innerHTML = "<p>No hay equipos registrados actualmente.</p>";
        return;
    }

    nombresEquipos.forEach(nombreKey => {
        const equipo = registroEquipos[nombreKey];

        const fechaObjeto = new Date(equipo.fechaRevision + "T00:00:00");
        const fechaFormateada = fechaObjeto.toLocaleDateString("es-ES", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const option = document.createElement("option");
        option.value = nombreKey;
        option.textContent = nombreKey;
        selectEquipos.appendChild(option);

        const tarjeta = document.createElement("div");
        tarjeta.className = "equipo-item";
        tarjeta.innerHTML = `
            <h3>${nombreKey}</h3>
            <p><strong>Última revisión:</strong> ${fechaFormateada}</p>
            <p><strong>Tareas realizadas:</strong> ${equipo.descripcion}</p>
            `;
    });
}

btnRegistrar.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();
    const fecha = inputFecha.value;
    const descripcion = inputDescripcion.value.trim();

    if (!nombre || !fecha || !descripcion) {
        mostrarMensaje("Por favor, completa todos los campos del formulario.", "error");
        return;
    }

    if (registroEquipos[nombre]) {
        mostrarMensaje("Ya existe un equipo registrado con ese nombre.", "error");
        return;
    }

    registroEquipos[nombre] = {
        fechaRevision: fecha,
        descripcion: descripcion
    };

    actualizarInterfaz();
    limpiarFirmulario();
    mostrarMensaje(`Equipo "${nombre}" registrado correctamente.`);
});

selectEquipos.addEventListener("change", () => {
    const nombreSeleccionado = selectEquipos.value;

    if (nombreSeleccionado && registroEquipos[nombreSeleccionado]) {
        const equipo = registroEquipos[nombreSeleccionado];
        inputNombre.value = nombreSeleccionado;
        inputFecha.value = equipo.fechaRevision;
        inputDescripcion.value = equipo.descripcion;
    } else {
        limpiarFirmulario();
    }
});

btnActualizar.addEventListener("click", () => {
    const nombreSeleccionado = selectEquipos.value;
    const nuevoNombre = inputNombre.value.trim();
    const nuevaFecha = inputFecha.value;
    const nuevaDescripcion = inputDescripcion.value.trim();

    if (!nombreSeleccionado) {
        mostrarMensaje("Selecciona un equipo del menú desplegable para actualizar.", "error");
        return;
    }

    if (nombreSeleccionado !== nuevoNombre) {
        delete registroEquipos[nombreSeleccionado];
    }

    registroEquipos[nuevoNombre] = {
        fechaRevision: nuevaFecha,
        descripcion: nuevaDescripcion   
    };

    actualizarInterfaz();
    limpiarFormulario();
    mostrarMensaje(`Equipo "${nuevoNombre}" actualizado con éxito.`);
});

btnEliminar.addEventListener("click", () => {
    const nombreSeleccionado = selectEquipos.value;

    if (!nombreSeleccionado) {
        mostrarMensaje("Selecciona un equipo del menú desplegable para eliminar.", "error");
        return;
    }

    delete registroEquipos[nombreSeleccionado];

    actualizarInterfaz();
    limpiarFirmulario();
    mostrarMensaje(`Equipo "${nombreSeleccionado}" eliminado correctamente.`);
});

function limpiarFormulario() {
    inputNombre.value = "";
    inputFecha.value = "";
    inputDescripcion.value = "";
    selectEquipos.value = "";
}

cargarDatosIniciales();

