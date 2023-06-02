import React from "react";
import { ExperienceList } from "../../../data/ExperienceData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ExperienceCardElements";
function ExperienceCard() {
  return (
    <>
      {ExperienceList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <p>{list.timeline}</p>
            <Stack>
              {/* <span className="stackTitle">Coursework:</span> */}
              <span className="tags">{list.description}</span>
            </Stack>
            <Stack>
              <span className="stackTitle">Tech Stack:</span>
              <span className="tags">{list.tech_stack}</span>
            </Stack>
            <BtnGroup>
              {/* <a
                className="btn btn2 SecondarBtn"
                href={list.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a> */}
              <a
                className="btn PrimaryBtn"
                href={list.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website ➜
              </a>
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ExperienceCard;
