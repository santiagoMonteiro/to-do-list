import styles from "./GlobalTaskInfo.module.css";

export function GlobalTaskInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.createdTasks}>
        <p>Tarefas criadas</p>
        <span className={styles.taskLength}>5</span>
      </div>
      <div className={styles.finishedTasks}>
        <p>Concluídas</p>
        <span className={styles.taskLength}>0</span>
      </div>
    </div>
  );
}
