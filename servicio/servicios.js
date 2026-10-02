document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".servicio-card");
    const detalleButtons = document.querySelectorAll(".detalle-btn");


    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            cards.forEach(card => {
                const category = card.getAttribute("data-category");

                if (filterValue === "all" || category === filterValue) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });

     detalleButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const servicioNombre = e.target.closest(".servicio-card").querySelector("h3").innerText;
            alert(`Gracias por tu interés en CanguPet Has seleccionado: "${servicioNombre}". Pronto nos pondremos en contacto para gestionar tu disponibilidad.`);
        });
    });
});