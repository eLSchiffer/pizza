
import './style.css';

const Check = ({ status, onChange }) => {


  const handleClick = () => {
    onChange(!status);
  };

  return (
    <button
      className="check"
      onClick={handleClick}
    >
      {status ? '✓' : ''}
    </button>
  )
};

export default Check;
