import styles from "./App.module.css";
import { PlusCircle } from "phosphor-react";

import { Header } from "./Header";
import { TaskList } from "./TaskList";
import { GlobalTaskInfo } from "./GlobalTaskInfo";
import { NoTaskNotification } from "./NoTaskNotification";
import { ChangeEvent, FormEvent, useState } from "react";

interface Task {
  description: string;
  completed: boolean;
}

export function App() {
  const [newTaskText, setNewTaskText] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  console.log(taskList);

  const isNewTaskEmpty = newTaskText.length === 0;

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      description: newTaskText,
      completed: false,
    };

    setTaskList([...taskList, newTask]);
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
            autoFocus
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

        <GlobalTaskInfo />

        {taskList.length === 0 ? <NoTaskNotification /> : <TaskList />}
      </main>
    </>
  );
}
