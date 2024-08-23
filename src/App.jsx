import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="scrollable-content">
      <Home />
      <About />
      <Work />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
