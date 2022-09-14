import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  let [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    let userInput = event.target.value;
    let meaning = emojiDictionary[userInput];

    setMeaning(meaning);

    if (meaning === undefined) {
      meaning = "we don't have this meaning in our database";
    }
  }

  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h2>Inside Out</h2>
      <input
        onChange={emojiInputHandler}
        placeholder="Search your emojis"
      ></input>
      <h2>{meaning}</h2>

      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: ".5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
