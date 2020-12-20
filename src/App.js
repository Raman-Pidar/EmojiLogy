import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const EmojiDectionary = {
    "😀": " Grinning Face",
    "😄": " Grinning Face with Smiling Eyes",
    "😁": " Beaming Face with Smiling Eyes",
    "😆": " Grinning Squinting Face",
    "😅": " Grinning Face with Sweat",
    "🤣": " Rolling on the Floor Laughing",
    "😂": " Face with Tears of Joy"
  };

  var list = Object.keys(EmojiDectionary);

  var [meaning, newtxt] = useState("");

  function txt(event) {
    var input = event.target.value;
    if (input in EmojiDectionary) {
      var meaning = EmojiDectionary[event.target.value];
    } else {
      var meaning = "Data not found";
    }
    newtxt(meaning);
  }

  function emojiClickHandler(item) {
    var meaning = EmojiDectionary[item];
    newtxt(meaning);
  }
  return (
    <div className="App">
      <nav>
        <h1>EmojiLogy 😎</h1>
      </nav>

      <textarea
        style={({ color: "darkblue" }, { padding: "0rem 2rem" })}
        onChange={txt}
      ></textarea>

      <h2>{meaning}</h2>

      <h3 style={{ color: "blue" }}>Our DataBase</h3>
      <ul>
        <h2>
          {list.map(function (item) {
            return (
              <span onClick={() => emojiClickHandler(item)} key={item}>
                {item}
              </span>
            );
          })}
        </h2>
      </ul>

      <footer>
        <p>
          Do you also struggle with using Emojis and feel confused about their
          meaning ? Well this app will help you find their real meanings.😉{" "}
        </p>
      </footer>
    </div>
  );
}
