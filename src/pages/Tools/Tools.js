import classes from "./Tools.module.css";
import { Card } from "../../components";

export const Tools = () => {
  return (
    <div className={classes.tools}>
      <Card className={classes.tool}>
        <img src={process.env.PUBLIC_URL + "icons/python.svg"} alt="Python" />
        Python
      </Card>
      <Card className={classes.tool}>
        <img src={process.env.PUBLIC_URL + "icons/js.svg"} alt="JavaScript" />
        JavaScript
      </Card>
      <Card className={classes.tool}>
        <img src={process.env.PUBLIC_URL + "icons/react.svg"} alt="React" />
        React
      </Card>
      <Card className={classes.tool}>
        <img src={process.env.PUBLIC_URL + "icons/django.svg"} alt="Django" />
        Django
      </Card>
      <Card className={classes.tool}>
        <img src={process.env.PUBLIC_URL + "icons/git.svg"} alt="Git" />
        Git
      </Card>
      <Card className={classes.tool}>
        <img src={process.env.PUBLIC_URL + "icons/html.svg"} alt="HTML" />
        HTML
      </Card>
      <Card className={classes.tool}>
        <img src={process.env.PUBLIC_URL + "icons/css.svg"} alt="CSS" />
        CSS
      </Card>
      <Card className={classes.tool}>
        <img src={process.env.PUBLIC_URL + "icons/heroku.svg"} alt="Heroku" />
        Heroku
      </Card>
      <Card className={classes.tool}>
        <img src={process.env.PUBLIC_URL + "icons/aws.svg"} alt="AWS" />
        AWS S3
      </Card>
    </div>
  );
};
