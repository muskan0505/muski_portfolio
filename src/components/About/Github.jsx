// src/components/About/Github.jsx
import React from "react";
import * as GitHubCalendarModule from "react-github-calendar";
import { Row } from "react-bootstrap";

// Support packages that export default OR named export OR are CommonJS.
const GitHubCalendar =
  GitHubCalendarModule.default ??
  GitHubCalendarModule.GitHubCalendar ??
  GitHubCalendarModule;

// If the package really doesn't exist, this will be undefined and React will show nothing.
// Make sure the package is installed: `npm ls react-github-calendar`

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      {GitHubCalendar ? (
        <GitHubCalendar
          username="muskan0505" // your GitHub username
          blockSize={20}
          blockMargin={6}
          color="#c084f5"
          fontSize={16}
        />
      ) : (
        <p style={{ color: "lightgray" }}>
          GitHub calendar component not found — please run{" "}
          <code>npm install react-github-calendar</code>
        </p>
      )}
    </Row>
  );
}

export default Github;
