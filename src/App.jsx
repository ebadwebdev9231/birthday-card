import { useState } from "react";
import BirthdayCard from "./components/BirthdayCard";
import AnimatedText from "./components/AnimatedText";
import Button from "./components/Button";

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
