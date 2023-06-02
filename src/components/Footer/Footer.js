import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  //background-image: url(https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/footer_wave.svg);
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 150px;
  position: relative;
  display: grid;
  justify-content: center; 

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;
    // text-align: center;
    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div>
        <span>
          Created by{" "}
          <a
            href="https://github.com/poojith18/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @poojith
          </a>{" "}
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;
