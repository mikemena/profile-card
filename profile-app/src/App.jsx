import { useState } from 'react';
import './App.css';
import Skillset from './components/Skillset';
import Toggle from './components/Toggle/Toggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className="main">
      <Toggle isDarkMode={isDarkMode} onToggle={handleToggle} />
      <h1 className="app-header">Profile Cards</h1>
      <div className="card">
        <img className="profile-image" src="../public/images/tokyo.png" />
        <h1>Tokyo</h1>
        <p>
          As a passionate software engineer, I thrive on solving complex
          problems and creating innovative solutions. Outside of coding, you'll
          often find me exploring the great outdoors, whether it's hiking
          through scenic trails or enjoying the beach. I'm also a dog
          enthusiast, always eager to spend time with furry companions and share
          adventures together. With a blend of technical expertise and a love
          for nature and animals, I bring creativity, dedication, and a
          collaborative spirit to every project I undertake.
        </p>
        <Skillset isDarkMode={isDarkMode} />
      </div>
    </main>
  );
}

export default App;
