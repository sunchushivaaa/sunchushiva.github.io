// import styles from "./Styles.module.css";
import styles from "./Styles/Github.module.css";
import patch from "../Miscellaneous/background3.jpg";
import statistics from "../Miscellaneous/statistics.gif";

export default function Github() {
  return (
    <div className={styles.Github}>
      <div className={styles.Heading}>
        <img width="100px" height="100px" src={statistics} alt="" />

        <p>Github Statistics</p>
      </div>
      <br />
      <div
        className={styles.Display_div}
        style={{
          backgroundImage: `url(${patch})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.Small}>
          <p align="center">
            <img
              align="center"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=sunchushiva&show_icons=true&locale=en&layout=compact&bg_color=0D1117&title_color=03dac5&theme=react&hide_border=true"
              alt="sunchushiva"
            />
          </p>
          <p align="center">
            &nbsp;
            <img
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=sunchushiva&show_icons=true&locale=en&theme=react&title_color=03dac5&icon_color=c8fff4&hide_border=true&bg_color=0D1117"
              alt="sunchushiva"
            />
          </p>
        </div>
        <br />
        <p align="center">
          <img
            align="center"
            alt="Shiva Sunchu's Activity Graph"
            src="https://github-readme-activity-graph.cyclic.app/graph?username=sunchushiva&bg_color=0D1117&color=03dac5&line=03dac5&point=FFFFFF&hide_border=true"
          />
        </p>
      </div>
      <div id="Github"></div>
    </div>
  );
}
