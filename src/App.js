import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🐶": "Dog",
  "🐱": "Cat",
  "🐭": "Rat",
  "🐹": "Hamster",
  "🐰": "Rabbit",
  "🦊": "Fox",
  "🐻": "Bear",
  "🐼": "Panda",
  "🐨": "Koala",
  "🐯": "Tiger",
  "🦁": "Lion",
  "🐮": "Cow",
  "🐷": "Piglet",
  "🐽": "Snout",
  "🐸": "Frog",
  "🐵": "Monkey",
  "🙈": "Monkey doesn't see evil",
  "🙉": "Monkey doesn't hear evil",
  "🙊": "Monkey doesn't speak evil",
  "🐒": "Monkey sit",
  "🐺": "Wolf",
  "🐗": "Horned pig",
  "🐴": "Horse",
  "🦄": "Unicorn",
  "🐢": "Tortoise",
  "🐍": "Snake",
  // "🦖": "Dino",
  // "🦕": "Dino",
  "🐙": "Octopus",
  "🦑": "Squid",
  "🐡": "Puffer fish",
  "🐠": "Fish",
  "🐟": "Blue fish",
  "🐬": "Dolfin",
  "🐳": "Happy Whale",
  "🐋": "whale",
  "🦈": "Shark",
  "🐊": "Crocodile",
  "🐅": "Tiger",
  "🐆": "Cheetah",
  // "🦓": "Zeebra",
  "🦍": "Gorilla",
  // "🦧": "Ape",
  "🐘": "Elephant",
  // "🦛": "Hippo",
  "🦏": "Rhino",
  "🐪": "Camel",
  "🐫": "Camel",
  // "🦒": "Giraffe",
  // "🦘": "Kangaroo",
  "🐃": "Buffalo",
  "🐂": "Ox",
  "🐄": "Cow",
  "🐎": "Horse",
  "🐖": "Piggy",
  "🐏": "Sheep",
  "🐑": "Sheep",
  // "🦙": "Llama",
  "🐐": "Goat",
  "🦌": "Deer",
  "🐕": "Dog",
  "🐩": "Sheep Dog",
  // "🦮": "Puppy",
  // "🐕‍🦺": "Doggo",
  "🐈": "Cat",
  "🐔": "Hen",
  "🐧": "Penguin",
  "🐦": "Bird",
  "🐤": "Chick",
  "🐣": "Chick",
  "🐥": "Chick",
  "🦆": "Duck",
  "🦅": "Eagle",
  "🦉": "Owl",
  "🦇": "Bat",
  "🦎": "Lizard",
  "🐓": "Hen",
  "🦃": "Dodo bird",
  // "🦚": "Peacock",
  // "🦜": "Parrot",
  // "🦢": "Swan",
  // "🦩": "Ostrich",
  "🕊️": "Pigeon",
  "🐇": "Rabbit",
  // "🦝": "Racoon",
  // "🦨": "Skunk",
  // "🦡": "Badger",
  // "🦦": "Otter",
  // "🦥": "Sloth",
  "🐁": "Rat",
  "🐀": "Rat",
  "🐿️": "Chipmunks",
  // "🦔": "Hedgehog",
  "🐾": "Animal footprints",
  "🐉": "Dragon",
  "🐲": "Dragon"
};

// converting object to array!
var knownEmojis = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler() {
    //processing
    var userInput = event.target.value;

    // if (meaning === undefined) {
    //   meaning =
    //     "Sorry! we don't have this emoji on our Animal emoji interpreter Database.";
    // }

    // Using key in object method
    if (userInput in emojiDictionary) {
      var meaning = emojiDictionary[userInput];
    } else if (userInput === "") {
      meaning = "";
    } else {
      meaning =
        "Sorry! we don't have this emoji on our Animal emoji interpreter Database.";
    }

    setMeaning(meaning); //react part to show output
  }

  function emojiClickhandler(emoji) {
    //processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); //react part to show output
  }

  return (
    <div className="App">
      <h2>🍁Animal Emoji Interpreter🍁</h2>

      <input onChange={emojiInputHandler} />

      <div>
        <h2 style={{ color: "blue" }}>{meaning}</h2>
        {/* actual output set by React using useState */}
      </div>

      <h3>Emoji's we know</h3>
      {knownEmojis.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickhandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem",
              paddingTop: "1rem",
              cursor: "pointer",
              textAlign: "justify",
              textJustify: "inter-word"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

// Important points
/**
 * class >> className
 * style takes an object
 * VISER- render "view">> user "interact" with view>> update state in "event handler">>  "Render" it.
 */
