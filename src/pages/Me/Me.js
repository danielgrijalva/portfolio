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
          I'm a passionate web developer with strong Python experience and data
          abilities. I love to learn on my own with side projects, and I adapt
          to new technologies when necessary. I'm eager to learn from my peers
          and new experiences! Oh and I'm also <em>very</em> into analog
          photography and music.
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
