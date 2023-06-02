import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./HeaderElements";
import './Header.css'
// import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
      <header className='header center'>
        <h3 className='header__title'>
        <a href="\" className='link'>
          PR.
          </a>
        </h3>
      </header>
        <NavMenu>
          <NavLink className="menu-item" to="about" smooth={true}>
            About
          </NavLink>
          <NavLink className="menu-item" to="education" smooth={true}>
            Education
          </NavLink>
          <NavLink className="menu-item" to="experience" smooth={true}>
            Experience
          </NavLink>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="skills" smooth={true}>
            Skills
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
        {/* <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://drive.google.com/file/d/1LExy6F3hmUVBAX9xUe_hX7kUrs8xGAKu/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn> */}
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
