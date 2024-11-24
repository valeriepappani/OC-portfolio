// Homepage : ajout des deriers projets en bas de page 

document.addEventListener("DOMContentLoaded", function () {
    const projectsContainer = document.querySelector('.last-projects');
    const projects = [
        { img: "/images/onelaw-mockup-responsive.webp", link: "./References/onelaw.html", alt: "Onelaw" },
        { img: "/images/kasa-apercu-global.webp", link: "./References/Kasa.html", alt: "Kasa" },
        { img: "/images/dentiste-maquette-site.webp", link: "./References/dentiste.html", alt: "Cabinet dentaire" }
    ];
  
    projects.forEach(project => {
        const projectElement = document.createElement('a');
        projectElement.href = project.link;
        projectElement.innerHTML = `<img src="${project.img}" alt="${project.alt}">`;
        projectsContainer.appendChild(projectElement);
    });
  });