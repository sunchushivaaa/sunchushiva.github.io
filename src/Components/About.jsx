import styles from "./Styles/About.module.css";
import monster from "../Miscellaneous/monster.gif";
import picture from "../Miscellaneous/Picture.jpg";

export default function About() {
  return (
    <div className={styles.About}>
      <div className={styles.Heading}>
        <img width="100px" height="100px" src={monster} alt="monster" />
        <p>About me</p>
      </div>
      <br />
      <div className={styles.About_display}>
        <div>
          <img src={picture} alt="About me" />
        </div>
        <div>
          <p>
            I am a Result-Oriented Full Stack Web Developer from Masai School
            with appropriate skills who's passionate about developing
            user-friendly web applications using MERN Stack.
            <br />
            <br /> I built a number of web applications and 4 major projects.
            Learned a great deal about teamwork, leadership, and communication.
            After months of rigorous training, here I am looking for an
            opportunity as a Full Stack Web Developer.
          </p>
        </div>
      </div>
      <div id="Tech"></div>
    </div>
  );
}
