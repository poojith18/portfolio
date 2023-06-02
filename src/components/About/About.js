import React from "react";
// import { stackList } from "../../data/ProjectData";
import {
  // Image,
  // Technologies,
  // Tech,
  // TechImg,
  // TechName,
  ContactWrapper,
  AboutStyle
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
      <div className="SectionTitle">About Me</div>
      {/* <div className="BigCard"> */}
      <AboutStyle>
        <div className="BigCard">
        <p>Hello! I'm <strong>Poojith Reddy</strong>, currently working as a Research Assistant at University of Utah, specializing in the AI domain. My expertise lies in architecting AI applications, employing techniques such as Machine Learning, Deep Reinforcement Learning, Natural Language Processing, and Computer Vision using Python. I also have a lot of experience using Docker and Kubernetes to deploy machine and deep learning models on cloud infrastructure like AWS and Azure. I have hands-on experience in building web applications, designing APIs using Reactjs, Flask and Django frameworks. Furthermore, I have a strong background in Exploratory Data Analysis, Data Warehousing, ETL techniques, and creating business-oriented reports using Tableau. I completed my bachelor's degree from the Indian Institute of Technology (IIT) Bhubaneswar in 2019. </p>
        </div>
      </AboutStyle>
      {/* </div> */}
      </div>
      {/* <div className="Container">
        <div className="BigCard">
          <Image
            src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Poojith Reddy</strong>, I am currently working as a Research Assistant focuisng on AI domain by performing longitudinal study of how people iterate on reward design by using amazon deep racer car environment and also building AI tools that assist a user in reward design by applying ideas from Inverse Reward Design and active reward learning to cases where a human can write down reward functions. I worked as a Teaching Assistant for University of Utah MSD program for courses such as Introduction to Software Development, Computer Programming, Data Structures and Algorithms, Software Engineering. Also, I have 3 years of professional experience in Machine Learning and Data Science at Tata Consultancy Services Limited. Here, I worked on end-to-end implementation of Media Mix Modelling, ROI analysis and Customer Lifetime Value Model using Machine Learning for client Wiley, an American multinational publishing company. I have experience in architecting Artificial Intelligence applications with Machine Learning, Deep Learning, Natural Language Processing, Computer Vision using python and also have a great background in the deployment of Machine and Deep Learning models using Dockers and Kubernetes in cloud platforms like AWS, Azure. Built various Web applications and designed APIs using Flask, Django and also have in-depth knowledge in Exploratory Data Analysis, Data warehousing, ETL(Extract, Transform and Load) techniques and building reports according to Business needs using Tableau. I earned my bachelors degree from Indian Institute of Technology(IIT) Bhubaneswar in 2019.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div> */}
    </ContactWrapper>
  );
}

export default About;
