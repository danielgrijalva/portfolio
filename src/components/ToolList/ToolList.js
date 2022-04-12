import classes from "./ToolList.module.css";

export const ToolList = ({ tools }) => {
  return (
    <div className={classes.tools}>
      {tools.map((tool) => (
        <span key={tool} className={classes.tool}>
          {tool}
        </span>
      ))}
    </div>
  );
};
