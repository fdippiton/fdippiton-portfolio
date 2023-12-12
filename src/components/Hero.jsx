import francina_profile from "../assets/francina_profile.jpg";
import "../index.css";

function Hero() {
  return (
    <>
      {/* ---------------------------------- Hero ---------------------------------- */}
      <div className="container h-auto mx-auto px-20">
        <div className="flex flex-row">
          {/* ---------------------------- Hero - Main title --------------------------- */}
          <div className="basis-9/12 mt-20">
            <h2 className="mt-5 fade-in-top text-7xl font-bold text-electric_blue drop-shadow-3xl">
              Hi!
            </h2>
            <br />
            <h2 className="fade-in-top text-5xl font-bold text-electric_blue drop-shadow-3xl">
              I&apos;m{" "}
              <span className="font-semibold italic text-shadow-hero_shadows">
                Francina Dippitón!
              </span>
            </h2>
            <br />
            <h2 className="fade-in-top text-5xl mb-4 text-electric_blue drop-shadow-3xl main_font font-bold">
              A Software Developer.
            </h2>
            <p className="hero-description fade-in-top italic text-lg text-electric_blue">
              Computer System Engineering student.
            </p>
          </div>

          {/* ------------------------------- Hero image ------------------------------- */}
          <div className="flex justify-end pt-20">
            <div className="text-center">
              <img
                className="w-96 rounded-full animate__animated animate__zoomIn drop-shadow-3xl"
                id="img-profile"
                src={francina_profile}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------ Moving skills ----------------------------- */}
      <div className=" moving-skill-container h-16 flex justify-center items-center mt-10 bg-light_pink">
        <div className="moving-skill">
          <h6 className="skill-title mt-3 text-center text-2xl text-blue_night main_font">
            HTML CSS Bootstrap React Github Git Python JavaScript Flask MYSQL
            Oracle SQLServer
          </h6>
        </div>
      </div>
    </>
  );
}

export default Hero;
