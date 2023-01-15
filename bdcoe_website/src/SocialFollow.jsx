import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedinIn,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow(person) {
  return (
    <div class="social-container">
      
      <a href={`https://github.com/${person.item.github}`}
        className="Github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <a href={`https://www.linkedin.com/${person.item.linkedin}`} className="linkdin social">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>
      <a href={`https://www.instagram.com/${person.item.instagram}`}
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

    </div>
  );
}