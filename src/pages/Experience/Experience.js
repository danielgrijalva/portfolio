import { ExperienceItem } from "./ExperienceItem";
import classes from "./Experience.module.css";

export const Experience = () => {
  return (
    <div className={classes.experience}>
      <ul>
        <ExperienceItem
          from="May 2022"
          to="Oct 2022"
          company="Turn Technologies"
          position="Software Engineer"
          tools={["Python", "Flask", "Celery", "APIs", "Docker", "PostgreSQL"]}
        >
          <span>
            - Involved with the development/release life cycle of one of the
            company's main products
          </span>
          <span>
            - Back-end API development with tools like Python, Flask and Celery
          </span>
          <span>
            - Built integrations with third-party providers through APIs
          </span>
          <span>
            - Worked in an agile environment (sprints, code review, sub-tasking,
            CI/CD...)
          </span>
        </ExperienceItem>
        <ExperienceItem
          from="Feb 2021"
          to="Feb 2022"
          company="A Terceros"
          position="Software Engineer"
          tools={["Django", "JavaScript", "Pytest", "Heroku", "AWS"]}
        >
          <span>
            - Built a mobile-ready web app for managing the company's internal
            resources
          </span>
          <span>- Lead both back-end and front-end development from scratch</span>
          <span>- Data analysis and statistics dashboard</span>
          <span>- Setup of CI, documentation and deployment</span>
        </ExperienceItem>
        <ExperienceItem
          from="Jun 2020"
          to="Jun 2021"
          company="Upwork"
          position="Freelancer"
          tools={["Python", "Django", "Selenium", "Heroku"]}
        >
          <span>
            - Provided my software developer services to multiple clients over
            the world
          </span>
          <span>- Automation of data scraping & data cleansing scripts</span>
          <span>- Development of websites with Django and Flask</span>
          <span>- Fun fact: I also worked as a freelance video editor</span>
        </ExperienceItem>
        <ExperienceItem
          from="Feb 2019"
          to="Apr 2020"
          company="Nearsoft"
          position="Software Engineer"
          tools={["Python", "Flask", "JavaScript", "React"]}
        >
          <span>
            - Added full-stack features to websites with Flask and JavaScript
          </span>
          <span>
            - Involved in open source development, bootcamps and campaigns
          </span>
          <span>
            - Learned a lot of Python and React through in-house training,
            mentorship and courses
          </span>
        </ExperienceItem>
        <ExperienceItem
          from="May 2018"
          to="Aug 2018"
          company="Prodigia"
          position="Intern"
          tools={["Python", "Django"]}
        >
          <span>
            - Worked on a web app that generated optimized driving routes across
            several waypoints
          </span>
          <span>- Usage the Google Maps API with Python</span>
          <span>- Helped to save gas and time</span>
        </ExperienceItem>
      </ul>
    </div>
  );
};
