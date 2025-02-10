document.addEventListener("DOMContentLoaded", function () {
    const formContainer = document.getElementById("loginFormContainer");
    const toggleButton = document.getElementById("toggleFormBtn");
    const closeButton = document.getElementById("closeFormBtn");

    // Mostrar el formulario
    toggleButton.addEventListener("click", function () {
        formContainer.classList.remove("hidden");
        setTimeout(() => {
            formContainer.classList.add("show");
        }, 10);
    });

    // Ocultar el formulario
    closeButton.addEventListener("click", function () {
        formContainer.classList.remove("show");
        setTimeout(() => {
            formContainer.classList.add("hidden");
        }, 300);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const formOverlay = document.getElementById("formOverlay");
    const formContainer = document.getElementById("loginFormContainer");
    const toggleButton = document.getElementById("toggleFormBtn");
    const closeButton = document.getElementById("closeFormBtn");

    // Mostrar el formulario y el fondo semitransparente
    toggleButton.addEventListener("click", function () {
        formOverlay.classList.add("show");
        setTimeout(() => {
            formContainer.classList.add("show");
        }, 10);
    });

    // Ocultar el formulario y el fondo semitransparente
    closeButton.addEventListener("click", function () {
        formContainer.classList.remove("show");
        setTimeout(() => {
            formOverlay.classList.remove("show");
        }, 300); // Coincide con la transición del formulario
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("solicitarAyudaForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;
        const email = document.getElementById("email").value;
        const tipoAyuda = document.getElementById("tipoAyuda").value;
        const descripcion = document.getElementById("descripcion").value;

        // Validar que todos los campos estén completos
        if (nombre && telefono && email && tipoAyuda && descripcion) {
            // Aquí puedes agregar la lógica para enviar los datos al servidor
            // Por ejemplo, usando fetch() para hacer una solicitud POST

            // Mostrar un mensaje de éxito
            alert("Solicitud cargada con éxito.");

            // Limpiar el formulario
            form.reset();
        } else {
            alert("Por favor, completa todos los campos del formulario.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("solicitarAyudaForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;
        const email = document.getElementById("email").value;
        const tipoAyuda = document.getElementById("tipoAyuda").value;
        const descripcion = document.getElementById("descripcion").value;

        // Validar que todos los campos estén completos
        if (nombre && telefono && email && tipoAyuda && descripcion) {
            // Aquí puedes agregar la lógica para enviar los datos al servidor
            // Por ejemplo, usando fetch() para hacer una solicitud POST

            // Mostrar un mensaje de éxito
            alert("Solicitud enviada con éxito. Nos pondremos en contacto contigo pronto.");

            // Limpiar el formulario
            form.reset();
        } else {
            alert("Por favor, completa todos los campos del formulario.");
        }
    });
});




