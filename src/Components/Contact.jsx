import styles from "./Styles/Contact.module.css";
import contact from "../Miscellaneous/contact.gif";

export default function Contact() {
  return (
    <div className={styles.Contact}>
      <div className={styles.Heading}>
        <img width="100px" height="100px" src={contact} alt="" />
        <p>Contact me</p>
      </div>
      <br />
      <div className={styles.Details}>
        <div>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="hover:animate-bounce"
            color="red"
            height="32px"
            width="32px"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "orangered" }}
          >
            <path
              d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
              fill="currentColor"
            ></path>
            <path
              d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z"
              fill="currentColor"
            ></path>
            <path
              d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z"
              fill="currentColor"
            ></path>
          </svg>
          <a title="Make a Call" href="tel: +91 900431688">
            Phone : +91 9004316288
          </a>
        </div>
        <div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            role="img"
            viewBox="0 0 24 24"
            className="hover:animate-bounce"
            color="red"
            height="32px"
            width="32px"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "orangered" }}
          >
            <title></title>
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
          </svg>
          <a title="Send an e-mail" href="mailto: shivasunchu18@gmail.com">
            E-mail : chhotahathi06@gmail.com
          </a>
        </div>
        <div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 384 512"
            className="hover:animate-bounce"
            color="red"
            height="32px"
            width="32px"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "orangered" }}
          >
            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
          </svg>
          <p>Mumbai, Maharashtra</p>
        </div>
      </div>
    </div>
  );
}
