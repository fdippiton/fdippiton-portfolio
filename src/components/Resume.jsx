import { IoDownloadOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";

/* -------------------------------------------------------------------------- */
/*                              RESUME COMPONENT                              */
/* -------------------------------------------------------------------------- */

const Resume = () => {
  return (
    <div className="px-20 " id="resume">
      <div className="h-40 pt-10 flex items-center justify-center">
        <h5 className=" fade-in-top italic text-center text-3xl text-electric_blue">
          RESUME & CONTACT
        </h5>
      </div>

      <div className="h-10 flex items-center justify-center">
        <a
          className="py-2 px-10 shadow-lg text-xs  text-electric_blue hover:bg-casablanca hover:text-electric_blue rounded-md font-semibold"
          href="documento.pdf"
          download="francina-resume.pdf"
        >
          <span className="flex items-center">
            <IoDownloadOutline className="mr-2" /> Download Resume
          </span>
        </a>
      </div>

      <div className="h-20 flex items-center justify-center mb-5 ">
        <a
          className="py-2 px-10 shadow-lg text-xs  text-electric_blue hover:bg-casablanca hover:text-electric_blue rounded-md font-semibold"
          href="mailto:francina.dippiton@gmail.com?subject=Job%20offer"
        >
          <span className="flex items-center">
            <HiOutlineMailOpen className="mr-2" /> Contact Me - Email
          </span>
        </a>
      </div>
    </div>
  );
};

export default Resume;
