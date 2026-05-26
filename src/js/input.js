const form = document.getElementById("form")
const input = document.getElementById("input")

input.addEventListener("focus", () => {
    form.style.border = "2px solid #2563eb"
})

input.addEventListener("blur", () => {
    form.style.border = "2px solid transparent";
});

