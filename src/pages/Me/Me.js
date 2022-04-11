import classes from "./Me.module.css";

export const Me = () => {
  return (
    <div className={classes.me}>
      <div className={classes.text}>
        <div className={classes.name}>My name is Daniel,</div>
        <h1 className={classes.pitch}>
          A software engineer with 3+ years of professional experience.
        </h1>
        <p className={classes.bio}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          voluptatibus commodi unde, doloremque aliquid eaque, sit voluptates
          ipsam sint fugiat reprehenderit quasi quo similique hic.
        </p>
        <div className={classes.based}>
          based in
          <div className={classes.mx}>
            <img src={process.env.PUBLIC_URL + "icons/MX.svg"} alt="" /> México
          </div>
        </div>
      </div>
      <div className={classes.avatar}>
        <img
          src={process.env.PUBLIC_URL + "images/avatar-lg.webp"}
          alt="Profile"
        />
      </div>
    </div>
  );
};
