import React, { useContext } from "react";
import "./Progress.scss";
import { Fade } from "react-reveal";
import { techStack } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function TechnicalService() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="service-main-div" id="how-i-work">
        <h1 className={isDark ? "dark-mode heading" : "heading"}>
          Expertise & Workflow
        </h1>
        <div className="service-cards-container">
          {techStack.services.map((service, i) => (
            <div key={i} className={isDark ? "dark-mode service-card" : "service-card"}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-tech-tags">
                {service.tags.map((tag, j) => (
                  <span key={j} className="mini-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}