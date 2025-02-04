import { useState, useRef, useEffect } from "react";
import coursesData from "/src/assets/data/courses.json";
import "/src/assets/styles/StudyPopup.css";

const StudyPopup = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const popupRef = useRef(null);

  const handleOpenPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  useEffect(() => {
    if (isPopupVisible && popupRef.current) {
      popupRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isPopupVisible]);

  const calculateTotalCredits = (data) => {
    return data.reduce((total, course) => total + course.credits, 0);
  };

  return (
    <div>
      <button className="site-btn" onClick={handleOpenPopup}>
        Study Information
      </button>
      {isPopupVisible && (
        <>
          <div
            className={`popup-overlay ${isPopupVisible ? "visible" : ""}`}
            onClick={handleClosePopup}
            aria-hidden="true"
          ></div>
          <div
            className={`popup ${isPopupVisible ? "visible" : ""}`}
            ref={popupRef}
          >
            <h3>Study Information</h3>
            <p>
              Karelia University of Applied Sciences <br />
              Degree Programme in Business Information Technology
              <br />
              Bachelor of Business Administration, Data Processing
            </p>
            <div>
              <div className="course-table">
                <div className="header-row">
                  <div className="courseName-header">Course</div>
                  <div className="credits-header">ECTS Credits</div>
                  <div className="gradeStatus-header">Grade</div>
                </div>
                <ul>
                  {coursesData.map((course, index) => (
                    <li key={index}>
                      <div className="course-info">
                        <span className="courseName">{course.name}</span>
                        <span className="credits">
                          {course.credits !== 0 ? `${course.credits} ECTS` : ""}
                        </span>
                        <span className="gradeStatus">{course.grade}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="total-credits">
                  <strong>Total ECTS Credits: </strong>
                  {calculateTotalCredits(coursesData)}
                </div>
              </div>
              <button
                className="close-btn"
                onClick={handleClosePopup}
                aria-label="Close study information popup"
              >
                X
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StudyPopup;
