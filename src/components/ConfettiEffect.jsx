import React, { useEffect, useMemo, useState } from "react";
import ReactConfetti from "react-confetti";

const ConfettiEffect = () => {
  const [windowDimension, setWindowDimension] = useState({
    width: undefined,
    height: undefined,
  });
  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.onresize = () => detectSize();
  }, [windowDimension]);
  return (
    <div>
      <ReactConfetti
        width={windowDimension.width}
        height={windowDimension.height}
        recycle={false}
        tweenDuration={50000}
        numberOfPieces={1000}
      />
    </div>
  );
};

export default ConfettiEffect;
