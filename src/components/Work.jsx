import { workData } from "../data/dataList";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";

function Work() {
  return (
    <div className="mx-auto px-20 h-auto" id="work">
      <div className="h-52 flex items-center justify-center">
        <h5 className=" fade-in-top italic text-3xl text-blue_night">WORK</h5>
      </div>

      <div className=" flex flex-wrap justify-evenly">
        {workData.map((project) => {
          return (
            <div
              key={project.id}
              className=" mb-8 w-96 cursor-pointer hover:scale-110"
            >
              <div className="">
                <div
                  className="rounded-lg shadow-lg  animate__animated animate__slideInUp"
                  style={{ minHeight: "250px" }}
                >
                  <div
                    className="card-body rounded-t-lg bg-blue_night"
                    style={{ height: "30px" }}
                  ></div>

                  <div
                    className="bg-light_pink"
                    style={{
                      height: "30px",
                    }}
                  ></div>

                  <div className="pr-4 pl-4 pb-4">
                    <h6 className="mb-2 mt-3">
                      <b>{project.project_name}</b>
                    </h6>
                    <p className="mb-2">{project.project_description}</p>
                    <p className="text-sm mb-2">{project.technologies_used}</p>

                    <div className="flex">
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
                              color: "black",
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
                              color: "black",
                            }}
                          />
                        }
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
