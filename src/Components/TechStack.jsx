import styles from "./Styles/Stack.module.css";
import stack from "../Miscellaneous/Stack.gif";
import HTML from "../Miscellaneous/HTML.png";
import CSS from "../Miscellaneous/CSS.png";
import JavaScript from "../Miscellaneous/JavaScript.png";
import TypeScript from "../Miscellaneous/TypeScript.png";
import Redux from "../Miscellaneous/Redux.png";
import React from "../Miscellaneous/React.png";
import Node from "../Miscellaneous/Node.png";
import Next from "../Miscellaneous/Next.png";
import MongoDB from "../Miscellaneous/MongoDB.png";
import Jest from "../Miscellaneous/Jest.png";
import Tailwind from "../Miscellaneous/Tailwind.png";
import Npm from "../Miscellaneous/Npm.png";

export default function TechStack() {
  const data = [
    {
      name: HTML,
      link: "HTML",
    },
    {
      name: CSS,
      link: "CSS",
    },
    {
      name: JavaScript,
      link: "JavaScript",
    },
    {
      name: TypeScript,
      link: "TypeScript",
    },
    {
      name: React,
      link: "React",
    },
    {
      name: Redux,
      link: "Redux",
    },
    {
      name: Node,
      link: "Node",
    },
    {
      name: Next,
      link: "Next",
    },
    {
      name: MongoDB,
      link: "Mongo DB",
    },
    {
      name: Jest,
      link: "Jest",
    },
    {
      name: Tailwind,
      link: "Tailwind",
    },
    {
      name: Npm,
      link: "npm",
    },
  ];
  return (
    <div className={styles.Stack}>
      <div className={styles.Heading}>
        <img width="100px" height="100px" src={stack} alt="" />
        <p>Tech Stack</p>
      </div>
      <br />
      <div className={styles.Display_div}>
        {data?.map((el, i) => {
          return (
            <div key={i}>
              <img src={el.name} alt={el.link} />
              <p>{el.link}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
