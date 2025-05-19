import { FaBell, FaTimes } from "react-icons/fa";
import "./subheader-style.css";
import meal from '../../images/meal.png';
import coffee from '../../images/coffee.png';

function SubHeader({userStatus, onClick}) {

  return (
    <div className="subheader-div">
      <p className="status-p">Status:</p>
      <div className="drop-down-div">
        <img src={meal} alt="meal-img" className="meal-img"/>
        <select className="drop-down">
          <option value="for 30mins">for 30 mins</option>
          <option value="for 60mins">for 60 mins</option>
        </select>
      </div>

      <div className="drop-down-div">
        <img src={coffee} alt="coffee-img" className="meal-img"/>
        <select className="drop-down" >
          <option value="for 15mins">for 15 mins</option>
          <option value="for 30mins">for 30 mins</option>
        </select>
      </div>

      <div className="drop-down-div">
        <FaBell size={18} className="bell-icon"/>
        <select className="drop-down" >
          <option value="for 20mins">for 20 mins</option>
          <option value="for 40mins">for 40 mins</option>
        </select>
      </div>

      <div className="check-inout-div">
        <button onClick={onClick} className={`check-inout-btn ${!userStatus ? "checkin-btn" :"checkout-btn"} `}>{!userStatus ? 'Check-In' : 'Check-Out'}</button>
      </div>
    
    <FaTimes size={24} />

    </div>

  )
}

export default SubHeader;