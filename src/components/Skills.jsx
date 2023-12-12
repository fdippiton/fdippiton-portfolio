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
  return (
    <div className=" px-20 mx-0" id="skills">
      <div className="h-52 flex items-center justify-center drop-shadow-xl">
        <h5 className=" fade-in-top italic text-3xl text-blue_night">SKILLS</h5>
      </div>

      <div className="mt-5 flex flex-row justify-center flex-wrap">
        <table className="border-collapse border shadow-lg">
          <tbody>
            <tr className="cursor-pointer">
              <td className="table_row border border-slate-300 py-10 px-24 w-52 bg-light_pink">
                <h1 className="text-center w-32 h-20">
                  <span>
                    {
                      <ImHtmlFive className="mx-auto mb-2 text-blue_night w-12 h-12" />
                    }
                  </span>
                  HTML
                </h1>
              </td>

              <td className="border border-slate-300 py-10 px-24 w-52 bg-light_pink">
                <h1 className="text-center w-32 h-20">
                  <span>
                    {
                      <ImCss3 className="mx-auto mb-2 text-blue_night w-12 h-12" />
                    }
                  </span>
                  CSS
                </h1>
              </td>

              <td className="border border-slate-300 py-10 px-24 w-52 bg-light_pink">
                <h1 className="text-center w-32 h-20">
                  <span>
                    {
                      <SiJavascript className="mx-auto mb-2 text-blue_night w-12 h-12" />
                    }
                  </span>
                  JavaScript
                </h1>
              </td>
            </tr>

            <tr className="cursor-pointer">
              <td className="border border-slate-300 py-10 px-24 w-52 bg-light_pink">
                <h1 className="text-center w-32 h-20">
                  <span>
                    {
                      <SiPython className="mx-auto mb-2 text-blue_night w-12 h-12" />
                    }
                  </span>
                  Python
                </h1>
              </td>

              <td className="border border-slate-300 py-10 px-24 w-52 bg-light_pink">
                <h1 className="text-center w-32 h-20">
                  <span>
                    {
                      <SiFlask className="mx-auto mb-2 text-blue_night w-12 h-12" />
                    }
                  </span>
                  Flask
                </h1>
              </td>
              <td className="border border-slate-300 py-10 px-24 w-52 bg-light_pink">
                <h1 className="text-center w-32 h-20">
                  <span>
                    {
                      <SiMysql className="mx-auto mb-2 text-blue_night w-12 h-12" />
                    }
                  </span>
                  Mysql
                </h1>
              </td>
            </tr>

            <tr className="cursor-pointer">
              <td className="border border-slate-300 py-10 px-24 w-52 bg-light_pink">
                <h1 className="text-center w-32 h-20">
                  <span>
                    {
                      <BsGit className="mx-auto mb-2 text-blue_night w-12 h-12" />
                    }
                  </span>
                  Git
                </h1>
              </td>
              <td className="border border-slate-300 py-10 px-24 w-52 bg-light_pink">
                <h1 className="text-center w-32 h-20">
                  <span>
                    {
                      <SiBootstrap className="mx-auto mb-2 text-blue_night w-12 h-12" />
                    }
                  </span>
                  Bootstrap
                </h1>
              </td>
              <td className="border border-slate-300 py-10 px-24 w-52 bg-light_pink">
                <h1 className="text-center w-32 h-20">
                  <span>
                    {
                      <FaReact className="mx-auto mb-2 text-blue_night w-12 h-12" />
                    }
                  </span>
                  React
                </h1>
              </td>
            </tr>

            <tr className="cursor-pointer">
              <td className="border border-slate-300 py-10 px-24 w-52 bg-light_pink">
                <h1 className="text-center w-32 h-20">
                  <span>
                    {
                      <SiJquery className="mx-auto mb-2 text-blue_night w-12 h-12" />
                    }
                  </span>
                  JQuery
                </h1>
              </td>
              <td className="border border-slate-300 py-10 px-24 w-52 bg-light_pink">
                <h1 className="text-center w-32 h-20">
                  <span>
                    {
                      <FaSass className="mx-auto mb-2 text-blue_night w-12 h-12" />
                    }
                  </span>
                  Sass
                </h1>
              </td>
              <td className="border border-slate-300 py-10 px-24 w-52 bg-light_pink">
                <h1 className="text-center w-32 h-20">
                  <span>
                    {
                      <SiTailwindcss className="mx-auto mb-2 text-blue_night w-12 h-12" />
                    }
                  </span>
                  Tailwind CSS
                </h1>
              </td>
            </tr>
            <tr className="cursor-pointer">
              <td className="border border-slate-300 py-10 px-24 w-52 bg-light_pink">
                <h1 className="text-center w-32 h-20">
                  <span>
                    {
                      <SiCsharp className="mx-auto mb-2 text-blue_night w-12 h-12" />
                    }
                  </span>
                  C#
                </h1>
              </td>
              <td className="border border-slate-300 py-10 px-24 w-52 bg-light_pink">
                <h1 className="text-center w-32 h-20">
                  <span>
                    {
                      <SiDotnet className="mx-auto mb-2 text-blue_night w-12 h-12" />
                    }
                  </span>
                  .Net Core
                </h1>
              </td>
              <td className="border border-slate-300 py-10 px-24 w-52 bg-light_pink">
                <h1 className="text-center w-32 h-20">
                  <span>
                    {
                      <SiMicrosoftsqlserver className="mx-auto mb-2 text-blue_night w-12 h-12" />
                    }
                  </span>
                  SQL Server
                </h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Skills;
