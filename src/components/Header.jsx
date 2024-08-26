import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Importar el ícono del menú
import "../index.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Manejar clic fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="h-20 flex justify-between items-center px-5 max-w-full overflow-hidden">
      <div className="text-electric_blue text-2xl">
        {" "}
        <Link
          className="nav-link cursor-pointer"
          to={`/fdippiton-portfolio#home`}
        >
          Fran.cs
        </Link>
      </div>

      <div
        className="lg:hidden cursor-pointer text-electric_blue text-3xl"
        onClick={toggleMenu}
      >
        <FaBars /> {/* Ícono del menú para dispositivos pequeños */}
      </div>

      <ul
        ref={menuRef}
        className={`nav_menu nav-pills flex-col lg:flex-row lg:flex ${
          isOpen ? "flex" : "hidden"
        } lg:flex items-center`}
        onClick={closeMenu} // Cerrar el menú al hacer clic en un enlace
      >
        <li className="nav-item py-2 lg:pr-5 text-electric_blue">
          <Link
            className="nav-link cursor-pointer"
            to={`/fdippiton-portfolio#home`}
          >
            HOME
          </Link>
        </li>
        <li className="nav-item py-2 lg:pr-5 text-electric_blue">
          <Link
            className="nav-link cursor-pointer"
            to={`/fdippiton-portfolio#about`}
          >
            ABOUT
          </Link>
        </li>
        <li className="nav-item py-2 lg:pr-5 text-electric_blue">
          <Link
            className="nav-link cursor-pointer"
            to={`/fdippiton-portfolio#work`}
          >
            WORK
          </Link>
        </li>
        <li className="nav-item py-2 lg:pr-5 text-electric_blue">
          <Link
            className="nav-link cursor-pointer"
            to={`/fdippiton-portfolio#skills`}
          >
            SKILLS
          </Link>
        </li>
        <li className="nav-item py-2 lg:pr-5 text-electric_blue">
          <Link
            className="nav-link cursor-pointer"
            to={`/fdippiton-portfolio#resume`}
          >
            RESUME
          </Link>
        </li>
        <li className="nav-item py-2 lg:pr-5 text-electric_blue">
          <Link
            className="nav-link cursor-pointer"
            to={`/fdippiton-portfolio#contact`}
          >
            CONTACT
          </Link>
        </li>
        <li className="nav-item py-2  text-electric_blue">
          <Link
            className="nav-link cursor-pointer"
            to={`/fdippiton-portfolio#certifications`}
          >
            CERTIFICATIONS
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
