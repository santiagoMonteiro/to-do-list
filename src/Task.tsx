import styles from "./Task.module.css";
import { Circle, Trash, CheckCircle } from "phosphor-react";

export function Task() {
  return (
    <li className={styles.container}>
      <button className={styles.checkButton}>
        <Circle size={24} />
      </button>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button className={styles.trashButton}>
        <Trash size={24} />
      </button>
    </li>
  );
}
