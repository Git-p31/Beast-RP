import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Ваши настройки Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCuA3YUjmuIYc5jtndT31uKk0YFIcEDqdc",
  authDomain: "beast-rp.firebaseapp.com",
  projectId: "beast-rp",
  storageBucket: "beast-rp.appspot.com",
  messagingSenderId: "1062355740105",
  appId: "1:1062355740105:web:d06245552fec9b0c9b7418",
  measurementId: "G-MQHJXE1GVV"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const resetForm = document.getElementById("reset-form");
  const registerForm = document.getElementById("register-form");
  const resetPasswordLink = document.getElementById("reset-password-link");
  const cancelResetLink = document.getElementById("cancel-reset-link");
  const registerLink = document.getElementById("register-link");
  const cancelRegisterLink = document.getElementById("cancel-register-link");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Предотвратить стандартную отправку формы

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Преобразовать ник в email
    const email = `${username}@example.com`;

    // Вход пользователя
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Успешная авторизация
        const user = userCredential.user;
        console.log("Logged in as:", user.email);
        // Перенаправление на страницу аккаунта
        window.location.href = "account.html";
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        alert("Ошибка авторизации. Проверьте свои данные.");
      });
  });

  resetPasswordLink.addEventListener("click", () => {
    loginForm.style.display = "none";
    resetForm.style.display = "block";
  });

  cancelResetLink.addEventListener("click", () => {
    resetForm.style.display = "none";
    loginForm.style.display = "block";
  });

  resetForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("reset-email").value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Ссылка для сброса пароля отправлена на ваш email.");
        resetForm.style.display = "none";
        loginForm.style.display = "block";
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error);
        alert("Ошибка отправки ссылки для сброса пароля.");
      });
  });

  registerLink.addEventListener("click", () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  });

  cancelRegisterLink.addEventListener("click", () => {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
  });

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    // Преобразовать ник в email
    const email = `${username}@example.com`;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Успешная регистрация
        const user = userCredential.user;
        console.log("Registered as:", user.email);
        alert("Регистрация успешна! Пожалуйста, войдите.");
        registerForm.style.display = "none";
        loginForm.style.display = "block";
      })
      .catch((error) => {
        console.error("Error registering:", error);
        alert("Ошибка регистрации. Проверьте свои данные.");
      });
  });
});
