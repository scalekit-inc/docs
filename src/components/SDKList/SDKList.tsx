import React from "react";
import styles from "./sdkList.module.css";
import NodeJsIcon from "./assets/nodejs.svg";
import GolangIcon from "./assets/golang.svg";
import PythonIcon from "./assets/python.svg";
import JavaIcon from "./assets/java.svg";
import GithubIcon from "./assets/github.svg";
import CodeIcon from "./assets/code.svg";
import Link from "@docusaurus/Link";

const sdkItems = [
  {
    title: "Node JS",
    icon: <NodeJsIcon />,
    repoLink: "https://github.com/scalekit-inc/scalekit-sdk-node",
    sampleAppLink: "https://github.com/scalekit-inc/scalekit-express-example",
  },
  {
    title: "Golang",
    icon: <GolangIcon />,
    repoLink: "https://github.com/scalekit-inc/scalekit-sdk-go",
    sampleAppLink: "https://github.com/scalekit-inc/scalekit-go-example",
  },
  {
    title: "Python",
    icon: <PythonIcon />,
    repoLink: "https://github.com/scalekit-inc/scalekit-sdk-python",
    sampleAppLink: "https://github.com/scalekit-inc/scalekit-fastapi-example",
  },
  {
    title: "Java",
    icon: <JavaIcon />,
    repoLink: "https://github.com/scalekit-inc/scalekit-sdk-java",
    sampleAppLink:
      "https://github.com/scalekit-inc/scalekit-spring-boot-example",
  },
];

const SDKList = () => {
  return (
    <div className={styles.sdkList}>
      {sdkItems.map((item, index) => (
        <div key={index} className={styles.sdkItem}>
          <div className={styles.sdkInfo}>
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.title}>{item.title}</div>
          </div>
          <div className={styles.links}>
            <Link href={item.repoLink} className={styles.githubLink}>
              <GithubIcon className={styles.githubIcon} />
              <span className={styles.githubText}>GitHub Repo</span>
            </Link>
            <Link href={item.sampleAppLink} className={styles.sampleAppLink}>
              <CodeIcon className={styles.codeIcon} />
              <span className={styles.sampleAppText}>Sample App</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SDKList;
