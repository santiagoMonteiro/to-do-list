import styles from "./GlobalTaskInfo.module.css";

export function GlobalTaskInfo() {
  return (
    <div>
      <div>
        <p>Tarefas criadas</p>
        <span>5</span>
      </div>
      <div>
        <p>Concluídas</p>
        <span>2 de 5</span>
      </div>
    </div>
  );
}
