import { MailIcon } from "@heroicons/react/outline";
import { Card } from "../../components";
import classes from "./Contact.module.css";

export const Contact = () => {
  return (
    <div className={classes.contact}>
      <Card className="flex gap-4">
        <div className="flex flex-col">
          <span className="text-sm text-zinc-400">Let's get in touch!</span>
          <a href="mailto:danielgrisoto@gmail.com" className="text-xl">
            danielgrisoto@gmail.com
          </a>
        </div>
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
        <a className={classes.resume} href="#">
          Download resume
        </a>
      </div>
    </div>
  );
};
