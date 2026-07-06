import { useState, useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import { toast } from "react-toastify";

function TaskForm() {
  const {
    addTask,
    editTask,
    editingTask,
    setEditingTask,
  } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  // Fill form when editing
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
      setDueDate(
        editingTask.dueDate
          ? editingTask.dueDate.slice(0, 10)
          : ""
      );
    }
  }, [editingTask]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDueDate("");
    setEditingTask(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Title is required");
      return;
    }

    try {
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
          dueDate,
        });

        toast.success("Task Added Successfully");
      }

      resetForm();
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold mb-5 text-center">
        {editingTask ? "Edit Task" : "Create Task"}
      </h2>

      <input
        type="text"
        placeholder="Task Title"
        className="w-full border p-3 rounded mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Task Description"
        className="w-full border p-3 rounded mb-4"
        rows="4"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        className="w-full border p-3 rounded mb-4"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="Low">Low Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="High">High Priority</option>
      </select>

      <input
        type="date"
        className="w-full border p-3 rounded mb-4"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <div className="flex gap-3">
        <button
          type="submit"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded transition"
        >
          {editingTask ? "Update Task" : "Add Task"}
        </button>

        {editingTask && (
          <button
            type="button"
            onClick={resetForm}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded transition"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default TaskForm;