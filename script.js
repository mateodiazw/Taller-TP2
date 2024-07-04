function agendar(event) {
    const button = event.target;
    
    if (button.classList.contains("red")) {
        button.classList.remove("red");
        button.classList.add("bordo");
        button.textContent = "Agendado";
    } else if (button.classList.contains("bordo")) {
        button.classList.remove("bordo");
        button.classList.add("red");
        button.textContent = "Agendar";
    }
}

