import HomeCard from "./HomeCard";
import { projects } from "./../data/Project";

const ListHomeCard = () => {
  return (
    <div className="container">
      <h2 className="title my-4">⭐ Projeler ⭐</h2>
      <div className="card-group">
        {projects.map((project, index) => (
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