import styles from "./Styles/Projects.module.css";
import Farfetch from "../Miscellaneous/Farfetch.png";
import Bluefly from "../Miscellaneous/Bluefly.png";
import project from "../Miscellaneous/project.gif";

export default function Projects() {
  return (
    <div className={styles.Projects}>
      <div className={styles.Heading}>
        <img width="100px" height="100px" src={project} alt="" />
        <p>Featured Projects</p>
      </div>
      <br />
      <div className={styles.Projects_display}>
        <div>
          <img src={Farfetch} alt="Farfetch" />
          <div className={styles.Heading}>
            <h2>Farfetch Clone</h2>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/sunchushiva/fanatical-experience-6427"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/30/null/github.png"
                alt="github"
              />
            </a>
          </div>
          <p>
            Farfetch is a British-Portuguese online luxury fashion retail
            platform that sells products from over 700 boutiques and brands from
            around the world. The company was founded in 2007 by the Portuguese
            entrepreneur José Neves with its headquarters in London and main
            branches in Lisbon and Porto.
          </p>
          <div className={styles.Techstack}>
            <p title="HTML">
              <img
                src="https://img.icons8.com/color/48/null/html-5--v1.png"
                alt="html"
              />
            </p>
            <p title="CSS">
              <img
                src="https://img.icons8.com/color/48/null/css3.png"
                alt="css"
              />
            </p>
            <p>
              <img
                title="JavaScript"
                src="https://img.icons8.com/color/48/null/javascript--v1.png"
                alt="js"
              />
            </p>
          </div>
        </div>
        <div>
          <img src={Bluefly} alt="Bluefly" />
          <div className={styles.Heading}>
            <h2>Bluefly Clone</h2>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/sunchushiva/-mere-power-1068"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/30/null/github.png"
                alt="github"
              />
            </a>
          </div>
          <p>
            Bluefly, Inc. is a online retailer of designer brands, fashion
            trends and superior value. Bluefly is headquartered in the heart of
            the Fashion District. In 2011, Bluefly expanded its portfolio,
            launching Belle & Clive, a members-only shopping destination that
            presents highly curated selections of important brands via limited
            time sale events.
          </p>
          <div className={styles.Techstack}>
            <p title="HTML">
              <img
                src="https://img.icons8.com/color/48/null/html-5--v1.png"
                alt="html"
              />
            </p>
            <p title="CSS">
              <img
                src="https://img.icons8.com/color/48/null/css3.png"
                alt="css"
              />
            </p>
            <p>
              <img
                title="JavaScript"
                src="https://img.icons8.com/color/48/null/javascript--v1.png"
                alt="js"
              />
            </p>
          </div>
        </div>
      </div>
      <br />
      <div id="Contact"></div>
    </div>
  );
}
