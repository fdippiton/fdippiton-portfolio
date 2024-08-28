import francina_profile from "../assets/francina_profile.jpg";
import { FaLocationDot } from "react-icons/fa6";
import "../index.css";

/* -------------------------------------------------------------------------- */
/*                               HERO COMPONENT                               */
/* -------------------------------------------------------------------------- */

const Hero = () => {
  return (
    <>
      {/* ---------------------------------- Hero ---------------------------------- */}
      <div className="container h-auto mx-auto px-5 md:px-20">
        <div className="flex flex-col md:flex-row items-center">
          {/* ---------------------------- Hero - Main title --------------------------- */}
          <div className="flex flex-col justify-center items-center md:items-start md:basis-9/12 mt-20 text-center md:text-left">
            <h2 className="fade-in-top text-4xl md:text-5xl mb-4 text-electric_blue drop-shadow-3xl main_font font-bold">
              Francina Dippiton.
            </h2>
            <p className="hero-description fade-in-top italic text-lg text-electric_blue">
              Aspiring Computer Systems Engineer.
            </p>
            <span className="flex items-center text-xs italic text-electric_blue mt-2">
              <FaLocationDot className="mr-2" /> Dominican Republic.
            </span>
          </div>

          {/* ------------------------------- Hero image ------------------------------- */}
          <div className="flex justify-center md:justify-end pt-10 md:pt-20">
            <img
              className="w-48 md:w-72 rounded-full animate__animated animate__zoomIn drop-shadow-3xl"
              id="img-profile"
              src={francina_profile}
              alt="Francina Dippiton"
            />
          </div>
        </div>
      </div>

      {/* ------------------------------ Moving skills ----------------------------- */}
      <div className="moving-skill-container h-16 flex items-center mt-10 bg-electric_blue overflow-hidden ">
        <div
          className="moving-skill-wrapper"
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            animation: "moveLeft 30s linear infinite",
          }}
        >
          <span className="skill-item text-md text-light_pink main_font pr-4">
            HTML CSS Bootstrap React Github Git Python JavaScript Flask MYSQL
            Oracle SQLServer
          </span>
          <span className="skill-item text-md text-light_pink main_font pr-4">
            HTML CSS Bootstrap React Github Git Python JavaScript Flask MYSQL
            Oracle SQLServer
          </span>
          <span className="skill-item text-md text-light_pink main_font pr-4">
            HTML CSS Bootstrap React Github Git Python JavaScript Flask MYSQL
            Oracle SQLServer
          </span>
          <span className="skill-item text-md text-light_pink main_font pr-4">
            HTML CSS Bootstrap React Github Git Python JavaScript Flask MYSQL
            Oracle SQLServer
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
