import styles from "./Styles/Contact.module.css";
import flower from "../Miscellaneous/flower.gif";

export default function Love() {
  return (
    <div className={styles.Love}>
      <p>
        Made using React <img src={flower} alt="" /> Portfolio 2023-24
      </p>
    </div>
  );
}
