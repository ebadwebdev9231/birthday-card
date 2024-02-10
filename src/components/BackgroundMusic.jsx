import birthdayMusic from "../assets/Happy_birthday_to_you.mp3";
import { PiSpeakerHigh, PiSpeakerSlash } from "react-icons/pi";
import React, { useState } from "react";

const BackgroundMusic = () => {
  const [isSoundOn, setIsSoundOn] = useState(true);
  const audioRef = React.createRef();

  const toggleSound = () => {
    if (audioRef.current) {
      isSoundOn ? audioRef.current.pause() : audioRef.current.play();
    }
    setIsSoundOn(!isSoundOn);
  };

  return (
    <div>
      <button onClick={toggleSound} className="speaker">
        {isSoundOn ? <PiSpeakerHigh /> : <PiSpeakerSlash />}
      </button>
      {isSoundOn && (
        <audio ref={audioRef} autoPlay loop>
          <source src={birthdayMusic} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default BackgroundMusic;
