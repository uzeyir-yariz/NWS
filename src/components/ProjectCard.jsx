const ProjectCard = (Props) => {
  const { Links, badge_languages, desc, img_url, title, img_alt, reverse } = Props;

  return (
    <div className={`project-card ${reverse ? "reverse" : ""}`}>
      <img src={img_url} alt={img_alt} />

      <div className="project-content">
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>

        <div className="project-tags">
          {badge_languages.map((language, langIndex) => (
            <span key={langIndex} className="badge">
              {language}
            </span>
          ))}
        </div>

        <div className="card-links">
          {Links.map((link, index) => (
            <a
              href={link.link_url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="card-link"
            >
              {link.link_name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
