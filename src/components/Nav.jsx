import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top fs-5">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="https://uzeyir-yariz.com.tr">
          <img src="/src/assets/images/nav-logo.png" alt="navbar_logo" className="img-fluid"/>
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
            <li className="nav-item"><NavLink to="/hub" className="nav-link">developer hub</NavLink></li>
            {/* linkler */}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
