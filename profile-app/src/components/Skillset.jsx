import Skill from './Skill';
import skillsData from '../data/skillsData';

function Skillset({ isDarkMode }) {
  const skills = skillsData;
  const skillsetClass = isDarkMode
    ? 'skillset-container dark'
    : 'skillset-container';

  return (
    <div className={skillsetClass}>
      {skills.map((skill) => (
        <Skill key={skill.id} skillsObj={skill} isDarkMode={isDarkMode} />
      ))}
    </div>
  );
}

export default Skillset;
