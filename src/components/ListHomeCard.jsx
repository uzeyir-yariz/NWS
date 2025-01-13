import HomeCard from "./HomeCard";
import { starredProjects } from "./../data/Project";

const ListHomeCard = () => {
  return (
    <div className="container">
      <h2 className="title display-4 my-4 text-center highlight">💻 Projeler 💻</h2>
      <div className="card-group">
        {starredProjects.map((project, index) => (
          <HomeCard
            {...project}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ListHomeCard;