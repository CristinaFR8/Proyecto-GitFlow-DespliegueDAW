document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".opinion-card");
    const formOpinion = document.querySelector("#formOpinion");

    // Filtrado dinámico de opiniones
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            cards.forEach(card => {
                const category = card.getAttribute("data-category");

                if (filterValue === "todos" || category === filterValue) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });

    // Envío interactivo de reseña
    if (formOpinion) {
        formOpinion.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Gracias por tu opinión Se ha enviado correctamente y aparecerá publicada tras ser revisada.");
            formOpinion.reset();
        });
    }
});