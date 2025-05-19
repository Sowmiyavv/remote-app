import Header from "./Header-comp/Header";
import SubHeader from "./SubHeader-comp/SubHeader";
import Content from "./Content-comp/Contents";
import { useState } from "react";

function App() {

  const[userStatus, setUserStatus] = useState(false);
  
  function handleClick(){
    setUserStatus(!userStatus);
  }

  return (
    <div>
      <Header />
      <SubHeader userStatus={userStatus} onClick={handleClick} />
      <Content userStatus = {userStatus}/>
    </div>
  );
}

export default App;
