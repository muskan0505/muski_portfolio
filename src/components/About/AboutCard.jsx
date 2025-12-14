import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">

          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Muskan</span>{" "}
            from <span className="purple">Karnal, Haryana</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Frontend Engineer</span> at{" "}
            <span className="purple">Tata Technologies</span>.
            <br />
            I hold a{" "}
            <span className="purple">Bachelor of Engineering in Computer Science</span>{" "}
            from <span className="purple">Chitkara University</span>, and I’m also
            pursuing an <span className="purple">MBA in Data Science & AI</span>.
            <br />
            <br />
            I specialise in building{" "}
            <span className="purple">
              performant React applications, real-time WebSocket UIs, factory automation dashboards,
              multilingual platforms, and connected mobility interfaces.
            </span>{" "}
            I enjoy converting clean UI/UX designs into scalable, production-ready frontend systems.
            <br />
            <br />
            Outside of coding, I love doing things that keep me inspired and creative:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> UI/UX Designing 🎨
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Cars & Tech 🚗⚡
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build with purpose. Improve with curiosity."
          </p>
          <footer className="blockquote-footer">Muskan</footer>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
