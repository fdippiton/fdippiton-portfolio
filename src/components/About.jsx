import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

function About() {
  return (
    <div className="mx-auto px-20 h-auto text-blue_night" id="about">
      <div className="h-52  flex items-center justify-center">
        <h5 className=" fade-in-top italic text-3xl text-blue_night">
          ABOUT ME
        </h5>
      </div>

      {/* <div className="h-32 flex items-center">
        <h5 className="mb-32 mt-40 fade-in-top italic text-3xl">ABOUT ME</h5>
      </div> */}

      <div className="mb-10">
        <p className="font-medium text-3xl fade-in-top leading-10 text-justify">
          I&apos;m an aspiring full-stack developer and
          <b> Computer Systems Engineer</b>. I&apos;m passionate about tech and
          that&apos;s why I constantly seek to gain knowledge, improve and
          develop my skills as programmer. I also enjoy to be in nature and
          learn Norwegian.
        </p>
      </div>

      <div className="flex" style={{ height: "10%" }}>
        <a
          className="hover:text-golden_yellow hover:scale-110"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/fdippiton"
        >
          <BsGithub className="w-8 h-8 mr-3" />
        </a>
        <a
          className="w-8 h-8 mr-3 hover:text-golden_yellow hover:scale-110"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/francina-dippiton/"
        >
          <BsLinkedin className="w-8 h-8 mr-3" />
        </a>
        <a
          className="w-8 h-8 hover:text-golden_yellow hover:scale-110"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/fdippiton/"
        >
          <FiInstagram className="w-8 h-8 mr-3" />
        </a>
      </div>
    </div>
  );
}

export default About;
