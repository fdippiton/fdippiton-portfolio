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
    { icon: <ImHtmlFive className="w-8 h-8" />, label: "HTML" },
    { icon: <ImCss3 className="w-8 h-8" />, label: "CSS" },
    { icon: <SiJavascript className="w-8 h-8" />, label: "JavaScript" },
    { icon: <SiPython className="w-8 h-8" />, label: "Python" },
    { icon: <SiFlask className="w-8 h-8" />, label: "Flask" },
    { icon: <SiMysql className="w-8 h-8" />, label: "MySQL" },
    { icon: <SiCsharp className="w-8 h-8" />, label: "C#" },
    { icon: <BsGit className="w-8 h-8" />, label: "Git" },
    { icon: <SiBootstrap className="w-8 h-8" />, label: "Bootstrap" },
    { icon: <FaReact className="w-8 h-8" />, label: "React" },
    { icon: <SiJquery className="w-8 h-8" />, label: "JQuery" },
    { icon: <FaSass className="w-8 h-8" />, label: "Sass" },
    { icon: <SiTailwindcss className="w-8 h-8" />, label: "Tailwind CSS" },
    { icon: <SiDotnet className="w-8 h-8" />, label: ".Net Core" },
    {
      icon: <SiMicrosoftsqlserver className="w-8 h-8" />,
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

      <h2 className="text-2xl text-electric_blue">Technical Skills</h2>
      <div className="mt-2 flex flex-wrap justify-between">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center m-4 cursor-pointer"
          >
            <div className="flex flex-col items-center text-electric_blue">
              <h1 className="mb-2">{skill.icon}</h1>
              <strong className="text-electric_blue text-xs">
                {skill.label}
              </strong>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-1/2 p-2 ">
          <table className="min-w-full bg-white ">
            <thead className="bg-electric_blue text-white ">
              <tr>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm rounded-t-lg">
                  Soft Skills
                </th>
              </tr>
            </thead>
            <tbody className="text-electric_blue  ">
              <tr>
                <td className="text-left py-3 px-4 rounded-b-lg text-xs">
                  <ul>
                    <strong>
                      <li className="mb-1">- Pay attention to detail</li>
                      <li className="mb-1">- Deep analysis capacity</li>
                      <li className="mb-1">- Self-taught</li>
                      <li className="mb-1">- Assertive communication</li>
                      <li className="mb-1">- Responsibility and effort</li>
                    </strong>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-full lg:w-1/2 p-2">
          <table className="min-w-full bg-white">
            <thead className="bg-electric_blue text-white">
              <tr>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm rounded-t-lg">
                  Languages
                </th>
              </tr>
            </thead>
            <tbody className="text-electric_blue">
              <tr>
                <td className="text-left py-3 px-4 text-xs">
                  <ul>
                    <strong>
                      <li className="mb-1">- Spanish (Native speaker)</li>
                      <li className="mb-1">- English (Intermediate)</li>
                    </strong>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Skills;
