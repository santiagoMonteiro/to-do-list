import styles from "./App.module.css";
import { PlusCircle } from "phosphor-react";

import { Header } from "./Header";
import { TaskList } from "./TaskList";
import { GlobalTaskInfo } from "./GlobalTaskInfo";
import { NoTaskNotification } from "./NoTaskNotification";
import { ChangeEvent, FormEvent, useState } from "react";

let idCounter = 0;

export interface Task {
  id: number;
  description: string;
  completed: boolean;
}

export function App() {
  const [newTaskText, setNewTaskText] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const isNewTaskEmpty = newTaskText.length === 0;

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: idCounter,
      description: newTaskText,
      completed: false,
    };

    idCounter++;

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  }

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <form className={styles.taskForm} onSubmit={handleCreateNewTask}>
          <input
            className={styles.taskInput}
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChange={handleNewTaskChange}
          />
          <button
            className={styles.addTaskButton}
            type="submit"
            disabled={isNewTaskEmpty}
          >
            <span>Criar</span>
            <PlusCircle size={16} weight="bold" />
          </button>
        </form>

        <GlobalTaskInfo tasks={tasks} />

        {tasks.length === 0 ? (
          <NoTaskNotification />
        ) : (
          <TaskList tasks={tasks} setTasks={setTasks} />
        )}
      </main>
    </>
  );
}
