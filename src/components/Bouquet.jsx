import './Bouquet.css'
import bouquet from "../assets/Daco_4958581.png";

const Bouquet = () => {
  return (
    <>
      <div className="bouquet bouquet-1">
        <img src={bouquet} alt="" />
      </div>
      <div className="bouquet bouquet-2">
        <img src={bouquet} alt="" />
      </div>
    </>
  );
};

export default Bouquet;
