import React from "react";
import { Parallax } from "react-parallax";
import "../css/HomePage.css";
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();

  const useState = React.useState;
  const useEffect = React.useEffect;

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="parallax-page">
      <nav>
        <div className="menu">
          <p className="website_name">Harbor.ed</p>
          <div className="menu_links">
            {/* <a href="/analytics" className="link">
              Poisson Buddy
            </a> */}
            {/* <a href="/leaderboard" className="link">
              Leaderboard
            </a>
            <a href="/redeem" className="link">
              Rewards
            </a>
            <a href="/donation" className="link">
              Donate
            </a>
            <a href="/logout" className="link">
              Log Out
            </a> */}
          </div>
          <div className="menu_icon" id="menuIcon">
            <span className="icon"></span>
          </div>
        </div>
      </nav>

      <section className="wrapper">
        <div className="container">
          <div id="scene" className="scene" data-hover-only="false">
            <div className="circle" data-depth="1.2"></div>

            <div className="one" data-depth="0.9">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="two" data-depth="0.60">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="three" data-depth="0.40">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <p className="p404" data-depth="0.50">
              Harbor.ed
            </p>
            <p className="p404" data-depth="0.10">
            Harbor.ed
            </p>
          </div>
          <div className="text">
            <article>
              <p>
                Your personal safe space.
              </p>
              <button>
                <Link
        to={{
          pathname: '/character',
          state: { prevPath: location.pathname }
        }}
        className="block w-full"
      >
        PICK MY CHARACTER
      </Link>
              </button>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
