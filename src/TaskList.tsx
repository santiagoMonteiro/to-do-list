import styles from "./TaskList.module.css";
import { Task } from "./Task";
import { Task as TaskType } from "./App";

interface TaskListProps {
  tasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
}

export function TaskList({ tasks, setTasks }: TaskListProps) {
  function deleteTask(id: number) {
    const filteredTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(filteredTasks);
  }

  function changeTaskCompletedState(id: number) {
    const editedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id,
          description: task.description,
          completed: !task.completed,
        };
      } else {
        return task;
      }
    });
    console.log(editedTasks)
    setTasks(editedTasks);
  }

  return (
    <div>
      <ul className={styles.taskContainer}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            description={task.description}
            completed={task.completed}
            onDeleteTask={deleteTask}
            onChangeTaskCompletedState={changeTaskCompletedState}
          />
        ))}
      </ul>
    </div>
  );
}
