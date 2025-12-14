// src/components/Projects/Projects.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Particle from "../Particle";

function Projects() {
  const projects = [
    {
      id: "hero-factory-automation",
      title: "Hero MotoCorp — Factory Automation",
      description:
        "Enterprise-grade React dashboard for factory-floor automation with real-time inspection, WebSocket-driven live status, multilingual UI, secure uploads, and PDF job card & QC report generation.",
      tags: ["React", "WebSockets", "i18n", "PDF Export"],
     imgPath: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",

  ghLink: "",
  demoLink: ""
    },
    {
      id: "kin-ccs",
      title: "KIN CCS — Connected Car & EV Platform",
      description:
        "Connected car UI for EV charging, telematics dashboards, subscription journeys, and eco-driving analytics. Mobile-first UI focused on analytics and user experience.",
      tags: ["React", "Telematics", "Analytics"],
      imgPath:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
      ghLink: "",
      demoLink: ""
    },
    {
      id: "hmcl-messaging",
      title: "HMCL — Real-Time Messaging Platform",
      description:
        "WhatsApp-style CRM messaging platform with real-time chat, typing indicators, operator presence, and mobile-first Angular UI integrated with APIs.",
      tags: ["Angular", "WebSockets", "CRM"],
      imgPath:
        "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
      ghLink: "",
      demoLink: ""
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          Selected <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white", textAlign: "center" }}>
          A selection of enterprise systems and UI platforms I've contributed to.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((p) => (
            <Col key={p.id} md={4} className="project-card mb-4">
              <ProjectCard
                imgPath={p.imgPath}
                title={p.title}
                description={p.description}
                ghLink={p.ghLink}
                demoLink={p.demoLink}
                tags={p.tags}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
