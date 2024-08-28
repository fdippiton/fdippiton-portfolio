import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

/* -------------------------------------------------------------------------- */
/*                               ABOUT COMPONENT                              */
/* -------------------------------------------------------------------------- */
const About = () => {
  return (
    <div className="mx-auto px-20 h-auto text-blue_night" id="about">
      {/* ---------------------------------- Title
        --------------------------------- */}
      <div className="h-52  flex items-center justify-center">
        <h5 className=" fade-in-top italic text-3xl text-electric_blue">
          ABOUT ME
        </h5>
      </div>
      <div className="mb-10">
        <p className="font-medium md:text-xl sm:text-3xl fade-in-top leading-10 text-justify text-electric_blue">
          I&apos;m an aspiring full-stack developer and
          <b> Computer Systems Engineer</b>. I&apos;m passionate about tech and
          that&apos;s why I constantly seek to gain knowledge, improve and
          develop my skills as programmer. I also enjoy to be in nature and
          learn Norwegian.
        </p>
      </div>
      {/* ------------------------------ Social Medias
      ----------------------------- */}
      <div className="flex">
        <a
          className="hover:text-red hover:scale-110 p-2 mr-3 text-electric_blue border border-electric_blue hover:border-red rounded-full"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/fdippiton"
        >
          <BsGithub className="w-7 h-7" />
        </a>
        <a
          className=" hover:text-red hover:scale-110 p-2 mr-3 text-electric_blue border border-electric_blue hover:border-red rounded-full"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/francina-dippiton/"
        >
          <BsLinkedin className="w-7 h-7" />
        </a>
        <a
          className="hover:text-red hover:scale-110 p-2 text-electric_blue border border-electric_blue hover:border-red rounded-full"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/fdippiton/"
        >
          <FiInstagram className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
};

export default About;
