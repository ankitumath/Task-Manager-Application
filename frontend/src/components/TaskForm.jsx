import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useTasks } from "../context/TaskContext";

function TaskForm() {

  const {
    addTask,
    editTask,
    editingTask,
    setEditingTask,
  } = useTasks();

  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  useEffect(() => {

    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
    }

  }, [editingTask]);

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!title.trim()) return;

    if (editingTask) {

      await editTask(editingTask._id, {
        title,
        description,
        priority,
        dueDate,
      });

 toast.success("Task Updated Successfully");
    } else {

      await addTask({
        title,
        description,
        priority,
      });

      toast.success("Task Added Successfully");

    }

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDueDate("");
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="bg-white rounded shadow p-6"
    >

      <h2 className="text-xl font-bold mb-4">
        {editingTask ? "Edit Task" : "Create Task"}
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

      <input
  type="date"
  className="w-full border p-2 rounded mb-3"
  value={dueDate}
  onChange={(e) => setDueDate(e.target.value)}
/>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        {editingTask ? "Update Task" : "Add Task"}
      </button>

    </form>

  );
}

export default TaskForm;