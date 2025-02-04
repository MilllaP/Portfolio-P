import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import StudyPopup from "../components/StudyPopup";
import { FaMapMarkerAlt, FaBook } from "react-icons/fa";
import { useEffect, useState, useMemo } from "react";
import "/src/assets/styles/Aboutcard.css";

function About() {
  const toRotate = useMemo(
    () => ["3rd-year BBA student ", "Software Developer", "Web Developer"],
    []
  );
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = toRotate[loopNum % toRotate.length];
      setText((prevText) =>
        isDeleting
          ? currentText.substring(0, prevText.length - 1)
          : currentText.substring(0, prevText.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prevLoopNum) => prevLoopNum + 1);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopNum, typingSpeed, toRotate]);

  return (
    <div className="container">
      <img
        className="about-image"
        src="src/assets/images/Profileimg.jpg"
        alt="my profile picture"
      />
      <div className="about-text">
        <div className="title-container">
          <h1 className="name-title">
            Hi, I&apos;m{" "}
            <span className="wrap" style={{ color: "#f8be1e" }}>
              Milla P.
            </span>
          </h1>
          <p className="typing-title">{text}</p>
        </div>
        <p>
          I am a third-year Business Information Technology student at Karelia
          University of Applied Sciences, working towards a Bachelor of Business
          Administration in Data Processing.
        </p>
        <p>
          My studies focus on ICT environments, service development,
          programming, databases, networks, communication technologies, and
          information security.
        </p>
        <ul className="about-list">
          <li>
            <FaMapMarkerAlt className="icon" /> Tampere, Finland
          </li>
          <li>
            <FaBook className="icon" /> Finnish, English
          </li>
        </ul>
        <StudyPopup />
      </div>
    </div>
  );
}

export default About;
