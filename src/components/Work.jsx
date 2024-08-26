import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { workData } from "../data/dataList";
import "../styles/Work.css";

function Work() {
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const cardRefs = useRef({}); // Usado para almacenar referencias a los elementos

  const handleMouseMove = (event, id) => {
    const rect = cardRefs.current[id].getBoundingClientRect();
    setPointerPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = (id) => {
    setActiveCard(id);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <div className="mx-auto px-20 h-auto" id="work">
      <div className="h-40 flex items-center justify-center">
        <h5 className="fade-in-top italic text-3xl text-electric_blue">
          WORK & EXPERIENCE
        </h5>
      </div>

      <div className="flex flex-wrap w-full">
        {workData.map((project) => {
          return (
            <Link
              to={`/fdippiton-portfolio/project/${project.id}/${project.project_name}`}
              key={project.id}
              className="container_pointer py-4 pr-4 h-fit w-full border-electric_blue hover:bg-casablanca hover:p-10 cursor-pointer"
              style={{ borderBottom: "1px solid blue" }}
              ref={(el) => (cardRefs.current[project.id] = el)}
              onMouseMove={(e) => handleMouseMove(e, project.id)}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <h1 className="mb-2 text-4xl font-bold text-electric_blue">
                {project.project_name}
              </h1>
              <h2 className="text-sm text-electric_blue">
                {project.project_description}
              </h2>
              <strong>
                <p className="text-xs mb-2 text-electric_blue">
                  {project.technologies_used}
                </p>
              </strong>

              <div className="flex items-center">
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noreferrer"
                  className="ext-link mr-2"
                >
                  {
                    <BsGithub
                      style={{
                        height: "20px",
                        width: "20px",
                        color: "blue",
                      }}
                    />
                  }
                </a>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="ext-link"
                >
                  {
                    <HiOutlineExternalLink
                      style={{
                        height: "23px",
                        width: "24px",
                        color: "blue",
                      }}
                    />
                  }
                </a>
              </div>
              {activeCard === project.id && (
                <div
                  className="red_pointer"
                  style={{
                    left: `${pointerPosition.x}px`,
                    top: `${pointerPosition.y}px`,
                  }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
