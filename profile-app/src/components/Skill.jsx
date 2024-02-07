/* eslint-disable react/prop-types */

function Skill(props) {
  console.log(props);
  return (
    <div className="skill-container">
      <h3 className="skill-name">{props.name}</h3>
      <img src={props.image} />
    </div>
  );
}

export default Skill;
