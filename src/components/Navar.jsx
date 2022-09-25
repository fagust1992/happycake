import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="container-fluid">
      <nav class="navbar navbar-expand-lg menu navbar-dark ">
        <div class="container-fluid">
          <h1 class="titulo-dispositvos" href="#">
            Happy Cake
          </h1>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" className="text-white ms-3 text-decoration-none">
                  🏡 Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/contacto"
                  className="text-white ms-3 text-decoration-none"
                >
                  📒Contacto
                </Link>
              </li>
            </ul>
            <div class="d-flex">
              <h1 className="titulo-desktop">Happy Cake 🧀</h1>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
