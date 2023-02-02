import styles from "./App.module.css";
import clipboard from "./assets/clipboard.svg";
import { PlusCircle } from "phosphor-react";

import { Header } from "./Header";
import { TaskList } from "./TaskList";

export function App() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <form className={styles.taskForm}>
          <input
            className={styles.taskInput}
            type="text"
            placeholder="Adicione uma nova tarefa"
          />
          <button className={styles.addTaskButton} type="submit">
            <span>Criar</span>
            <PlusCircle size={16} weight="bold" />
          </button>
        </form>

        {/* <div>
          <img src={clipboard} alt="" />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>

        <TaskList /> */}
      </main>
    </>
  );
}
