import "./content-style.css";
import dataSet from "../../data";
import { FaCircle } from "react-icons/fa";

function Content({checkInUser}) {
  return (<div className="content-div">

    <div >
      <h3>At work ({checkInUser?1:0})</h3>
      <div className="work-div">
        {/* {dataSet.map(data => ( */}
        {checkInUser && (
        <div key={checkInUser.id}>
          <p>{checkInUser.name}</p>
          <p>{checkInUser.job}</p>
        </div>
        )}
      </div>
    </div>

    <div >
      <h3>Away (0)</h3>
      <div className="work-div">
        {dataSet.map(data => (
          <div key={data.id}>
            <p>{data.name}</p>
            <p>{data.job}</p>
          </div>
        ))}
      </div>
    </div>

    <div >
      <h3>Meetings</h3>
      <div className="work-div">
        <p>Name</p>
        <p>developer</p>
      </div>
    </div>

  </div>)
}
export default Content;