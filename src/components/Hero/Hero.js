import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import FixSocialIcon from "../SocialIcon/FixSocialIcon";
import { NavBtn } from "../Header/HeaderElements";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Poojith Reddy</h1>
            <h5>Data Scientist/Sofware Engineer</h5>
            <p>
              I am a Data Scientist with a strong background in mathematics and software engineering.
            </p>
            <FixSocialIcon />
            <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://drive.google.com/file/d/1LExy6F3hmUVBAX9xUe_hX7kUrs8xGAKu/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          </NavBtn>
          </HeroLeft>
          <HeroRight>
            <Image
              src="https://github.com/poojith18/photo.jpg/blob/main/photo.png?raw=true"
              alt="man-svgrepo"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
