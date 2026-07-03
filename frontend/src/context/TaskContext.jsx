import { createContext, useContext, useEffect, useState } from "react";
import * as taskService from "../services/taskService";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {
    try {
      const data = await taskService.getTasks();
      setTasks(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async (task) => {
    const newTask = await taskService.createTask(task);
    setTasks(prev => [newTask, ...prev]);
  };

  const removeTask = async (id) => {
    await taskService.deleteTask(id);

    setTasks(prev =>
      prev.filter(task => task._id !== id)
    );
  };

  const editTask = async (id, updatedTask) => {
    const task = await taskService.updateTask(id, updatedTask);

    setTasks(prev =>
      prev.map(t =>
        t._id === id ? task : t
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        addTask,
        removeTask,
        editTask,
        loadTasks
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);