// Page References : mise en place des filtres de recherches
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const referenceItems = document.querySelectorAll(".reference-item");

    // Activer tous les éléments et ajouter la classe 'selected' au bouton 'Tous' -> Par défaut
    referenceItems.forEach(item => item.classList.add("active"));
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('selected');

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            // Retire la classe 'selected' de tous les boutons, et ajout au bouton cliqué
            filterButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');

            referenceItems.forEach(item => {
                if (filter === "all" || item.classList.contains(filter)) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }
            });
        });
    });
});
