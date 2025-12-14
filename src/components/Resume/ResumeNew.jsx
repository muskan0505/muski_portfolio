// src/components/Resume/ResumeNew.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

const RESUME_URL = "/Resume.pdf";

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />

      {/* Single Download Button */}
      <Row className="justify-content-center mb-4">
        <Col xs="auto">
          <Button
            variant="primary"
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineDownload /> &nbsp; Download CV
          </Button>
        </Col>
      </Row>

      {/* FULL RESUME VIEW */}
      <Row className="justify-content-center">
        <Col md={10} lg={9}>
          <div
            style={{
              background: "white",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <iframe
              src={`${RESUME_URL}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
              title="Resume"
              width="100%"
              height="1100px"
              style={{
                border: "none",
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ResumeNew;
