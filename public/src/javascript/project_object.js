// JSON dosyasının URL'si
const jsonDosyaURL = '/database/project.json'; // JSON dosyasının URL'sini doğru şekilde ayarlayın

// JSON verilerini asenkron olarak çekme ve işleme
async function fetchVeriler() {
  try {
    const response = await fetch(jsonDosyaURL);
    const veriler = await response.json();

    const projects = await Promise.all(veriler.map(async (veri, index) => {
      const proje = veri[index];

      const project = {
        id: index,
        imageSrc: proje.imageSrc || '',
        name: proje.name || 'Proje Başlığı Yok',
        href: proje.href || '#',
        description: proje.description || 'Proje açıklaması bulunmuyor.',
        labels: proje.labels || []
      };
      return project;
    }));

    // Projeleri asenkron olarak oluşturup sayfaya ekleyin
    const projectContainer = document.getElementById("projectContainer");

    if (projects.length === 0) {
      const emptyMessage = document.createElement("p");
      emptyMessage.style.height = "100vh";
      emptyMessage.textContent = "Henüz projeler eklenmemiş.";
      projectContainer.appendChild(emptyMessage);
    } else {
      await Promise.all(projects.map(async project => {
        const projectElement = createProjectElement(project);
        projectContainer.appendChild(projectElement);
      }));
    }
  } catch (error) {
    console.error('Verileri çekerken hata oluştu:', error);
  }
}

fetchVeriler();

// Projeleri asenkron olarak oluşturup sayfaya ekleyen fonksiyon
function createProjectElement(project) {
  const projectElement = document.createElement("article");
  projectElement.id = project.id.toString();

  projectElement.innerHTML = `
      <figure><img src="${project.imageSrc}" alt="${project.name}"></figure>
      <article>
          <div>
              <h5>${project.name}</h5>
              <p class="text-slice">${project.description}</p>
              <a href="${project.href}" class="link">Daha fazla</a>
          </div>
          <!-- labels -->
          <div class="label-container">${project.labels.map(label => `<span class="${label}">${label}</span>`).join('')}</div>
      </article>
  `;

  return projectElement;
}
