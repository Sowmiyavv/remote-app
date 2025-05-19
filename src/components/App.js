import Header from "./Header-comp/Header";
import SubHeader from "./SubHeader-comp/SubHeader";
import Content from "./Content-comp/Contents";
import { useState } from "react";
import dataSet from "../data";

function App() {

  const [checkInUser, setCheckInUser] = useState(null);

  function handleCheckIn(){
    const firstUser = dataSet[0];
    setCheckInUser(firstUser);
  }

  return (
    <div>
      <Header />
      <SubHeader onCheckIn={handleCheckIn} />
      <Content checkInUser = {checkInUser}/>
    </div>
  );
}

export default App;
