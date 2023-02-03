import styles from "./NoTaskNotification.module.css";

import clipboard from "./assets/clipboard.svg";

export function NoTaskNotification() {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
