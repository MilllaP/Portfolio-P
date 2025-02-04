import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Journey from "../components/Journey";
import Contact from "../components/ContactMe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Homepage() {
  const subjectBoxRefs = useRef([]);
  const [showUpButton, setShowUpButton] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const toggleView = () => {
    setShowHeader(!showHeader);
    setShowUpButton(showHeader);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    subjectBoxRefs.current.forEach((box) => box && observer.observe(box));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site">
      {showHeader && (
        <section id="header" className="header">
          <button
            className="down-btn"
            onClick={toggleView}
            aria-label="Show main content"
          >
            <FontAwesomeIcon icon={faArrowDown} size="2x" />
          </button>
        </section>
      )}

      <section id="main-view" className="main-view">
        {["About", "Skills", "Journey", "Projects"].map((section, index) => (
          <div
            key={section}
            className="subject-box"
            ref={(el) => (subjectBoxRefs.current[index] = el)}
          >
            <h2>{section}</h2>
            {section === "About" && <About />}
            {section === "Skills" && <Skills />}
            {section === "Journey" && <Journey />}
            {section === "Projects" && <Projects />}
          </div>
        ))}

        <Contact />
        <Footer />

        {showUpButton && (
          <button
            className="up-btn"
            onClick={toggleView}
            aria-label="Back to top"
          >
            <FontAwesomeIcon icon={faArrowUp} size="2x" className="icon-up" />
            <br />
            Home
          </button>
        )}
      </section>
    </div>
  );
}

export default Homepage;
