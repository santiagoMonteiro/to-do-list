import styles from "./Task.module.css";
import { Trash, Check } from "phosphor-react";
import { useState } from "react";

interface TaskProps {
  id: number;
  description: string;
  completed: boolean;
  onDeleteTask: (id: number) => void;
  onChangeTaskCompletedState: (id: number) => void;
}

export function Task({
  id,
  description,
  completed,
  onDeleteTask,
  onChangeTaskCompletedState,
}: TaskProps) {
  const [isCompleted, setIsCompleted] = useState(completed);

  console.log(isCompleted)

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleChangeTaskCompletedState() {
    setIsCompleted(!isCompleted);
    onChangeTaskCompletedState(id);
  }

  return (
    <li className={styles.container}>
      <button
        className={isCompleted ? styles.checkButtonActive : styles.checkButton}
        onClick={handleChangeTaskCompletedState}
      >
        {isCompleted && <Check size={16} weight="bold" />}
      </button>
      <p>{description}</p>
      <button className={styles.trashButton} onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </li>
  );
}
