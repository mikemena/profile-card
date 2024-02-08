import Skill from './Skill';
import skillsData from '../data/skillsData';

function Skillset({ isDarkMode }) {
  const skills = skillsData;

  return (
    <div className="skillset-container">
      {skills.map((skill) => (
        <Skill key={skill.id} skillsObj={skill} isDarkMode={isDarkMode} />
      ))}
    </div>
  );
}

export default Skillset;
