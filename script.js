function agendar() {
    const button = document.querySelector(".red") || document.querySelector(".bordo");
    if (button.classList.contains("red")) {
        button.classList.remove("red");
        button.classList.add("bordo");
        button.textContent = "Agendado"
    } else {
        button.classList.remove("bordo");
        button.classList.add("red");
    }
}
