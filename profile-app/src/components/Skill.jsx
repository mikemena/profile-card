/* eslint-disable react/prop-types */

function Skill({ skillsObj }) {
  const { name, imageUrl: image, medalUrl: medal } = skillsObj;

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
