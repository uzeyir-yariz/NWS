import HomeCard from "./HomeCard";
import { starredProjects } from "./../data/Project";

const ListHomeCard = () => {
  return (
    <section className="container">
      <h2 className="title display-4 pt-4 text-center highlight">💻 Projeler 💻</h2>
      <hr />
      <div className="card-group">
        
        {starredProjects.map((project, index) => (
          <HomeCard
            {...project}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ListHomeCard;