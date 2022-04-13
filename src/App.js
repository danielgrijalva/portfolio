import { useState } from "react";
import { Page, NavLink } from "./components";
import { MenuIcon } from "@heroicons/react/outline";
import { Contact, Experience, Hello, Me, Projects, Tools } from "./pages";
import { Avatar } from "./media/";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const onVisible = (entry, isIntersecting) => {
    if (isIntersecting) {
      setCurrentPage(entry.target.id);
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const hideMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="nav-wrapper">
        <div className="brand-wrapper">
          <div className="brand">
            <img src={Avatar} alt="Profile" />
            <h1>Daniel Grijalva</h1>
          </div>
          <div className="menu">
            <MenuIcon className="w-8" onClick={toggleMenu} />
          </div>
        </div>
        <nav className={`${menuOpen ? "open" : ""}`}>
          <NavLink
            id="hello"
            number="I"
            current={currentPage}
            onClick={hideMenu}
          >
            Hello
          </NavLink>
          <NavLink
            id="projects"
            number="II"
            current={currentPage}
            onClick={hideMenu}
          >
            Projects
          </NavLink>
          <NavLink
            id="experience"
            number="III"
            current={currentPage}
            onClick={hideMenu}
          >
            Experience
          </NavLink>
          <NavLink
            id="tools"
            number="IV"
            current={currentPage}
            onClick={hideMenu}
          >
            Tools
          </NavLink>
          <NavLink id="me" number="V" current={currentPage} onClick={hideMenu}>
            About me
          </NavLink>
          <NavLink
            id="contact"
            number="VI"
            current={currentPage}
            onClick={hideMenu}
          >
            Contact
          </NavLink>
        </nav>
      </div>
      <main className="pages">
        <Page id="hello" title="" onVisible={onVisible}>
          <Hello />
        </Page>
        <Page id="projects" title="My projects" onVisible={onVisible}>
          <Projects />
        </Page>
        <Page id="experience" title="Experience" onVisible={onVisible}>
          <Experience />
        </Page>
        <Page id="tools" title="My skillset" onVisible={onVisible}>
          <Tools />
        </Page>
        <Page id="me" title="About me" onVisible={onVisible}>
          <Me />
        </Page>
        <Page id="contact" title="Contact me" onVisible={onVisible}>
          <Contact />
        </Page>
      </main>
    </>
  );
}

export default App;
