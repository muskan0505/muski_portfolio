import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend Engineer",
          "React.js Developer",
          "JavaScript / TypeScript Developer",
          "UI Engineer",
          "WebSocket & Real-Time UI Developer",
          "Enterprise Application Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
