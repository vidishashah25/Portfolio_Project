import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/home.css"
import vidi from "../assets/vidi1.png"
import code from "../assets/code.png"

interface Project {
  title: string;
  description: string;
  imageSrc: string;
  url: string;
}

function Home() {

  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<string[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const language = i18n.language;
        const response = await fetch(`/locales/${language}/translation.json`);
        const data = await response.json();

        const translatedProjects = data.projects.map((project: Project) => ({
          ...project,
          title: t(project.title),
          description: t(project.description)
        }));

        setProjects(translatedProjects);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };
    const fetchSkills = async () => {
      try {
        const language = i18n.language;
        const response = await fetch(`/locales/${language}/translation.json`);
        const data = await response.json();
        setSkills(data.skills.map((skill: string) => t(skill)));
      } catch (error) {
        console.error("Error fetching skills data:", error);
      }
    };

    fetchSkills();
    fetchProjects();
  }, [t, i18n.language]);

  const handleButtonClick = () => {
    const language = i18n.language;
    const pdfURL = `./pdf/${language}/cv.pdf`;
    window.open(pdfURL, "_blank");
  };

  return (
    <div className="main-container">
      <div className="header-container">
        <img className={`rounded-full self-center h-40 w-40 grayscale m-10`} src={vidi} />
        <h4 className="text-white text-center text-xl font-bold ">{t("name")}</h4>
        <p className="text-stone-400 text-center text-lg">{t("position")}</p>
        <p className="text-stone-400 text-center text-m m-6">{t("desc")}</p>
        <div className="self-center flex gap-4 m-4">
          <a href="https://github.com/vidishashah25" target="_blank" >
            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 496 512" >
              <path fill="#d8d4d4" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
          <a href="https://github.com/vidishashah25" target="_blank" >
            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 448 512">
              <path fill="#d8d4d4" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
            </svg>
          </a>
        </div>
        <button
          onClick={handleButtonClick}
          className="bg-stone hover:bg-teal-800 text-gray-200 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-6">Download CV </button>
      </div>
      <div className="home-container">
        <div className="content-container">
          <div className="flex m-20">
            <div className="text-white self-center">
              <p className="text-5xl font-semibold">{t("heading1")}</p>
              <p className="mt-4 text-lg">{t("subheading")}</p>
            </div>
            <img src={code} alt="" className="w-40 h-40 ml-4" />
          </div>
          <h2 id="about" className="text-white ml-20 text-2xl font-semibold">{t("heading2")}</h2>
          <p className="text-white ml-20 mt-6">{t("about")}</p>
          <h2 id="skills" className="text-white ml-20 mt-6 text-2xl font-semibold">{t("heading3")}</h2>
          <ul className="flex flex-wrap ml-20 mt-6 gap-4">
            {skills.map((skill, index) => (
              <li className="text-white border  border-gray-400 w-fit py-1 px-2 bg-stone hover:bg-teal-900 " key={index}>{skill}</li>
            ))}
          </ul>
          <h2 id="project" className="text-white ml-20 mt-6 text-2xl font-semibold">{t("heading4")}</h2>
          <section className="flex flex-col ml-20 mt-6 mb-6 gap-4">
            {
              projects.map((project: Project, index: number) => (
                <a key={index} className="md:flex border border-gray-400 rounded-lg px-2 py-2 hover:bg-neutral-700 h-40 items-center gap-3" href={project.url} target="_blank">
                  <div className="p-2 md:flex-shrink-0">
                    <img
                      src={project.imageSrc}
                      alt="Woman paying for a purchase"
                      className="rounded-lg w-32 h-34 self-center"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="uppercase text-sm text-white font-bold">
                      {project.title}
                    </div>

                    <p className="mt-2 text-white">
                      {project.description}
                    </p>

                  </div>
                </a>
              ))
            }
          </section>

          <p id="contact" className="m-2">.</p>
        </div>
      </div>

      {/* <h1 className="text-3xl font-bold underline">{t("greeting.title")}</h1>
      <p>{t("greeting.message")}</p> */}
      {/* {projects.map((project: Project, index: number) => (
        <div key={index}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.url}>Go to project</a>
        </div>
      ))}
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default Home
