// import './App.css';

// import api from "./API/api"
// import React, { useEffect } from "react";
// import axios from "axios";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
// import axios from "axios";





  const Forms = () => {



  return (
    <div className="forms">
      <form action="http://localhost:5000/api/withdraw/" method="PUT">
        <h4>withdraw</h4>
      <input type="text" id="fname" name="account_id" placeholder="account id"/><br/>
      <input type="text" id="fname" name="withdraw_amount" placeholder="withdraw amount"/><br/>
      <button type="submit" value="Submit">withdraw</button>
      </form>

      <form action="http://localhost:5000/api/diposite/" method="PUT">
        <h4>diposite</h4>
      <input type="text" id="fname" name="account_id" placeholder="account id"/><br/>
      <input type="text" id="fname" name="diposite_amount" placeholder="diposite amount"/><br/>
      <button type="submit" value="Submit">diposite</button>
      </form>

      <form action="http://localhost:5000/api/transfer/" method="PUT">
        <h4>transfer</h4>
      <input type="text" id="fname" name="sender_id" placeholder="sender id"/><br/>
      <input type="text" id="fname" name="received_id" placeholder="received id"/><br/>
      <input type="text" id="fname" name="transfer_amount" placeholder="transfer amount"/><br/>
      <button type="submit" value="Submit">transfer</button>
      </form>
    

    </div>
  );
}

export default Forms;
