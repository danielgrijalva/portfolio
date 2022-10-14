import {
  A3Image,
  DatasetsImage,
  GhostwriterImage,
  OverworldImage,
  PortfolioImage,
  ScrapersImage,
} from "../../media";
import { ProjectCard } from "./ProjectCard";
import classes from "./Projects.module.css";

export const Projects = () => {
  return (
    <div className={classes.projects}>
      <ProjectCard
        title="Portfolio"
        description="This website!"
        image={PortfolioImage}
        link={"https://github.com/danielgrijalva/portfolio"}
        tools={["ReactJS", "TailwindCSS"]}
      />
      <ProjectCard
        title="Sistema A3"
        description="An ERP web application for a real estate company"
        image={A3Image}
        link="https://www.sistemaa3.com/propiedades/venta"
        tools={["Django", "JavaScript", "AWS S3", "Heroku"]}
      />
      <ProjectCard
        title="Overworld"
        description="A gaming tool to track your played games"
        image={OverworldImage}
        link="https://github.com/danielgrijalva/overworld"
        tools={["Django", "ReactJS", "Redux", "Heroku"]}
      />
      <ProjectCard
        title="Web scraping"
        description="I've build several web scrapers for many clients"
        image={ScrapersImage}
        link="https://github.com/danielgrijalva/infocasas"
        tools={["Python", "Selenium", "BeautifulSoup"]}
      />
      <ProjectCard
        title="Ghostwriter"
        description="An AI tool for writers"
        image={GhostwriterImage}
        link="https://github.com/danielgrijalva/ghostwriter"
        tools={["Python", "Keras", "Vue.js"]}
      />
      <ProjectCard
        title="Datasets"
        description="I like to build datasets and answer questions with data"
        image={DatasetsImage}
        link="https://www.kaggle.com/danielgrijalvas"
        tools={["Python", "Pandas"]}
      />
    </div>
  );
};
