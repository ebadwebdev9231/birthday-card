import "./AnimatedText.css";
const AnimatedText = () => {
  return (
    <div className="animated-text">
      <h1>
        <span style={{ "--i": 1 }}>H</span>
        <span style={{ "--i": 2 }}>a</span>
        <span style={{ "--i": 3 }}>p</span>
        <span style={{ "--i": 4 }}>p</span>
        <span style={{ "--i": 5 }}>y</span>
      </h1>
      <h1 className="break">
        <span style={{ "--i": 6 }}>B</span>
        <span style={{ "--i": 7 }}>i</span>
        <span style={{ "--i": 8 }}>r</span>
        <span style={{ "--i": 9 }}>t</span>
        <span style={{ "--i": 10 }}>h</span>
        <span style={{ "--i": 11 }}>d</span>
        <span style={{ "--i": 12 }}>a</span>
        <span style={{ "--i": 13 }}>y</span>
      </h1>
    </div>
  );
};

export default AnimatedText;
