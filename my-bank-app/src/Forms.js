import './App.css';

import api from "./API/api"
import React, { useState, useEffect } from "react";
import axios from "axios";

//import Account from '../../account';



  const Forms = () => {
    const [term, setTerm] = useState([]);
    const [usersData, setUsersData] = useState([]);
    
  
    useEffect(() => {
      // const search = async () => {

      //   const { data }  = await api.get("/accounts");
    
      //   console.log(data)
      //   setTerm(data.map(account => {  
      //  return(
      //    <tbody key={account.id}> 
      //   <tr>
      // <td> { account._id }</td>  
      //  { account.cash } { account.credit }
      //  </tr>
      //       </tbody>
      //  )
      //   }
      //   ));
      // };
  
      // search();
    }, []);


  

// useEffect(()=> {

//   // const userData = await axios.get(
//   //   `http://localhost:4000/api/user/${params.id}`
//   // );


//   const fetchData = async() =>{
//     const data =  await api.get("/accounts");
//     console.log(data)
//   }
//   fetchData()
// },[])


  return (
    <div className="forms">
      <form action="http://localhost:5000/api/withdraw/" method="PUT">
        <h4>withdraw</h4>
      <input type="text" id="fname" name="account_id" placeholder="account id"/><br/>
      <input type="text" id="fname" name="withdraw_amount" placeholder="withdraw amount"/><br/>
      <button type="submit" value="Submit">withdraw</button>
      </form>

      <form action="http://localhost:5000/api/withdraw/" method="PUT">
        <h4>withdraw</h4>
      <input type="text" id="fname" name="account_id" placeholder="account id"/><br/>
      <input type="text" id="fname" name="withdraw_amount" placeholder="withdraw amount"/><br/>
      <button type="submit" value="Submit">withdraw</button>
      </form>

      <form action="http://localhost:5000/api/withdraw/" method="PUT">
        <h4>withdraw</h4>
      <input type="text" id="fname" name="account_id" placeholder="account id"/><br/>
      <input type="text" id="fname" name="withdraw_amount" placeholder="withdraw amount"/><br/>
      <button type="submit" value="Submit">withdraw</button>
      </form>
    

    </div>
  );
}

export default Forms;
