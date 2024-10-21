/* eslint-disable jsx-a11y/img-redundant-alt */
/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 */
import image from "../images/portfolio.png"; // Main image
import geotaggingImg from "../images/GeoTagging.png"; // Local images
import githubNotifierImg from "../images/GCE.png";
import codeCollabImg from "../images/CodeCollab.png";
import textOpsImg from "../images/TextOps.png";

const imageAltText = "A boy sitting on desk with laptop";

/**
 * Project list
 */
const projectList = [
  {
    title: "GeoTagging",
    description:
      "The Public Camera GeoTagging Prototype is a cutting-edge project built using React, HTML, CSS, JavaScript, Node.js, and SQL, designed to revolutionize public camera surveillance systems. Featuring key functionalities such as the Access Videos button for seamless video playback, the Call Now button for direct communication with authorities, and the Live Camera button for real-time monitoring, this prototype offers unparalleled convenience and accessibility. Users can also view the camera location on the map, ensuring optimal surveillance and security.",
    url: "https://r-geotagging.vercel.app/",
    imageUrl: geotaggingImg, // Using imported image
  },
  {
    title: "GitHub Commit Notifier (Extension)",
    description:
      "A browser extension designed to keep users updated with their GitHub collaborators' commits. Features include real-time notifications for new commits and the ability to add and track multiple GitHub users. The extension also includes a detailed commit viewer that highlights code changes and sensitive information.",
    url: "https://github-commit-notifier-website.vercel.app/",
    imageUrl: githubNotifierImg, // Using imported image
  },
  {
    title: "Code Collaboration",
    description:
      "Introducing CodeCollab, a cutting-edge web application designed to facilitate seamless collaboration among developers in real-time. With CodeCollab, multiple users can effortlessly input text simultaneously, allowing for dynamic collaboration and enhanced productivity. Simply toggle the 'Collab It' button to initiate real-time collaboration, enabling users to debug code and work on projects together in a synchronized manner.",
    url: "https://livecollaboration.vercel.app/",
    imageUrl: codeCollabImg, // Using imported image
  },
  {
    title: "TextOps",
    description:
      "Introducing TextOps, a dynamic and versatile text manipulation application developed using React.js. Users can effortlessly convert text to lowercase or uppercase, ensuring consistency and readability across documents. With the Clear Text feature, users can swiftly remove all content, providing a clean slate for new input.",
    url: "https://akashkapoor0001.github.io/TextOPS/",
    imageUrl: textOpsImg, // Using imported image
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", marginBottom: "250px" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>

              {/* Small image below the title */}
              <img
                src={project.imageUrl}
                alt={`${project.title} image`}
                style={{ width: "150px", height: "100px", marginBottom: "10px", marginLeft: "65px" }} // Adjust the size of the image as needed
              />

              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
