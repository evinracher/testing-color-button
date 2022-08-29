import { useEffect, useState } from "react";
import "./App.css";

export function addSpaceBeforeCamel(string) {
  return string.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [color, setColor] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);
  const newColor =
    color === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

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
        Change to {addSpaceBeforeCamel(newColor)}
      </button>
      <label htmlFor="disable-button-checkbox">Disable button</label>
      <input
        id="disable-button-checkbox"
        type="checkbox"
        // Accessibility
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.currentTarget.checked)}
      />
    </div>
  );
}

export default App;
