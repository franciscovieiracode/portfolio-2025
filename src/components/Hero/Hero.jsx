import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/heroImg.jpg";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import linkedinLight from "../../assets/linkedinLight.png";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/Octicons-mark-github.svg";
import githubDark from "../../assets/githubDark.png";

import cv from "../../assets/cv.pdf";
import { useTheme } from "../ThemeContext/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon
    const githubImg = theme === 'light' ? githubLight : githubDark
    const linkedinImg = theme === 'light' ? linkedinLight : linkedinDark


  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile Picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Francisco
          <br />
          Vieira
        </h1>
        <h2>Fullstack Developer</h2>
        <span>
          <a href="https://github.com/" target="_blank">
            <img src={githubImg} alt="Github Icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinImg} alt="LinkedIn Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Crafting scalable, user-focused full-stack solutions with modern
          technologies and precision
        </p>
        <a href={cv} target="_blank">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
