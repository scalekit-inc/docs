import React from "react";
import styles from "./Hero.module.css";

const Hero = ({ title, subtitle, callToAction, children }) => (
  <div className="padding-vert--lg">
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.subtitle}>{subtitle}</p>
    <p className={styles.callToAction}>{callToAction}</p>
    {children}
  </div>
);

export default Hero;
