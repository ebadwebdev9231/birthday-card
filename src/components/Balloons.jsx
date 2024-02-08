import React from "react";
import "./Balloons.css";
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";
import b5 from "../assets/b5.png";
import b6 from "../assets/b6.png";
import b7 from "../assets/b7.png";
import b8 from "../assets/b8.png";
import b9 from "../assets/b9.png";
import b10 from "../assets/b10.png";

const Balloons = () => {
  return (
    <div className="container">
      <div className="balloons">
        <img src={b1} alt="" style={{ "--i": 11 }} />
        <img src={b2} alt="" style={{ "--i": 12 }} />
        <img src={b3} alt="" style={{ "--i": 24 }} />
        <img src={b4} alt="" style={{ "--i": 10 }} />
        <img src={b5} alt="" style={{ "--i": 14 }} />
        <img src={b6} alt="" style={{ "--i": 23 }} />
        <img src={b7} alt="" style={{ "--i": 18 }} />
        <img src={b8} alt="" style={{ "--i": 16 }} />
        <img src={b9} alt="" style={{ "--i": 19 }} />
        <img src={b10} alt="" style={{ "--i": 20 }} />
        <img src={b1} alt="" style={{ "--i": 22 }} />
        <img src={b2} alt="" style={{ "--i": 25 }} />
        <img src={b3} alt="" style={{ "--i": 18 }} />
        <img src={b4} alt="" style={{ "--i": 21 }} />
        <img src={b5} alt="" style={{ "--i": 15 }} />
        <img src={b6} alt="" style={{ "--i": 13 }} />
        <img src={b7} alt="" style={{ "--i": 26 }} />
        <img src={b8} alt="" style={{ "--i": 17 }} />
        <img src={b9} alt="" style={{ "--i": 13 }} />
        <img src={b10} alt="" style={{ "--i": 28 }} />
      </div>
    </div>
  );
};

export default Balloons;
