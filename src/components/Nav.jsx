import { Link, NavLink } from "react-router-dom";
import image from "./../assets/images/nav-logo.png"

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top fs-5">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="https://uzeyir-yariz.com.tr">
          <img src={image} alt="navbar_logo" className="img-fluid"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            {/* linkler */}
            <li className="nav-item"><NavLink to="/" className="nav-link">Ana sayfa</NavLink></li>
            <li className="nav-item"><NavLink to="/about" className="nav-link">Hakkımda</NavLink></li>

            <li className="nav-item d-lg-flex">
                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
                  Ekstralar
                </button>
                <ul className="dropdown-menu" style={{left: "initial"}}>
                  <li className="dropdown-item"><NavLink className="nav-link" to="extra/hub">Developer Hub</NavLink></li>
                  <li className="dropdown-item"><NavLink className="nav-link" to="extra/games">Oyunlar</NavLink></li>
                  <li className="dropdown-item"><NavLink className="nav-link" to="extra/projects">Projeler</NavLink></li>
                </ul>
            </li>

            <li className="nav-item"><NavLink to="/contact" className="nav-link">İletişim</NavLink></li>
            {/* linkler */}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
