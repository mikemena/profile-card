/* eslint-disable react/prop-types */

function Skill({ skillsObj }) {
  const { name, imageUrl: image, medalUrl: medal } = skillsObj;

  return (
    <div className="skill-container">
      <img src={medal} alt={name} />
      <h3 className="skill-name">{name}</h3>
      <img src={image} alt={name} />
    </div>
  );
}

export default Skill;
