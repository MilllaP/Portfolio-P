import "/src/assets/styles/ProgressBar.css";

function Skills() {
  const skills = [
    { label: "C#", percentage: 80 },
    { label: "JavaScript", percentage: 80 },
    { label: "HTML & CSS", percentage: 80 },
    { label: "SQL", percentage: 80 },
    { label: ".NET", percentage: 80 },
    { label: "WPF", percentage: 80 },
    { label: "React", percentage: 80 },
    { label: "Java", percentage: 60 },
    { label: "Python", percentage: 60 },
    { label: "Mobile Dev", percentage: 60 },
    { label: "Kotlin", percentage: 60 },
  ];
  return (
    <div className="skills-container">
      <div className="progress-bars">
        {skills.map((skill, index) => (
          <div key={index} className="progress-bar-container">
            <span className="label">{skill.label}</span>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.percentage}%` }}
                aria-label={`${skill.label} skill level ${skill.percentage}%`}
              ></div>
            </div>
            <span className="percentage">{skill.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
