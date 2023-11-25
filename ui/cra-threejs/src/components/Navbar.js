import React from "react";
import "./../css/Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navigation-wrap bg-light start-header ${
        isScrolled ? "scroll-on" : "start-style"
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-md navbar-light">
              <a
                className="navbar-brand"
                href="https://front.codes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto py-4 py-md-0">
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a className="nav-link" href="#">
                      Agency
                    </a>
                  </li>

                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a className="nav-link" href="#">
                      Journal
                    </a>
                  </li>
                  <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
