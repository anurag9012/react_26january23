import { useState } from "react";
import "./styles.css";

export default function App() {
  var [emojiclicked, setemjiclicked] = useState("");
  var [emoji, setemojimeaning] = useState("");
  var emojiDictionary = {
    "😊": "smiling",
    "😳": "disbelief",
    "😔": "sad",
    "🥡": "takeout box",
    "❤️": "love",
    "😑": "annoyance"
  };
  function clickhandler(i) {
    console.log("emoji clicked is .. ", i);
    setemjiclicked(emojiDictionary[i]);
  }
  function onchangehandler(e) {
    console.log(e.target.value);
    let emoji = e.target.value;
    if (emojiDictionary[emoji]) {
      setemojimeaning(emojiDictionary[emoji]);
    } else {
      setemojimeaning("this emoji is not in our data base");
    }
  }
  var emojiarray = Object.keys(emojiDictionary);
  return (
    <div className="App">
      <h1>emoji meaning</h1>
      <input placeholder="enter " onChange={onchangehandler}></input>
      <h3>{emoji}</h3>
      <h2>{emojiclicked}</h2>
      {emojiarray.map((item, index) => (
        <li key={index} onClick={() => clickhandler(item)}>
          {item}
        </li>
      ))}
    </div>
  );
}
