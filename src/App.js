import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😂": "Face with Tears of Joy",
  "😘": "Face Blowing a Kiss",
  "♥️": "Heart Suit",
  "😒": "Unamused Face",
  "🤔": "Thinking Face",
  "☺️": "Smiling Face",
  "✌️": "Victory Hand",
  "😔": "Pensive Face",
  "😩": "Weary Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Know your emoji meaning</h1>
        <input onChange={emojInputHandler} />
        <br />
        <br />
        <h2>{meaning}</h2>

        <h3>emojis we know</h3>
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
