import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

function Contact() {
  return (
    <div className="px-20" id="contact">
      <div className="h-40 pt-10 flex items-center justify-center">
        <h5 className=" fade-in-top italic text-3xl text-blue_night">
          CONTACT
        </h5>
      </div>

      <div className="h-20 flex items-center justify-center mb-2">
        <a
          className=""
          target="_blank"
          rel="noreferrer"
          href="https://github.com/fdippiton"
        >
          <BsGithub className="w-6 h-6 mr-3 text-blue_night" />
        </a>
        <a
          className="w-6 h-6 mr-3"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/francina-dippiton/"
        >
          <BsLinkedin className="w-6 h-6 mr-3 text-blue_night" />
        </a>
        <a
          className="social  w-6 h-6"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/fdippiton/"
        >
          <FiInstagram className="w-6 h-6 mr-3 text-blue_night" />
        </a>
      </div>

      <div className="text-center h-20">
        <a
          className="py-4 px-10 shadow-lg rounded-xl bg-light_pink text-blue_night hover:bg-blue_night hover:text-banana_maria"
          href="mailto:francina.dippiton@gmail.com?subject=Job%20offer"
        >
          Contact Me - Email
        </a>
        {/* <p className="mt-4">Copyright 2023, Jobboard Site</p>  */}
      </div>
    </div>
  );
}

export default Contact;
