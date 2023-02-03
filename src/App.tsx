import styles from "./App.module.css";
import { PlusCircle } from "phosphor-react";

import { Header } from "./Header";
import { TaskList } from "./TaskList";
import { GlobalTaskInfo } from "./GlobalTaskInfo";
import { NoTaskNotification } from "./NoTaskNotification";

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

        <GlobalTaskInfo />

        {/* <NoTaskNotification /> */}

        <TaskList />
      </main>
    </>
  );
}
