import Skill from './Skill';
import skillsData from '../data/skillsData';

function Skillset() {
  return (
    <div className="skillset-container">
      {Array.isArray(skillsData) &&
        skillsData.map((skills) => (
          <Skill key={skills.id} name={skills.name} image={skills.imageUrl} />
        ))}
    </div>
  );
}

export default Skillset;
