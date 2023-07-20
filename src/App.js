import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import axios from "axios";

function App() {

  const sendLogs = async (payload) => {
    try {
      const headers = {
        'Content-Type' : 'application/json'
      };
      const url = "https://your_username.pythonanywhere.com/logs"; // Replace your_username with your actual username
      let response = await axios.post(url, payload, { headers });
      console.log(response.statusText);
      alert("Log Sent.");
    } catch(error) {
      console.error("Internal Server Error.");
      alert('Failed to Send Logs. Check Console message...');
    }
  };

  useEffect(()=>{
    let payload = {
      "name": "root",
      "desciption" : "Directly from My Static Site"
    }
    alert("Sending Access Logs to Python Server...");
    sendLogs(payload);
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
