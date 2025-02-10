const $btnSignIn = document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

// Cambiar entre Registro e Inicio de sesión
document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }
});

// Manejo del registro de usuario
document.querySelector("#registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.querySelector("#registerName").value.trim();
    const email = document.querySelector("#registerEmail").value.trim();
    const password = document.querySelector("#registerPassword").value.trim();

    if (!name || !email || !password) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(user => user.email === email);
    if (userExists) {
        alert("Este correo ya está registrado. Por favor, inicia sesión.");
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    document.querySelector("#registerForm").reset();
    $signUp.classList.remove("active");
    $signIn.classList.add("active");
});

// Manejo del inicio de sesión
document.querySelector("#loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const email = document.querySelector("#loginEmail").value.trim();
    const password = document.querySelector("#loginPassword").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem("userLogged", JSON.stringify(user));
        alert(`Bienvenido, ${user.name}!`);
        window.location.href = "index.html";
    } else {
        alert("Correo o contraseña incorrectos.");
    }
});

// Redirigir si el usuario ya está autenticado
if (localStorage.getItem("userLogged")) {
    window.location.href = "index.html";
}

//CERRAR SESION
document.addEventListener("DOMContentLoaded", function () {
    const userInfo = JSON.parse(localStorage.getItem("userLogged"));
    const userNameSpan = document.getElementById("userName");
    const logoutBtn = document.getElementById("logoutBtn");

    // Si no hay usuario logueado, redirigir a login
    if (!userInfo) {
        window.location.href = "login.html";
        return;
    }

    // Mostrar el nombre del usuario en el navbar
    userNameSpan.textContent = `Hola, ${userInfo.name}`;

    // Cerrar sesión
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("userLogged");
        window.location.href = "login.html"; // Redirige al login
    });
});

