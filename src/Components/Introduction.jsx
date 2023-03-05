import styles from "./Styles/Introduction.module.css";
import resume from "../Miscellaneous/Shiva_Sunchu_Resume.pdf";
import image from "../Miscellaneous/Me.svg";
import patch2 from "../Miscellaneous/background1.jpg";

export default function Introduction() {
  return (
    <>
      <div className={styles.Introduction}>
        <div className={styles.Text}>
          <h1>Shiva Sunchu</h1>
          <h2
            style={{
              backgroundImage: `url(${patch2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className={styles.Designation}
          >
            A Full Stack Web Developer
          </h2>
          <p>
            I am an enthusiastic and creative Full-Stack Web Developer with
            appropriate skills who's always willing to learn and work across
            technology and domains.
          </p>
          <div className={styles.Explore}>
            <a
              href="https://github.com/sunchushiva"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                color="white"
                height="38px"
                width="38px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
            <a href={resume} download="fp06_271_Shiva_Sunchu_Resume">
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1nupf6OgI4CPgmiVRIPOxxUb2NwuDJ45c/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className={styles.Profile}>
          <img src={image} alt="me" />
        </div>
        <div id="About"></div>
      </div>
    </>
  );
}
