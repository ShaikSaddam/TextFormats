import React from "react";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <div>
            <div className="form-check form-switch text-light">
              <input
                onClick={props.toggleMode}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
          </div>
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.link}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  List Of Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Services And Sales
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Address
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Contact Info
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item"></li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="Available"
                placeholder="Available"
                aria-label="Available"
              />
              <button className="btn btn-secondary" type="submit">
                Search Of Services
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
