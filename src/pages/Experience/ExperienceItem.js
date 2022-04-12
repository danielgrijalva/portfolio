import { ToolList } from "../../components";
import classes from "./ExperienceItem.module.css";

export const ExperienceItem = ({
  from,
  to,
  company,
  children,
  tools,
}) => {
  return (
    <li className={classes.item}>
      <div className={classes.separator}>
        <div className={classes.bullet}></div>
        <div className={classes.line}></div>
      </div>
      <div className={classes.info}>
        <h2 className={classes.company}>
          {company}
          <small className={classes.years}>
            {from} - {to}
          </small>
        </h2>
        <p>{children}</p>
        <ToolList tools={tools} />
      </div>
    </li>
  );
};
