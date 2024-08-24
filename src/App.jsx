import Home from "./components/Home";

import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Project from "./components/Project";

function App() {
  return (
    <div className="scrollable-content">
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/fdippiton-portfolio" element={<Home />} />
            <Route
              path="/fdippiton-portfolio/project/:id/:project_name"
              element={<Project />}
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
