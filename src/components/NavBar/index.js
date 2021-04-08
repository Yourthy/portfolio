import React from "react";
import { Link } from "react-router-dom";
import navBarItems from "./NavBarItems";
import Logo from '../../Images/portfolio-logo.png';
import "./NavBar.scss";

const NavBar = () => {
  const navMap = navBarItems.map((item, index) => {
    console.log(item.title);
    console.log(index);
    return (
      <li className="nav-item">
        <Link key={index} to={item.url} className={item.cName}>
          {item.title}
        </Link>
      </li>
    );
  });

  return (
    <nav className="navbar-container">
      <Link className="navbar-logo">
        <img src={Logo}></img>
        <h3 className='navbar-logo-text'>Yourthc Web Dev</h3>
      </Link>
      <div className="nav-menu">{navMap}</div>
    </nav>
  );
};

export default NavBar;
