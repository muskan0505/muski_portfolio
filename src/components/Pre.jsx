import React from "react";

function Pre({ load }) {
  return (
    <div id={load ? "preloader" : "preloader-none"}>
      {load && (
        <div className="loader"></div>
      )}

      {/* Inline styles so it works without any external CSS */}
      <style>{`
        #preloader {
          position: fixed;
          inset: 0;
          background: #0d0d0d;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        #preloader-none {
          display: none;
        }

        .loader {
          width: 50px;
          height: 50px;
          border: 5px solid rgba(255,255,255,0.2);
          border-top: 5px solid #c084f5;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default Pre;
