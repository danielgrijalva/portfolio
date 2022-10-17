import { MailIcon } from "@heroicons/react/outline";
import { Card } from "../../components";
import classes from "./Contact.module.css";

export const Contact = () => {
  return (
    <div className={classes.contact}>
      <Card className="flex gap-4">
        <a href="mailto:danielgrisoto@gmail.com" className="flex flex-col">
          <span className="text-sm text-zinc-400">Let's get in touch!</span>
          <span className="text-xl">danielgrisoto@gmail.com</span>
        </a>
        <div className={classes.icon}>
          <MailIcon />
        </div>
      </Card>
      <div className={classes.buttons}>
        <a
          className={classes.linkedin}
          href="https://www.linkedin.com/in/danielgrijalva/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className={classes.resume}
          target="_blank"
          href="https://drive.google.com/file/d/1hQNsjz87XBJcDhrR1yqpKknNc_Q_vXHM/view?usp=sharing"
        >
          Download resume
        </a>
      </div>
    </div>
  );
};
