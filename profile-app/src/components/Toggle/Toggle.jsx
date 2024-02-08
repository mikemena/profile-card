import './Toggle.css';

const Toggle = ({ isDarkMode, onToggle }) => {
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isDarkMode} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
};

export default Toggle;
