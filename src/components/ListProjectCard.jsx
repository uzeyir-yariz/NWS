import ProjectCard from "./ProjectCard"
import {projects} from "./../data/Project"

const ListProjectCard = () => {
  return (
    <section>
      <h2 className="display-4 highlight text-center">Tüm Projelerim</h2>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
          reverse={index % 2 === 0} // İlk proje ve sıradaki projelerde ters düzen
        />
      ))}
    </section>
  )
}

export default ListProjectCard
