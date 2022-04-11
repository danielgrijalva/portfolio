import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import classes from "./Page.module.css";

export const Page = ({ id, title, children, onVisible }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (entry) {
      onVisible(entry, inView);
    }
  }, [inView, entry, onVisible]);

  return (
    <div
      className={`${classes.page} ${inView ? classes.active : ""}`}
      id={id}
      ref={ref}
    >
      {title && <h1 className={classes.title}>{title}</h1>}
      <div className={classes.content}>{children}</div>
    </div>
  );
};
