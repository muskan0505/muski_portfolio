import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import homeLogo from "../../Assets/home-main.png";

import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content">
          <Row>
            {/* LEFT SIDE TEXT */}
            <Col md={7} className="home-header">
              <h1 className="heading" style={{ paddingBottom: 15 }}>
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MUSKAN</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                {/* Typing Component */}
                <Type />
              </div>
            </Col>

            {/* RIGHT SIDE IMAGE */}
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* ABOUT SECTION BELOW HERO */}
      <Home2 />

      {/* SOCIAL LINKS */}
      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              I'm always open to <span className="purple">connections</span> and networking!
            </p>

            <ul className="home-about-social-links">
              {/* GitHub */}
              <li className="social-icons">
                <a
                  href="https://github.com/muskan0505"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              {/* LinkedIn */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muskan-aa19b120b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              {/* Instagram */}
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_.muskan05._/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
