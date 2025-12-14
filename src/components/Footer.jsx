import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>

        {/* Left Section — Developer Credit */}
        <Col md="4" className="footer-copywright">
          <h3>Designed & Developed by Muskan</h3>
        </Col>

        {/* Center Section — Copyright */}
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} M</h3>
        </Col>

        {/* Right Section — Social Links */}
        <Col md="4" className="footer-body">
          <ul className="footer-icons">

            {/* GitHub */}
            <li className="social-icons">
              <a
                href="https://github.com/muskan0505"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>

            {/* LinkedIn */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/muskan-aa19b120b/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>

            {/* Instagram */}
            <li className="social-icons">
              <a
                href="https://www.instagram.com/_.muskan05._/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <AiFillInstagram />
              </a>
            </li>

          </ul>
        </Col>

      </Row>
    </Container>
  );
}

export default Footer;
