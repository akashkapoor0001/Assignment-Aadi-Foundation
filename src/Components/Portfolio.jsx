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
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "GeoTagging",
    description:
      "The Public Camera GeoTagging Prototype is a cutting-edge project built using React, HTML, CSS, JavaScript, Node.js, and SQL, designed to revolutionize public camera surveillance systems. Featuring key functionalities such as the Access Videos button for seamless video playback, the Call Now button for direct communication with authorities, and the Live Camera button for real-time monitoring, this prototype offers unparalleled convenience and accessibility. Users can also view the camera location on the map, ensuring optimal surveillance and security.",
    url: "https://r-geotagging.vercel.app/",
  },
  {
    title: "GitHub Commit Notifier (Extension)",
    description:
      "A browser extension designed to keep users updated with their GitHub collaborators' commits. Features include real-time notifications for new commits and the ability to add and track multiple GitHub users. The extension also includes a detailed commit viewer that highlights code changes and sensitive information.",
    url: "https://github-commit-notifier-website.vercel.app/",
  },
  {
    title: "Code Collaboration",
    description:
      "Introducing CodeCollab, a cutting-edge web application designed to facilitate seamless collaboration among developers in real-time. With CodeCollab, multiple users can effortlessly input text simultaneously, allowing for dynamic collaboration and enhanced productivity. Simply toggle the 'Collab It' button to initiate real-time collaboration, enabling users to debug code and work on projects together in a synchronized manner.",
    url: "https://livecollaboration.vercel.app/",
  },
  {
    title: "TextOps",
    description:
      "Introducing TextOps, a dynamic and versatile text manipulation application developed using React.js. Users can effortlessly convert text to lowercase or uppercase, ensuring consistency and readability across documents. With the Clear Text feature, users can swiftly remove all content, providing a clean slate for new input.",
    url: "https://akashkapoor0001.github.io/TextOPS/",
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
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
