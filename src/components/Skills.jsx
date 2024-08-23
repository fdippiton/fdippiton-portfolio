import { ImHtmlFive, ImCss3 } from "react-icons/im";
import {
  SiJavascript,
  SiPython,
  SiFlask,
  SiMysql,
  SiBootstrap,
  SiJquery,
  SiTailwindcss,
  SiCsharp,
  SiDotnet,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { FaReact, FaSass } from "react-icons/fa";
import "../styles/Skills.css";

function Skills() {
  const skills = [
    { icon: <ImHtmlFive className="w-12 h-12" />, label: "HTML" },
    { icon: <ImCss3 className="w-12 h-12" />, label: "CSS" },
    { icon: <SiJavascript className="w-12 h-12" />, label: "JavaScript" },
    { icon: <SiPython className="w-12 h-12" />, label: "Python" },
    { icon: <SiFlask className="w-12 h-12" />, label: "Flask" },
    { icon: <SiMysql className="w-12 h-12" />, label: "MySQL" },
    { icon: <SiCsharp className="w-12 h-12" />, label: "C#" },
    { icon: <BsGit className="w-12 h-12" />, label: "Git" },
    { icon: <SiBootstrap className="w-12 h-12" />, label: "Bootstrap" },
    { icon: <FaReact className="w-12 h-12" />, label: "React" },
    { icon: <SiJquery className="w-12 h-12" />, label: "JQuery" },
    { icon: <FaSass className="w-12 h-12" />, label: "Sass" },
    { icon: <SiTailwindcss className="w-12 h-12" />, label: "Tailwind CSS" },
    { icon: <SiDotnet className="w-12 h-12" />, label: ".Net Core" },
    {
      icon: <SiMicrosoftsqlserver className="w-12 h-12" />,
      label: "SQL Server",
    },
  ];
  return (
    <div className=" px-20 mx-0" id="skills">
      <div className="h-44 flex items-center justify-center drop-shadow-xl">
        <h5 className=" fade-in-top italic text-3xl text-electric_blue">
          SKILLS
        </h5>
      </div>

      <div className="mt-5 flex flex-wrap justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center m-2 w-32 h-32 cursor-pointer"
          >
            <div className="text-electric_blue">{skill.icon}</div>
            <strong className="text-electric_blue text-sm">
              {skill.label}
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
