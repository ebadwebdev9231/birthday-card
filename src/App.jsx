import { useState } from "react";
import BirthdayCard from "./components/BirthdayCard";
import AnimatedText from "./components/AnimatedText";
import Button from "./components/Button";
import Balloons from "./components/Balloons";
import ConfettiEffect from "./components/ConfettiEffect";

const App = () => {
  const [cardVisible, setCardVisible] = useState(false);
  const onVisibility = () => {
    setCardVisible(!cardVisible);
  };
  return (
    <>
      {cardVisible ? (
        <BirthdayCard onVisibility={onVisibility} />
      ) : (
        <>
          <ConfettiEffect />
          <Balloons />
          <div className="App">
            <AnimatedText />
            <p className="surprise-text">I have Surprise for you.</p>
            <Button onVisibility={onVisibility} />
          </div>
        </>
      )}
    </>
  );
};

export default App;
