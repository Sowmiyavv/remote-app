import "./content-style.css";
import dataSet from "../../data";

function Content({userStatus}) {

  let atWork = [];
  let away = [];

  if(userStatus){
    atWork.push(dataSet[0]);
  }else{
    away.push(dataSet[0]);
  }

  return (<div className="content-div">

    <div >
      <h3>At work ({atWork.length})</h3>
      <div className="work-div">
       {atWork.map(data => ( 
        <div key={data.id}>
          <p>{data.name}</p>
          <p>{data.job}</p>
        </div>
       ))}
      </div>
    </div>

    <div >
      <h3>Away ({away.length})</h3>
      <div className="work-div">
        {away.map(data => (
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