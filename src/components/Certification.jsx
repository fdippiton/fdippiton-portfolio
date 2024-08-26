import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dataCertifications } from "../data/dataCertifications";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

function Certification() {
  return (
    <div className="h-fit p-2 mx-auto px-20" id="certifications">
      <div className="h-48 flex items-center justify-center">
        <h5 className="fade-in-top italic text-3xl text-electric_blue">
          CERTIFICATIONS
        </h5>
      </div>
      <div className="flex flex-wrap -m-4">
        {dataCertifications.map((certification) => (
          <div
            className="w-full md:w-1/3 p-4"
            key={certification.certification_name}
          >
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
              <h1 className="text-2xl font-bold text-electric_blue cursor-pointer">
                {certification.certification_name}
              </h1>
              <h2 className="text-sm text-electric_blue">
                {certification.intitution}
              </h2>
              <strong>
                <p className="text-xs mb-2 text-electric_blue">
                  Credential ID: {certification.credential}
                </p>
              </strong>
              <Link
                to={certification.certification_url}
                target="_blank"
                rel="noreferrer"
                className="ext-link text-sm text-electric_blue flex"
              >
                <FaExternalLinkSquareAlt
                  style={{
                    height: "20px",
                    width: "20px",
                    color: "blue",
                  }}
                  className="mr-2"
                />
                See certificate
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certification;
