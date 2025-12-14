// src/components/Projects/ProjectCards.jsx
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  tags = []
}) {
  return (
    <Card className="project-card-view h-100">
      {imgPath && (
        <Card.Img
          variant="top"
          src={imgPath}
          alt={`${title} screenshot`}
          style={{ objectFit: "cover", height: 180 }}
        />
      )}

      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>

        <Card.Text style={{ textAlign: "justify", flexGrow: 1 }}>
          {description}
        </Card.Text>

        {tags.length > 0 && (
          <div className="mb-2">
            {tags.map((t) => (
              <small
                key={t}
                className="d-inline-block me-2 mb-1 px-2 py-1 bg-light text-muted rounded"
                style={{ fontSize: 12 }}
              >
                {t}
              </small>
            ))}
          </div>
        )}

        <div className="mt-2">
          {ghLink ? (
            <Button
              variant="outline-primary"
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="me-2 mb-2"
            >
              <BsGithub /> &nbsp; GitHub
            </Button>
          ) : null}

          {demoLink ? (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2"
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
