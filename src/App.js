import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newColor = color === "red" ? "blue" : "red";

  useEffect(() => {
    document.title = `The color is ${color}`;
  });

  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={() => setColor(newColor)}
        disabled={disabled}
      >
        Change to {newColor}
      </button>
      <input
        type="checkbox"
        onChange={(e) => setDisabled(e.currentTarget.checked)}
      />
    </div>
  );
}

export default App;
