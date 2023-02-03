import styles from "./TaskList.module.css";
import { Task } from "./Task";

export function TaskList() {
  return (
    <div>
      <ul className={styles.taskContainer}>
        <Task />
        <Task />
      </ul>
    </div>
  );
}
