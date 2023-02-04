import styles from "./Task.module.css";
import { Trash, Check } from "phosphor-react";

export function Task() {
  return (
    <li className={styles.container}>
      <button className={styles.checkButtonActive}>
        <Check size={16} weight="bold" />
      </button>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button className={styles.trashButton}>
        <Trash size={24} />
      </button>
    </li>
  );
}
