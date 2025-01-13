const HomeCard = (Props) => {
  const { Links, badge_languages, desc, img_url, title, img_alt } = Props;

  return (
    <div className="card">
      <img src={img_url} className="card-img-top" alt={img_alt} />

      <div className="card-header">
        <h3 className="card-text">{title}</h3>
      </div>

      <div className="card-body">
        <p className="card-text">{desc}</p>

        <div className="d-flex align-items-center gap-3 flex-wrap">
          {badge_languages.map((language, langIndex) => (
            <span key={langIndex} className="badge bg-primary">
              {language}
            </span>
          ))}
        </div>
      </div>

      <div className="card-footer">
        {Links.map((link, index) => {
          return (
            <a
              href={link.link_url}
              target="_blank"
              key={index}
              className="card-link"
            >
              {link.link_name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCard;
