const form = document.getElementById("form")
const input = document.getElementById("input")

input.addEventListener("focus", () => {
    form.style.border = "2px solid #2563eb"
})

input.addEventListener("blur", () => {
    form.style.border = "2px solid transparent";
});


const openModalBtn = document.getElementById("openModalBtn");
const loginModal = document.getElementById("loginModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalLoginForm = document.getElementById("modalLoginForm");
const modalEmailInput = document.getElementById("modalEmail");

openModalBtn.addEventListener("click", () => {
    loginModal.classList.add("active");
});

closeModalBtn.addEventListener("click", () => {
    loginModal.classList.remove("active");
});

loginModal.addEventListener("click", (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove("active");
    }
});

modalLoginForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const userEmail = modalEmailInput.value.trim();


    localStorage.setItem("userEmail", userEmail);

    alert(`Xush kelibsiz! ${userEmail} muvaffaqiyatli saqlandi.`);
    
    modalLoginForm.reset();
    loginModal.classList.remove("active");


    openModalBtn.innerHTML = `<i class="ri-user-line"></i> ${userEmail.split('@')[0]}`;
});


window.addEventListener("DOMContentLoaded", () => {
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
        openModalBtn.innerHTML = `<i class="ri-user-line"></i> ${savedEmail.split('@')[0]}`;
    }
});