import "./styles.css";
//import useState from "react";
import React, { useState } from "react";

//var username = prompt("enter your name");
var username = "anurag";

export default function App() {
  let [likecounts, setlikecounts] = useState(0);
  function clickhandler() {
    likecounts = likecounts + 1;
    setlikecounts(likecounts++);
  }
  // var style = { color: "blue", backgroundColor: "yellow" };
  return (
    <div className="App">
      <h1 style={{ color: "blue", backgroundColor: "yellow" }}>
        welcome {username}
      </h1>
      <button onClick={clickhandler}>clickme</button>
      {likecounts}
    </div>
  );
}
