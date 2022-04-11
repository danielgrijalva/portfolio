import { Card } from "../../components";
import classes from "./ProjectCard.module.css";

export const ProjectCard = ({ title, description, image, link, tools }) => {
  return (
    <Card className={classes.project}>
      <div className={classes.banner}>
        <img src={process.env.PUBLIC_URL + `images/${image}`} alt="" />
      </div>
      <a href={link} target="_blank" className={classes.title}>
        {title}
      </a>
      <p className={classes.description}>{description}</p>
      <div className={classes.tools}>
        {tools.map((tool) => (
          <span key={tool} className={classes.tool}>
            {tool}
          </span>
        ))}
      </div>
    </Card>
  );
};
