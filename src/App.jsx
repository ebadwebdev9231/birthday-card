import { useState } from "react";
import BirthdayCard from "./components/BirthdayCard";
import AnimatedText from "./components/AnimatedText";
import Button from "./components/Button";
import Balloons from "./components/Balloons";
import ConfettiEffect from "./components/ConfettiEffect";
import Bouquet from "./components/Bouquet";
import BackgroundMusic from "./components/BackgroundMusic";

const App = () => {
  const [cardVisible, setCardVisible] = useState(false);
  const onVisibility = () => {
    setCardVisible(!cardVisible);
  };
  return (
    <div className="main">
      <BackgroundMusic />
      {cardVisible ? (
        <BirthdayCard onVisibility={onVisibility} />
      ) : (
        <>
          <Balloons />
          <ConfettiEffect />
          <div className="App">
            <Bouquet />
            <AnimatedText />
            <p className="surprise-text">
              "Click here and see your surprise that I've made."🎉
            </p>
            <Button onVisibility={onVisibility} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
