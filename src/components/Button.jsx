import "./Button.css";
const Button = ({ onVisibility }) => {
  return (
    <button onClick={onVisibility} className="button">
      Click here🥳
    </button>
  );
};

export default Button;
