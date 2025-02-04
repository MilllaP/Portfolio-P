import journeyData from "/src/assets/data/journeyYears.json";
import "/src/assets/styles/Timeline.css";

function Journey() {
  // Sorts the journey data by start year in descending order
  const sortedData = [...journeyData].sort((a, b) => b.startYear - a.startYear);

  return (
    <div className="container">
      <div className="timeline-container">
        {/* Renders timeline markers */}
        {sortedData.map((event, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"} ${
              event.type
            }`}
          >
            <div className="content">
              <h3 className={`year-header ${event.type}`}>
                {event.startYear} - {event.endYear}
              </h3>
              <h4 className={`title-header ${event.type}`}>{event.title}</h4>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
        {/* Renders timeline markers based on number of events */}
        {sortedData.map((_, index) => (
          <div
            key={index}
            className={`timeline-marker marker-${index + 1}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Journey;
