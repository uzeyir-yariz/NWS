import ProjectCard from "./ProjectCard";
import { projects } from "./../data/Project";
import { useEffect, useState } from "react";

// diziyi karıştırmak için bir tane fonksiyon yazıyorum aşağıya
const shuffleArr = (arr) => {
  return arr
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

const ListProjectCard = () => {
  const [shuffledProjects, setShuffledProjects] = useState([]);

  // aşağıda yazdığım kod gelen projeleri karıştırıp karıştırılmış projeleri render ediyor
  useEffect(() => {
    setShuffledProjects(shuffleArr(projects));
  }, []);

  return (
    <section className="container">
      <h2 className="display-4 highlight pt-5 text-center">Tüm Projelerim</h2>
      <hr />
      <div className="project-card-container">
        {shuffledProjects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            reverse={index % 2 === 0} // İlk proje ve sıradaki projelerde ters düzen
          />
        ))}
      </div>
    </section>
  );
};

export default ListProjectCard;
