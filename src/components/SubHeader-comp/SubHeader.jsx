import { FaBell, FaCheese, FaCookie, FaTimes } from "react-icons/fa";
import "./subheader-style.css";
import dataSet from "../../data";
import { useState } from "react";
import meal from '../../images/meal.png';
import coffee from '../../images/coffee.png';

function SubHeader({onCheckIn}) {

  const [atWorkStatus, setAtWorkStatus] = useState();
  const [awayStatus, setAwayStatus] = useState();
  const [notStatus, setNotiStatus] = useState();
  const [isCheckedIn, setIsCheckedIn] = useState(true);


  function handleAtWorkStatus(e){
    const newAtWorkStatus = e.target.value;
    console.log(newAtWorkStatus);
    setAtWorkStatus(newAtWorkStatus);
  }

  function handleAwayStatus(e){
    const newAwayStatus = e.target.value;
    console.log(newAwayStatus);

    setAwayStatus(newAwayStatus);
  }

  function handleNotiStatus(e){
    const newNotiStatus = e.target.value;
    console.log(newNotiStatus);

    setNotiStatus(newNotiStatus);
  }

  function handleClickChange(){
    setIsCheckedIn(prev => !prev);
    console.log(isCheckedIn)
    if(isCheckedIn){
      onCheckIn();
    }
  }

  return (
    <div className="subheader-div">
      <p className="status-p">Status:</p>
      <div className="drop-down-div">
        <img src={meal} alt="meal-img" className="meal-img"/>
        <select onChange={handleAtWorkStatus} className="drop-down">
          <option value="for 30mins">for 30 mins</option>
          <option value="for 60mins">for 60 mins</option>
        </select>
      </div>

      <div className="drop-down-div">
        <img src={coffee} alt="coffee-img" className="meal-img"/>
        <select onChange={handleAwayStatus} className="drop-down" >
          <option value="for 15mins">for 15 mins</option>
          <option value="for 30mins">for 30 mins</option>
        </select>
      </div>

      <div className="drop-down-div">
        <FaBell size={18} className="bell-icon"/>
        <select onChange={handleNotiStatus} className="drop-down" >
          <option value="for 20mins">for 20 mins</option>
          <option value="for 40mins">for 40 mins</option>
        </select>
      </div>

      <div className="check-inout-div">
        <button onClick={handleClickChange} className={`check-inout-btn ${isCheckedIn ? "checkin-btn" :"checkout-btn"} `}>{isCheckedIn ? 'Check-In' : 'Check-Out'}</button>
      </div>
    
    <FaTimes size={24} />

    </div>

  )
}

export default SubHeader;