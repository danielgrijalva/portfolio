import classes from "./NavLink.module.css";

export const NavLink = ({ id, number, current, children, onClick }) => {
  return (
    <a
      href={`#${id}`}
      className={`${classes.link} ${id === current ? classes.active : ""}`}
      onClick={onClick}
    >
      <span className={classes.number}>{number}.</span>
      <span className={classes.title}>{children}</span>
    </a>
  );
};
