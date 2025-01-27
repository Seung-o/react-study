import { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState("OFF");

  console.log(light); // Rerendering
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}

      <button
        onClick={() => {
          if (light === "OFF") setLight("ON");
          else setLight("OFF");
        }}
      >
        {light === "OFF" ? "켜기" : "끄기"}
      </button>
    </div>
  );
};

export default Bulb;
