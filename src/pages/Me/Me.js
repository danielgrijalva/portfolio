import classes from "./Me.module.css";
import { AvatarLarge, MXIcon } from "../../media";

export const Me = () => {
  return (
    <div className={classes.me}>
      <div className={classes.text}>
        <div className={classes.name}>My name is Daniel,</div>
        <h1 className={classes.pitch}>
          A software engineer with 3+ years of professional experience.
        </h1>
        <p className={classes.bio}>
          I'm a driven person who has extensive Python experience, skilled in
          software development and knowledgeable in a wide range of tools and
          technologies. I am able to effectively manage my time while working on
          my own projects, as well as collaborate with others to form a
          successful team. I'm enthusiastic about UI/UX, front-end technologies
          and data science. <br />
          Oh and I'm also <em>very</em> into music and analog photography.
        </p>
        <div className={classes.based}>
          based in
          <div className={classes.mx}>
            <MXIcon /> México
          </div>
        </div>
      </div>
      <div className={classes.avatar}>
        <img src={AvatarLarge} alt="Profile" />
      </div>
    </div>
  );
};
