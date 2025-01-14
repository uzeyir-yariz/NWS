```jsx
import ProjectCard from "./ProjectCard"
import { projects } from "./../data/Project"

// Diziyi rastgele karıştırmak için bir yardımcı işlev
const shuffleArray = (array) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

const ListProjectCard = () => {
  // Projeleri rastgele sıraya koy
  const shuffledProjects = shuffleArray(projects);

  return (
    <section>
      <h2 className="display-4 highlight text-center">Tüm Projelerim</h2>
      {shuffledProjects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
          reverse={index % 2 === 0} // İlk proje ve sıradaki projelerde ters düzen
        />
      ))}
    </section>
  );
};

export default ListProjectCard;

```