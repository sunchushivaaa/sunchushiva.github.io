import { HashLink as Link } from "react-router-hash-link";
import { useSearchParams } from "react-router-dom";
import styles from "./Styles.module.css";

export default function Navbar() {
  const [params, setparams] = useSearchParams();

  const clickHandler = () => {
    setparams("");
  };

  return (
    <div className={styles.Navbar}>
      <div>
        <h1>
          <span className="hover">Shiva Sunchu</span> ❜❜
        </h1>
      </div>
      <div>
        <Link smooth to="/">
          <p>Home</p>
        </Link>
        <Link onClick={clickHandler} smooth to="#About">
          <p>About</p>
        </Link>
        <Link smooth to="/#Tech">
          <p onClick={clickHandler}>Skills</p>
        </Link>
        <Link smooth to="/#Github">
          <p onClick={clickHandler}>Projects</p>
        </Link>
        <Link smooth to="/#Contact">
          <p onClick={clickHandler}>Contact</p>
        </Link>
        <p>Blogs</p>
      </div>
    </div>
  );
}
