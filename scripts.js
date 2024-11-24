// Ajout du header et du footer sur chaque page 
document.addEventListener("DOMContentLoaded", function() {
    function includeHTML(id, file) {
      fetch(file)
        .then((response) => {
          if (response.ok) {
            return response.text();
          }
          throw new Error("Erreur lors du chargement de " + file);
        })
        .then((html) => {
          const element = document.getElementById(id);
          if (element) {
            element.innerHTML = html;
          } else {
            console.error("L'élément avec l'id " + id + " n'a pas été trouvé.");
          }
        })
        .catch((error) => console.error(error));
    }
  
    // Inclure le header et le footer
    includeHTML("menu", "menu.html");
    includeHTML("footer", "footer.html");
  });
