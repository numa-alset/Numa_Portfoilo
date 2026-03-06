import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { illustration, skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  
  if (!skillsSection.display) {
    return null;
  }
  
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        
        {/* LEFT COLUMN: Image + Tech Tags */}
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
            
            {/* NEW SECTION: Detailed Skills under the image */}
            <div className="display-skills-container">
              {skillsSection.displaySkills.map((skillGroup, index) => {
                return (
                  <div key={index} className="skill-category">
                    <h3 className={isDark ? "dark-mode skill-category-title" : "skill-category-title"}>
                      {skillGroup.category}
                    </h3>
                    <div className="skill-tags-wrapper">
                      {skillGroup.items.map((item, i) => (
                        <span 
                          key={i} 
                          className={isDark ? "dark-mode skill-tag" : "skill-tag"}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* END NEW SECTION */}

          </div>
        </Fade>

        {/* RIGHT COLUMN: Title, Subtitle, and Main Bullets */}
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
              {skillsSection.title}{" "}
            </h1>
            <p className={isDark ? "dark-mode subTitle skills-text-subtitle" : "subTitle skills-text-subtitle"}>
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            
            <div className="skills-bullet-container">
              {skillsSection.skills.map((skillRow, i) => {
                return (
                  <p key={i} className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}>
                    {skillRow}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}