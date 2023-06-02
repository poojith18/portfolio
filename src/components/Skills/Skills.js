import React from "react";
import { stackList } from "../../data/ProjectData";
import {
//   Image,
  Technologies,
  Tech,
//   TechImg,
  TechName,
  Buttons,
  // Bigcard,
  ContactWrapper,
} from "./SkillsElements";
function Skills() {
  return (
    <ContactWrapper id="skills">
      <div className="Container">
      <div className="SectionTitle">Skills</div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                {/* <TechImg src={stack.img} alt={stack.name} /> */}
                {/* <Bigcard>  */}
                <Buttons>
                <TechName>{stack.name}</TechName>
                </Buttons>
                {/* </Bigcard> */}
              </Tech>
            ))}
          </Technologies>
      </div>

      {/* <div className="Container">
        <div className="SectionTitle">Skills</div>
        <div className="BigCard">
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <Bigcard> 
                <TechName>{stack.name}</TechName>
                </Bigcard>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div> */}
    </ContactWrapper>
  );
}

export default Skills;
