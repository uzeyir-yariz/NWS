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
