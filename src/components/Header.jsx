import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-20 flex justify-center items-center">
      {/* Menu */}
      <ul className="nav nav-pills flex">
        <li className="nav-item pr-5 text-blue_night">
          <a className="nav-link cursor-pointer" href="#home">
            HOME
          </a>
        </li>

        <li className="nav-item pr-5 text-blue_night">
          <a className="nav-link cursor-pointer text-blue_night" href="#about">
            ABOUT
          </a>
        </li>

        <li className="nav-item pr-5 text-blue_night">
          <a className="nav-link cursor-pointer text-blue_night" href="#work">
            WORK
          </a>
        </li>

        <li className="nav-item pr-5">
          <a className="nav-link cursor-pointer text-blue_night" href="#skills">
            SKILLS
          </a>
        </li>

        <li className="nav-item pr-5">
          <a className="nav-link cursor-pointer text-blue_night" href="#resume">
            RESUME
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link cursor-pointer text-blue_night"
            href="#contact"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
