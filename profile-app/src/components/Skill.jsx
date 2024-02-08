/* eslint-disable react/prop-types */

function Skill({ skillsObj, isDarkMode }) {
  const { name, imageUrl: image, medalUrl: medal } = skillsObj;
  const skillPillClass = isDarkMode ? 'skill-pill-dark' : 'skill-pill';
  const skillNameClass = isDarkMode ? 'skill-name-dark' : 'skill-name';

  return (
    <div className="skill-container">
      <div className={skillPillClass}>
        <img className="medal-icon" src={medal} alt={name} />
        <h3 className={skillNameClass}>{name}</h3>
        <img className="skill-icon" src={image} alt={name} />
      </div>
    </div>
  );
}

export default Skill;
