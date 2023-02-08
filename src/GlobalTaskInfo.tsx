import { Task } from "./App";
import styles from "./GlobalTaskInfo.module.css";

interface GlobalTaskInfoProps {
  tasks: Task[];
}

export function GlobalTaskInfo({ tasks }: GlobalTaskInfoProps) {
  function getSumOfFinishedTasks() {
    const sum = tasks.reduce((acc, cur) => {
      if (cur.completed) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);

    return sum;
  }

  return (
    <div className={styles.container}>
      <div className={styles.createdTasks}>
        <p>Tarefas criadas</p>
        <span className={styles.taskLength}>{tasks.length}</span>
      </div>
      <div className={styles.finishedTasks}>
        <p>Concluídas</p>
        <span className={styles.taskLength}>
          {tasks.length === 0
            ? tasks.length
            : `${getSumOfFinishedTasks()} de ${tasks.length}`}
        </span>
      </div>
    </div>
  );
}
