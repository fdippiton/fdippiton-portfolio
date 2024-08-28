import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Certification from "./Certification";
import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Skills from "./Skills";
import Resume from "./Resume";

/* -------------------------------------------------------------------------- */
/*                               HOME COMPONENT                               */
/* -------------------------------------------------------------------------- */

const Home = () => {
  const { pathname, hash } = useLocation();

  /* The `useEffect` hook in the `Home` component is used to perform side effects in function
 components. In this specific case, the `useEffect` hook is checking the current location
 (`pathname` and `hash`) and scrolling the page accordingly based on the route. */
  useEffect(() => {
    // Verifica si estás en la ruta de Home
    if (pathname === "/fdippiton-portfolio") {
      // Si hay un hash, desplázate al elemento correspondiente
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Si no hay hash, asegúrate de estar al inicio
        window.scrollTo(0, 0);
      }
    } else if (pathname.startsWith("/fdippiton-portfolio/project/")) {
      // Para rutas de proyecto, desplázate al inicio
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="w-full" id="home">
      <Hero />
      <About />
      <Work />
      <Skills />
      <Certification />
      <Resume />
    </div>
  );
};

export default Home;
