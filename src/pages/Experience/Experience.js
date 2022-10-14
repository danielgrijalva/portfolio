import { ExperienceItem } from "./ExperienceItem";
import classes from "./Experience.module.css";

export const Experience = () => {
  return (
    <div className={classes.experience}>
      <ul>
        <ExperienceItem
          from="Feb 2021"
          to="Feb 2022"
          company="A Terceros"
          position="Software Engineer"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, minus delectus iure."
          tools={["Django", "JavaScript", "Pytest", "Heroku", "AWS"]}
        >
          Built a mobile-ready web app for managing internal resources,
          inventory statistics, projections, notifications and PDF reports.
        </ExperienceItem>
        <ExperienceItem
          from="Jun 2020"
          to="Jun 2021"
          company="Upwork"
          position="Freelancer"
          tools={["Python", "Django", "Selenium", "Heroku"]}
        >
          Provided my web dev services and automated data scraping scripts.
          Freelance job, so I worked with multiple clients across the world (fun
          fact: I also worked as a video editor).
        </ExperienceItem>
        <ExperienceItem
          from="Feb 2019"
          to="Apr 2020"
          company="Nearsoft"
          position="Software Engineer"
          tools={["Python", "Flask", "JavaScript", "React"]}
        >
          Maintenance of websites with Flask and JavaScript. Also learned a lot
          of Python and React through in-house training, mentorship and courses.
        </ExperienceItem>
        <ExperienceItem
          from="May 2018"
          to="Aug 2018"
          company="Prodigia"
          position="Intern"
          tools={["Python", "Django"]}
        >
          I worked on a web app that generated optimized driving routes across
          several waypoints using the Google Maps API, which helped to save gas
          and time.
        </ExperienceItem>
      </ul>
    </div>
  );
};