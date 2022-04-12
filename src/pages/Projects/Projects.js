import { ProjectCard } from "./ProjectCard";
import classes from "./Projects.module.css";

export const Projects = () => {
  return (
    <div className={classes.projects}>
      <ProjectCard
        title="Portfolio"
        description="This website!"
        image="portfolio.webp"
        link={"https://github.com/danielgrijalva/portfolio"}
        tools={["ReactJS", "TailwindCSS"]}
      />
      <ProjectCard
        title="Sistema A3"
        description="An ERP web application for a real estate company"
        image="a3.webp"
        link="https://www.sistemaa3.com/propiedades/venta"
        tools={["Django", "JavaScript", "AWS S3", "Heroku"]}
      />
      <ProjectCard
        title="Overworld"
        description="A gaming tool to track your played games"
        image="overworld.webp"
        link="https://github.com/danielgrijalva/overworld"
        tools={["Django", "ReactJS", "Redux", "Heroku"]}
      />
      <ProjectCard
        title="Web scraping"
        description="I've build several web scrapers for many clients"
        image="scrapers.webp"
        link="https://github.com/danielgrijalva/infocasas"
        tools={["Python", "Selenium", "BeautifulSoup"]}
      />
      <ProjectCard
        title="Ghostwriter"
        description="An AI tool for writers"
        image="ghostwriter.webp"
        link="https://github.com/danielgrijalva/ghostwriter"
        tools={["Python", "Keras", "Vue.js"]}
      />
      <ProjectCard
        title="Datasets"
        description="I like to build datasets"
        image="datasets.webp"
        link="https://www.kaggle.com/danielgrijalvas"
        tools={["Python", "Pandas"]}
      />
    </div>
  );
};
