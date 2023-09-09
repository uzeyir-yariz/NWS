// Projelerin bilgilerini içeren bir dizi
const projects = [
    /* {
        id: 0,
        imageSrc: "https://picsum.photos/200",
        name: "Proje 1 Başlığı",
        href: "#",
        description: "Proje 1 açıklaması burada bulunacak.",
        labels: ["javascript", "C-sharp"]
    }, */
];

// Projeleri oluşturup sayfaya ekleyen fonksiyon
function createProjectElement(project) {
    const projectElement = document.createElement("article");
    projectElement.id = project.id.toString();

    projectElement.innerHTML = `
        <figure><img src="${project.imageSrc}" alt="${project.name}"></figure>
        <article>
            <div>
                <h5>${project.name}</h5>
                <p>${project.description}</p>
                <a href="${project.href}" class="link">daha fazla</a>
            </div>
            <!-- labels -->
            <div class="label-contanier">${project.labels.map(label => `<span class="${label}">${label}</span>`).join('')}</div>
        </article>
    `;

    return projectElement;
}

// Projeleri oluşturup sayfaya ekleyin
const projectContainer = document.getElementById("projectContainer");

if (projects.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.style.height = "100vh"
    emptyMessage.textContent = "Henüz projeler eklenmemiş.";
    projectContainer.appendChild(emptyMessage);
} else {
    projects.forEach(project => {
        const projectElement = createProjectElement(project);
        projectContainer.appendChild(projectElement);
    });
}
