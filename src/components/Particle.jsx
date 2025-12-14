import React from "react";

function Particle() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,              // stays behind content
        pointerEvents: "none",  // 🔥 THIS IS CRITICAL
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6) 1px, transparent 1px),
          radial-gradient(circle at 80% 40%, rgba(255,255,255,0.5) 1px, transparent 1px),
          radial-gradient(circle at 40% 70%, rgba(255,255,255,0.4) 1px, transparent 1px),
          radial-gradient(circle at 60% 20%, rgba(255,255,255,0.3) 1px, transparent 1px)
        `,
        backgroundSize: "250px 250px",
        animation: "particleMove 40s linear infinite",
      }}
    >
      <style>
        {`
          @keyframes particleMove {
            from { transform: translateY(0); }
            to { transform: translateY(-200px); }
          }
        `}
      </style>
    </div>
  );
}

export default Particle;
