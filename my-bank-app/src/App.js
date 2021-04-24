import './App.css';
import React, {useEffect} from "react";
import api from "./API/api"


function App() {

useEffect(()=> {

  const fetchData = async() =>{
    const data =  await api.get("test");
    console.log(data)
  }
  fetchData()
},[])


  return (
    <div className="App">
      <h1>welcome to My Bank!<br/>what whould you like to do?</h1>
   {/* {data} */}
    </div>
  );
}

export default App;
