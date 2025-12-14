import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import myImg from "../../Assets/avtar.png";

import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          {/* LEFT SECTION */}
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m a <b className="purple">Frontend Engineer</b> who loves turning
              ideas into clean, scalable, and high-performance web experiences.
              <br />
              <br />
              I specialize in building
              <i>
                <b className="purple">
                  {" "}
                  React applications, real-time WebSocket UIs, factory
                  automation dashboards, multilingual platforms,
                </b>
              </i>{" "}
              and connected mobility interfaces.
              <br />
              <br />
              I have strong expertise in
              <i>
                <b className="purple"> JavaScript, TypeScript, React.js,</b>
              </i>{" "}
              along with hands-on experience in{" "}
              <b className="purple">Angular, Redux, Tailwind, REST APIs</b> and
              UI engineering.
              <br />
              <br />
              I enjoy crafting seamless user experiences and collaborating
              closely with backend, UX, and product teams to build
              <b className="purple"> real-world enterprise solutions</b>.
              <br />
              <br />
              Whenever possible, I love creating applications with
              <b className="purple"> React.js</b> and modern UI patterns —
              ensuring performance, accessibility, and elegant design.
            </p>
          </Col>

          {/* RIGHT SECTION - AVATAR */}
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
