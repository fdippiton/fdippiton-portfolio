import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { workData } from "../data/dataList";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";

function Project() {
  const { id } = useParams();
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    if (id) {
      const project = workData.find((p) => p.id === parseInt(id));
      setCurrentProject(project);
    }
  }, [id]);

  if (!currentProject) {
    return <div>Loading...</div>;
  }

  // Crear una función para obtener la URL de la imagen
  const getImageSrc = (imageName) => {
    // Suponiendo que las imágenes están en public/assets
    return `/src/assets/${imageName}`;
  };

  return (
    <div className="h-fit p-8">
      <h1 className="mb-2 text-4xl font-bold text-electric_blue">
        {currentProject.project_name}
      </h1>
      <h2 className="text-sm text-electric_blue">
        {currentProject.project_description}
      </h2>
      <strong>
        <p className="text-xs mb-2 text-electric_blue">
          {currentProject.technologies_used}
        </p>
      </strong>

      <div className="flex items-center">
        <a
          href={currentProject.github_url}
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
          href={currentProject.url}
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

      <div>
        {currentProject.images && (
          <div>
            <img
              className="h-fit w-full"
              src={getImageSrc(currentProject.images[0])}
              alt={currentProject.project_name}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
