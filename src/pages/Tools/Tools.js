import classes from "./Tools.module.css";
import {
  AWSIcon,
  CSSIcon,
  DjangoIcon,
  GitIcon,
  HerokuIcon,
  HTMLIcon,
  JavaScriptIcon,
  PythonIcon,
  ReactIcon,
} from "../../media/";
import { Card } from "../../components";

export const Tools = () => {
  return (
    <div className={classes.tools}>
      <Card className={classes.tool}>
        <PythonIcon /> Python
      </Card>
      <Card className={classes.tool}>
        <JavaScriptIcon /> JavaScript
      </Card>
      <Card className={classes.tool}>
        <ReactIcon /> React
      </Card>
      <Card className={classes.tool}>
        <DjangoIcon /> Django
      </Card>
      <Card className={classes.tool}>
        <GitIcon /> Git
      </Card>
      <Card className={classes.tool}>
        <HTMLIcon /> HTML
      </Card>
      <Card className={classes.tool}>
        <CSSIcon /> CSS
      </Card>
      <Card className={classes.tool}>
        <HerokuIcon /> Heroku
      </Card>
      <Card className={classes.tool}>
        <AWSIcon /> AWS S3
      </Card>
    </div>
  );
};
