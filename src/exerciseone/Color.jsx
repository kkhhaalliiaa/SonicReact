import React, { useState } from "react";
import "./Color.css";

export default function Color() {
  const characters = [
    { name: "Sonic", color: "rgba(15, 69, 210, 0.85)", image: "sonic.jpeg" },
    { name: "Tails", color: "rgba(232, 166, 44, 0.85)", image: "tails.jpeg" },
    { name: "Knuckles", color: "rgba(211, 47, 47, 0.85)", image: "knuckles.jpeg" },
    { name: "Shadow", color: "rgba(46, 46, 46, 0.85)", image: "shadow.jpeg" },
    { name: "Tangle", color: "rgba(210, 180, 140, 0.85)", image: "tangle.jpeg" },
    { name: "Amy", color: "rgba(252, 142, 172, 0.85)", image: "amy.jpeg" },
    { name: "Sticks", color: "rgba(150, 75, 0, 0.85)", image: "sticks.jpeg" },
    { name: "Silver", color: "rgba(192, 192, 192, 0.85)", image: "silver.jpeg" },
    { name: "Doctor Eggman", color: "rgba(0, 0, 0, 0.85)", image: "eggman.jpeg" }
  ];

  const [selectedColor, setSelectedColor] = useState(""); 

  return (
    <div className="app-container" style={{ backgroundColor: selectedColor || " rgba(0, 0, 128, 0.85)" }}>
      <h1>Sonic Character Picker</h1>
      <div className="character-picker">
        {characters.map((character) => (
          <div className="character-card" key={character.name} onClick={() => setSelectedColor(character.color)}>
            <img
              src={character.image}
              alt={character.name}
              className="character-image"
            />
            <p className="character-name">{character.name}</p>
          </div>
        ))}
      </div>
      <button className="reset-button" onClick={() => setSelectedColor("")}> 🔵 Reset 🔵</button>
    </div>
  );
}
