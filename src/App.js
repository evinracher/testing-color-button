import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const newColor = color === "red" ? "blue" : "red";

  useEffect(() => {
    document.title = `The color is ${color}`;
  });

  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={() => setColor(newColor)}
      >
        Change to {newColor}
      </button>
      <input type="checkbox" />
    </div>
  );
}

export default App;
