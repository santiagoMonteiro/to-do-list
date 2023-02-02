import { GlobalTaskInfo } from "./GlobalTaskInfo";
import styles from "./TaskList.module.css";

export function TaskList() {
  return (
    <div>
      <GlobalTaskInfo />
      <ul className={styles.taskContainer}>
        <li>
          <button></button>
          <p>tarefa 1</p>
          <button></button>
        </li>
      </ul>
    </div>
  );
}
