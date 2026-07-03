import { useState } from "react";
import { useTasks } from "../context/TaskContext";

function TaskForm() {

  const { addTask } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    await addTask({
      title,
      description,
      priority,
    });

    setTitle("");
    setDescription("");
    setPriority("Medium");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded shadow p-6"
    >
      <h2 className="text-xl font-bold mb-4">
        Create Task
      </h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full border p-2 rounded mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        className="w-full border p-2 rounded mb-3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        className="w-full border p-2 rounded mb-3"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;