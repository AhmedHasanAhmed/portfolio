import React from "react";
import { FaReact, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

/* ======================
   SOCIAL & TECH ICONS
====================== */

export const iconRegistry = {
  // Social
  react: FaReact,
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
};

/* ======================
   CUSTOM SVG ICONS
====================== */

export const JavaScriptIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h17A1.5 1.5 0 0 1 22 3.5v17a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 20.5v-17z" />
    <path d="M9.5 8.577h2.594c.922 0 1.531.41 1.531 1.322 0 .82-.516 1.289-1.453 1.289H11.14v2.89h1.032c.937 0 1.453.469 1.453 1.289 0 .912-.609 1.322-1.531 1.322H9.5V8.577z" />
  </svg>
);
