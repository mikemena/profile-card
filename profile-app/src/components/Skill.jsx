/* eslint-disable react/prop-types */

function Skill({ skillsObj, isDarkMode }) {
  const { name, imageUrl: image, medalUrl: medal } = skillsObj;
  const skillPillClass = isDarkMode ? '.skill-pill dark' : '.skill-pill';

  return (
    <div className="skill-container">
      <div className="skill-pill">
        <img className="medal-icon" src={medal} alt={name} />
        <h3 className="skill-name">{name}</h3>
        <img className="skill-icon" src={image} alt={name} />
      </div>
    </div>
  );
}

export default Skill;
