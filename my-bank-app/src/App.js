import "./App.css";

import api from "./API/api";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Forms from "./Forms"

//import Account from '../../account';

const App = () => {
  const [term, setTerm] = useState([]);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await api.get("/accounts");
      console.log(data);
      setTerm(
        data.map((account) => {
          return (
            <tbody key={account.id}>
              <tr>
                <td> {account._id}</td>
                {account.cash} {account.credit}
              </tr>
            </tbody>
          );
        })
      );
    };

    search();
  }, []);

  useEffect(() => {
    const search = async () => {
      const { data } = await api.get("/users");

      console.log(data);
      setUsersData(
        data.map((user) => {
          return (
            <tbody key={user.id}>
              <tr>
                <td> {user._id}</td>
                <td> {user.name}</td>
                <td> {user.email}</td>
              </tr>
            </tbody>
          );
        })
      );
    };

    search();
  }, []);

  return (
    <div className="App">
      <h1>welcome to My Bank!</h1>
      <h3> all accounts </h3>
      <table>
        <thead></thead>
        {term}
      </table>
      <h3> all users </h3>
      <table>
        <thead></thead>
        {usersData}
      </table>
      <h2>what whould you like to do?</h2>


<Forms />
      
    </div>
  );
};

export default App;
