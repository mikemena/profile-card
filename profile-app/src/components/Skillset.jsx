import Skill from './Skill';
import skillsData from '../data/skillsData';

function Skillset() {
  const skills = skillsData;
  console.log(skills);

  return (
    <div className="skillset-container">
      {skills.map((skill) => (
        <Skill key={skill.id} skillsObj={skill} />
      ))}
    </div>
  );
}

export default Skillset;
