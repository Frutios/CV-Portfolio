import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="sidebar">
        <div className="idContent">
          <img className="profile-pic" src="./media/profile.jpg" alt="profile-pic" />
          <h1>Benjamin Tourneur</h1>
        </div>
      <div className="nav">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="bi bi-house-fill" />
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/skills" activeClassName="navActive">
              <i className="bi bi-tools" />
              <span>Skills</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/projets" activeClassName="navActive">
              <i className="bi bi-braces" />
              <span>Projets</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="bi bi-file-person-fill" />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
          <ul>
              <li>
                <a href="https://www.linkedin.com/in/benjamin-tourneur/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
              </li>
              <li>
                <a href="https://github.com/Frutios" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
              </li>
          </ul>
      </div>
    </div>
  );
};

export default Nav;
