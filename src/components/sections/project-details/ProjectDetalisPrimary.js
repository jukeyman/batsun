"use client";
import ProjectSidebar from "@/components/shared/sidebars/ProjectSidebar";
import getAllProjects from "@/libs/getAllProjects";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const ProjectDetalisPrimary = () => {
  const projects = getAllProjects();
  const totalProjects = projects?.length;
  const { id: currnetIdString } = useParams();
  const currentId = currnetIdString ? parseInt(currnetIdString) : null;
  const currentProjects = projects?.filter(({ id }) =>
    currentId > 3 && currentId < 7
      ? id > 3 && id < 7
      : currentId === 1
      ? id < 4
      : currentId === 3
      ? (id > 1 && id < 4) || id === 7
      : currentId === 7
      ? id === 3 || (id > 6 && id < 9)
      : currentId === totalProjects
      ? id > currentId - 3
      : id > currentId - 2 && id < currentId + 2
  );
  const [currentProject, setCurrentProject] = useState(
    currentProjects?.find(({ id }) => id === currentId)
  );
  const { title } = currentProject;
  return (
    <div className="project__details sp_top_140 sp_bottom_140">
      <div className="container">
        <div className="project__details__bottom__border">
          <div className="row">
            <ProjectSidebar />
            <div className="col-xl-8 col-xl-8 col-lg-8 col-md-12 col-12">
              <div className="project__details__wraper">
                <div
                  className="projects__tap__wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div
                    className="tab-content tab__content__wrapper"
                    id="myTabContent"
                  >
                    {currentProjects?.map(({ img, detailsImg, id }, idx) => (
                      <div
                        key={idx}
                        className={`tab-pane fade  ${
                          id === currentId ? "active show" : ""
                        }`}
                        id={`projects__${id}`}
                        role="tabpanel"
                        aria-labelledby={`projects__${id}`}
                      >
                        <div className="projects__img">
                          <Image src={detailsImg} alt="" placeholder="blur" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <ul
                        className="nav  projects__nav__wrap"
                        id="myTab"
                        role="tablist"
                      >
                        {currentProjects?.map((project, idx) => {
                          const { img, detailsImg, id } = project;
                          return (
                            <li
                              onClick={() => setCurrentProject(project)}
                              key={idx}
                              className="nav-item"
                              role="presentation"
                            >
                              <button
                                className={`projects__tab__link  ${
                                  id === currentId ? "active " : ""
                                }`}
                                data-bs-toggle="tab"
                                data-bs-target={`#projects__${id}`}
                              >
                                <Image src={detailsImg} alt="projectsimg" />
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="service__details__heading"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <h4>{title}</h4>
                </div>
                <div
                  className="service__details__text"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <p>
                    Our AI implementation projects focus on delivering tangible business value through 
                    strategic automation and intelligent systems. We work with organizations across 
                    industries to identify high-impact opportunities for AI adoption and create 
                    customized solutions that drive efficiency and growth.
                  </p>
                  <p>
                    Each project begins with a comprehensive assessment of current processes, 
                    technology infrastructure, and business objectives. This allows us to develop 
                    targeted solutions that address specific pain points while aligning with your 
                    long-term strategic goals.
                  </p>
                </div>
                <div
                  className="project__details__challenges"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="project__details__challenges__heading">
                    <h6>Project Challenges:</h6>
                  </div>
                  <p>
                    Common challenges we address include legacy system integration, data quality 
                    and standardization, staff training and adoption, and ensuring seamless 
                    transition without disrupting ongoing operations. Our experienced team has 
                    developed proven methodologies to overcome these challenges while maintaining 
                    project timelines and budgets.
                  </p>
                  <p className="project__details__challenges__text">
                    We prioritize change management and user adoption throughout the implementation 
                    process. This includes comprehensive training programs, detailed documentation, 
                    and ongoing support to ensure your team can effectively utilize and maintain 
                    the new AI systems. Our goal is to empower your organization to maximize the 
                    benefits of AI technology independently.
                  </p>
                </div>
                <div
                  className="project__details__button"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <Link className="default__button" href="#">
                    PREV.PROJECT
                  </Link>
                  <Link className="default__button" href="#">
                    NEXT.PROJECT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetalisPrimary;
